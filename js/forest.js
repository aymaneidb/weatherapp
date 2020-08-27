const key = 'wcHXiLabK3n6fJpBxPfyLOOmaiobc5I3';

var getcity = async (city) => {

    var autocomplete = 'https://dataservice.accuweather.com/locations/v1/cities/search';
    var query = `?apikey=${key}&q=${city}`;
    var response = await fetch(autocomplete + query);
    var data = await response.json();
    return data[0];

}

var getweather = async (keycity) => {
    var requestweather = await 'http://dataservice.accuweather.com/currentconditions/v1/';
    var ask = `${keycity}?apikey=${key}`;
    var requeste1 = await fetch(requestweather + ask)
    var temperature = await requeste1.json();
    return temperature;
}
