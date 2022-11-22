const searchBtn = document.getElementById("search-btn") 
let fieldIp = document.getElementById("outcome-ip")
let fieldLocation = document.getElementById("outcome-location")
let fieldTimezone = document.getElementById("outcome-timezone")
let fieldIsp = document.getElementById("outcome-isp")
let lat = document.getElementById("lat")
let long = document.getElementById("long")

//LeaftetJS Map
let myMap = L.map("map").setView([51.505, -0.09], 13);
let marker = L.marker([51.5, -0.09]).addTo(myMap); 



L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(myMap);



function startFetch() {
  let ip = document.getElementById("ip-adress").value

  fetch(`/api?ipAddress=${ip}`) 

  .then(response => response.json())

  .then(response => {
    console.log(response);

    fieldIp.innerHTML = response.ip;
    fieldLocation.innerHTML = response.location.city + `,` + response.location.country;
    fieldTimezone.innerHTML = `UTC ` + response.location.timezone;
    fieldIsp.innerHTML = response.isp;
    lat.innerHTML = response.location.lat;
    long.innerHTML = response.location.lng;

    myMap.setView([lat.textContent, long.textContent]);
    marker.setLatLng([lat.textContent, long.textContent]);
  })    

  .catch(err => {
	  console.log(err);
  });
}


searchBtn.addEventListener("click", startFetch);
