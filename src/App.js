import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/input/SearchBar";
import Map from "./components/Map";
import logo from "./mlh-prep.png";
import { change_bg } from "./color_scheme.js";
import ItemNeed from "./components/CarryItems/ItemNeed";
import Result from "./components/result_card";


function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState("New York City");
  const [results, setResults] = useState(null);
  const [gifurl,setGifUrl] = useState(change_bg());
  const [cityCoordinates, setCityCoordinates] = useState({
    lat: 51.505,
    lon: -0.09,
  });

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_APIKEY}`
    )
      .then((res) => res.json())
      .then(
        (result) => {
          if (result["cod"] !== 200) {
            setIsLoaded(false);
          } else {
            setIsLoaded(true);
            setResults(result);
            setCityCoordinates({
              lat: result.coord.lat,
              lon: result.coord.lon,
            });
            setGifUrl(result.weather[0].main);
          }
        },
        (error) => {

          setIsLoaded(true);
          setError(error);
        }
      );
  }, [city]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }
 

  return (
    <React.Fragment>
      <img className="logo" src={logo} alt="MLH Prep Logo"></img>
      <div>
        <h2>Enter a city below 👇</h2>
        <SearchBar setCity={setCity} city={city} />

        <div className="weather-map-container"> 
          <div className="weather-map-container-wrapper"> 
              <Result results={results} isLoaded={isLoaded} gifurl={gifurl}/>
                <div className="weather-map">
                  <Map 
                    city={city}
                    setCity={setCity}
                    cityCoordinates={cityCoordinates}
                    setCityCoordinates={setCityCoordinates}/>
                </div>
          </div>
        </div>

        <ItemNeed resultantdata = {results && results.weather[0].main}    /> 
      </div>
    </React.Fragment>
  );
}

export default App;
