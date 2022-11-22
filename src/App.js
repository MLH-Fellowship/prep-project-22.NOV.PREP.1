import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/input/SearchBar";
import logo from "./mlh-prep.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Forecast from "./components/Forecast";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [city, setCity] = useState("New York City");
  const [results, setResults] = useState(null);

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

        <SearchBar setCity={setCity} />

        <div className="Results">
          {!isLoaded && <h2>Loading...</h2>}
          {/* {console.log(results.coord.lat)}          */}
          {isLoaded && results && (
            <>
              <h3>{results.weather[0].main}</h3>
              <p>Feels like {results.main.feels_like}°C</p>
              <i>
                <p>
                  {results.name}, {results.sys.country}
                </p>
              </i>
            </>
          )}
        </div>
        <br />
        <br/>
      <Forecast />

      </div>
    </React.Fragment>
  );
}

export default App;
