var apikey = 'c0669b0dd6717ffafb1030a695d5b96b';

async function getdata() {
   
    let res = await fetch('https://restcountries.com/v3.1/all')
    let data = await res.json();

    data.map(value => {
        var spreadOperator = {
            capital: value.capital,
            region: value.region,
            latitude: value.latlng[0],
            longitude: value.latlng[1],
            countryName: value.name.common,
            flag: value.flags.png,
            countryCode: value.cioc,
            population: value.population,
        }
        createcountry(spreadOperator)
    })
     console.log(data);
}
getdata();




function createcountry({ capital, region, latitude, longitude, countryName, flag, countryCode, population }) {
     console.log(latitude, longitude, countryName);
    let columns = document.querySelector('.row');

    columns.innerHTML +=
        `
        <div class="col col-sm-6 col-md-4 col-lg-4 col-xl-4">
            <div class="card h-100">
                <div class="card-header">
                <h4 class="my-0 fw-normal">${countryName}</h4>
                </div>
                <div class="card-body">
                    <img src="${flag}"
                    class="card-img-top" alt="${countryName}">
                    <div class="card-text">'
                        <p class="text-center">Region: ${region}<p>
                        <p class="text-center">Native Name: ${capital}<p>
                        <p class="text-center">Population: ${population}<p>
                    </div>
                   
                    <a type="button" class="btn btn-primary" id="myBtn" onclick= getWeather(${latitude},${longitude},${countryName})>Click to Weather</a>
                </div>
            </div> 
        </div>
            `
}

async function getWeather(countryName) {
    const apiKey = 'c0669b0dd6717ffafb1030a695d5b96b'; // Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
    alert("Hello World!");
}
 document.addEventListener("click", (event) => event.getWeather())

document.getElementById("myBtn").addEventListener("click", function () {

});























