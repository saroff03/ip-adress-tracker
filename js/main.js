import { MY_API_KEY } from "./config.js";

const searchBtn = document.getElementById("search-btn") 
let fieldIp = document.getElementById("outcome-ip")
let fieldLocation = document.getElementById("outcome-location")
let fieldTimezone = document.getElementById("outcome-timezone")
let fieldIsp = document.getElementById("outcome-isp")

function startFetch() {
  let ip = document.getElementById("ip-adress").value

  fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${MY_API_KEY}&ipAddress=${ip}`) 

  .then(response => response.json())

  .then(response => {
    console.log(response);

    fieldIp.innerHTML = response.ip;
    fieldLocation.innerHTML = response.location.city + `,` + response.location.country;
    fieldTimezone.innerHTML = `UTC ` + response.location.timezone;
    fieldIsp.innerHTML = response.isp;
  })    

  .catch(err => {
	  console.log(err);
  });
}


searchBtn.addEventListener("click", startFetch);
