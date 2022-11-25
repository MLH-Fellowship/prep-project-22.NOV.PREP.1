import React, { useState, useEffect } from "react";
import Carousel from "react-elastic-carousel";
import ForecastCard from "./ForecastCard";
export default function Forecast({ city }) {
  const [forecastData, setForecastData] = useState([]);
  const [renderForecastCard] = useState(0);

  useEffect(() => {
    console.log(city);
    fetch(
      // `https://api.openweathermap.org/data/2.5/onecall?lat=${cityCoordinates.lat}&lon=${cityCoordinates.lon}&appid=${process.env.REACT_APP_APIKEY}`
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.REACT_APP_APIKEY}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result["cod"] === "200") {
            console.log(result);
            let data = {};
            let list = result.list;
            console.log(list);
            for (let i = 0; i < list.length; i++) {
              //date
              let data_date = list[i].dt_txt;
              data_date = data_date[8].toString() + data_date[9].toString();
              if (typeof data[data_date] == "undefined") {
                data[data_date] = {};
              }

              //time
              let data_time = list[i].dt_txt;
              console.log(data_time[11] + data_time[12]);
              data_time = data_time[11].toString() + data_time[12].toString();

              // storing the temperature and weather icon at its date and time
              data[data_date][data_time] = {
                temp: list[i].main.temp,
                icon: list[i].weather[0].icon,
              };
            }
            console.log(data);
            setForecastData(data);
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }, [city]);
  return (
    <div>
      <h3>Hourly Forecast</h3>
      <hr />
      <Carousel itemsToShow={6}>
        <ForecastCard
          forecastData={forecastData}
          renderForecastData={renderForecastCard}
        ></ForecastCard>
      </Carousel>
    </div>
  );
}
