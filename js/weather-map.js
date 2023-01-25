//   <--- Mapbox

mapboxgl.accessToken = keys.mapbox;
const map = new mapboxgl.Map({
  container: "map", // container ID
  style: "mapbox://styles/mapbox/streets-v12", // style URL
  center: [-98.490415, 29.4267], // starting position [lng, lat]
  zoom: 9, // starting zoom
});

map.on("load", function () {
  map.resize();
});

("use strict");

let hidden = document.querySelector("#hidden");

let array = [];

let marker = new mapboxgl.Marker();
marker.remove();

// <--- F1 - Event for submit button click
$("#btn").on("click", function (e) {
  e.preventDefault();
  $(".container-cards").css({
    height: "auto",
    opacity: 1,
    transition: "height 0ms 0ms, opacity 900ms 0ms",
  });
  array = [];
  const longAndLat = [];

  let city = "";
  marker.remove();

  city = $("#search").val();

  // F2 - Pulling long and lat based on city
  $.get("http://api.openweathermap.org/geo/1.0/direct", {
    q: city,
    limit: 5,
    appid: keys.openWeather,
    // units: "imperial",
  }).done(function (data) {
    const lon = data[0].lon;
    const lat = data[0].lat;
    longAndLat.push(lon);
    longAndLat.push(lat);
    console.log(typeof data[0].lon, "type of data");
    console.log(longAndLat);

    // <---- F3 - Flys to location set by long and lat (F1)
    const fly = (array) => {
      map.flyTo({
        center: array,
        duration: 6000,
        essential: true,
      });
    };

    fly(longAndLat); // <-- (F3)

    marker = new mapboxgl.Marker({
      draggable: true,
    })
      .setLngLat(longAndLat)
      .addTo(map);

    // <--- F4 - Function that replaces and adds marker on drag; updates HTML
    function onDragEnd() {
      array = [];
      const lngLat = marker.getLngLat();
      coordinates.style.display = "block";
      coordinates.innerHTML = `Longitude: ${lngLat.lng}<br />Latitude: ${lngLat.lat}`;
      array.push(lngLat.lng, lngLat.lat);
      console.log(array, "after move");

      let html = "";

      $.get("https://api.openweathermap.org/data/2.5/forecast", {
        lat: array[1],
        lon: array[0],
        appid: keys.openWeather,
        units: "imperial",
      })
        .done(function (data) {
          let weather = "";
          for (let i = 0; i < data.list.length; i += 8) {
            if (
              data.list[i].weather[0].id >= 503 &&
              data.list[i].weather[0].id <= 531
            ) {
              weather = "rain";
            } else if (
              data.list[i].weather[0].id >= 600 &&
              data.list[i].weather[0].id <= 622
            ) {
              weather = "snow";
            } else if (data.list[i].weather[0].id < 502) {
              weather = "light-rain-502";
            } else if (data.list[i].weather[0].id === 800) {
              weather = "clear-800";
            } else if (data.list[i].weather[0].id === 804) {
              weather = "overcast-2-804";
            } else {
              weather = "blank";
            }
            html += `
                    <div class="cards card1 ${weather}">
                      <div class="weather-info">
                        <div class="titles">Current Temperature</div>
                        <div class="temp">${data.list[i].main.temp}&deg;F</div>
                        <div class="titles">Humidity</div>
                        <div class="humidity">${data.list[i].main.humidity}&#37;</div>
                        
                        <div class="titles">Wind Speed</div>
                        <div class="wind">${data.list[i].wind.speed}mph</div>
                        <div class="titles">Current Conditions</div>
                        <div class="description ">${data.list[i].weather[0].description}</div>
                      </div>
                    </div>
                    `;
          }
          $("#container-cards").html(html);
        })
        .fail(function (jqXhr, status, error) {
          console.log(jqXhr);
          console.log(status);
          console.log(error);
        });
    }

    marker.on("dragend", onDragEnd); //<--- completes marker drag
  });

  // <--- Clears input field on click
  $("#search").click(function () {
    $("#search").val("");
  });

  let html = ""; // <----clears HTML before each reload of data

  // <--- F5 - Pulls data from weatehrAPI and pushes to HTML using value from input field
  $.get(
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
      city +
      "&appid=" +
      keys.openWeather +
      "",
    {
      units: "imperial",
    }
  )
    .done(function (data) {
      // lhtml = "";
      let weather = "";
      for (let i = 0; i < data.list.length; i += 8) {
        if (
          data.list[i].weather[0].id >= 503 &&
          data.list[i].weather[0].id <= 531
        ) {
          weather = "rain";
        } else if (
          data.list[i].weather[0].id >= 600 &&
          data.list[i].weather[0].id <= 622
        ) {
          weather = "snow";
        } else if (data.list[i].weather[0].id < 502) {
          weather = "light-rain-502";
        } else if (data.list[i].weather[0].id === 800) {
          weather = "clear-800";
        } else if (data.list[i].weather[0].id === 804) {
          weather = "overcast-2-804";
        } else {
          weather = "blank";
        }
        html += `<div class="cards card1 ${weather}">
                      <div class="weather-info">
                        <div class="titles">Current Temperature</div>
                        <div class="temp">${data.list[i].main.temp}&deg;F</div>
                        <div class="titles">Humidity</div>
                        <div class="humidity">${data.list[i].main.humidity}&#37;</div>
                        <div class="titles">Wind Speed</div>
                        <div class="wind">${data.list[i].wind.speed}mph</div>
                        <div class="titles">Current Conditions</div>
                        <div class="description ">${data.list[i].weather[0].description}</div>
                      </div>
                    </div>`;
      }
      $("#container-cards").html(html);
    })
    .fail(function (jqXhr, status, error) {
      console.log(jqXhr);
      console.log(status);
      console.log(error);
    });
});
