import React, { useEffect, useState } from "react";
import "./App.css";
import SearchBar from "./components/input/SearchBar";
import Map from "./components/Map";
import { change_bg } from "./color_scheme.js";
import ItemNeed from "./components/CarryItems/ItemNeed";
import Result from "./components/result_card";
import NavBar from "./components/app-bar/AppBar";
import { Container, Grid, Stack } from "@mui/material";
import "./styles/layout.css";
import Forecast from "./components/forecast/Forecast";
import Footer from "./components/footer/footer";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [city, setCity] = useState("New York City");
  const [results, setResults] = useState(null);
  const [gifurl, setGifUrl] = useState(change_bg());
  const [cityCoordinates, setCityCoordinates] = useState({
    lat: 51.505,
    lon: -0.09,
  });

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_APIKEY}`
    )
      .then((res) => res.json())
      .then((result) => {
        if (result["cod"] !== 200) {
          setIsLoaded(false);
          return;
        }

        console.log(result);

        setIsLoaded(true);
        setResults(result);
        setCityCoordinates({
          lat: result.coord.lat,
          lon: result.coord.lon,
        });

        setGifUrl(result.weather[0].main);
      })
      .catch((error) => {
        setIsLoaded(true);
        setError(error);
      });
  }, [city]);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <React.Fragment>
      <NavBar />

      <Container
        maxWidth="xl"
        sx={{
          marginTop: "6rem",
        }}
      >
        <Stack direction="column">
          <SearchBar setCity={setCity} city={city} />

          <Grid container direction="row" className="card-group">
            <Grid item xs={12} md={6}>
              <Result results={results} isLoaded={isLoaded} gifurl={gifurl} />
            </Grid>
            <Grid item xs={12} md={6}>
              <Map
                city={city}
                setCity={setCity}
                cityCoordinates={cityCoordinates}
                setCityCoordinates={setCityCoordinates}
              />
            </Grid>
          </Grid>

          <Forecast city={city} />

          <ItemNeed resultantdata={results && results.weather[0].main} />
          <Footer/>
        </Stack>
      </Container>
    </React.Fragment>
  );
}

export default App;
