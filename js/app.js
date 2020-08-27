var input = document.getElementById('input');
var form = document.querySelector('.form');
var cityname = document.querySelector('.nameofcity');
var weathercondition = document.querySelector('.weathertype');
var degree = document.getElementById('degrees');
var details = document.querySelector('.result')
var image=document.querySelector('.imagee')
var icon=document.querySelector('.icon')
var thebox=document.querySelector('.card')

const updateapp = async (data) => {
    thebox.classList.remove('d-none')
    const cityinfo = data.cityinfo;
    const cityweather = data.cityweather[0]; 

    details.innerHTML = ` 
        <h3 class="nameofcity card-title text-center my-3">${cityinfo.EnglishName}</h3>
        <div class="weathertype card-text  text-center   h5 my-2">${cityweather.WeatherText}</div>
        <div class="degree display-4 my-3">
            <span>${cityweather.Temperature.Metric.Value}</span>
            <span id="degrees">&deg;C</span>
        </div>
    `;
    let imagsrc=null
    if(cityweather.IsDayTime){
        imagsrc='img/day.svg';
    }else{
        imagsrc='img/night.svg';
    }
    image.setAttribute('src',imagsrc);

    let iconenum=cityweather.WeatherIcon
    let iconesrc='/img/icons/'+iconenum+'.svg';
    icon.setAttribute('src',iconesrc)
    
}

const updatecity = async (city) => {
    const cityinfo = await getcity(city);
    const cityweather = await getweather(cityinfo.Key);
    return { cityinfo, cityweather };
};

form.addEventListener('submit', e => {
    e.preventDefault();
    const city = form.city.value.trim();
    form.reset();
    updatecity(city)
        .then(data => updateapp(data))
        .catch(err => console.log(err));

});
