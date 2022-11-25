import { Card, CardContent, Grid, Stack } from "@mui/material";
import React from "react";
import { change_icon, change_bg } from "../color_scheme.js";

const WeatherInfo = ({ label, value }) => {
  return (
    <Grid item xs={6}>
      <p className="weather-info-heading">{label}</p>
      <p className="weather-info-values">{value}</p>
    </Grid>
  );
};

export default function Result(props) {
  const data = [
    {
      label: "VISIBILITY",
      value: props.results?.visibility,
    },
    {
      label: "PRESSURE",
      value: props.results?.main.pressure,
    },
    {
      label: "WIND",
      value: `${props.results?.wind.speed} Km/h`,
    },
    {
      label: "HUMIDITY",
      value: `${props.results?.main.humidity}%`,
    },
  ];

  return (
    <Card
      className="Results"
      style={{ backgroundImage: change_bg(props.gifurl) }}
      sx={{
        borderRadius: "1rem",
        backgroundColor: "rgba(0, 0, 0, 0.303)",
        color: "white",
      }}
    >
      <CardContent>
        {!props.isLoaded && <h2>Loading...</h2>}
        {props.isLoaded && props.results && (
          <Grid container justifyContent="center" alignItems="center">
            <Grid item xs={6}>
              <p id="temp">
                {Math.round(props.results?.main.feels_like)} &#8451;
              </p>

              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                <p className="weather-status">
                  {props.results?.weather[0].main}
                </p>
                {change_icon(props.results?.weather[0].main)}
              </Stack>
            </Grid>

            <Grid item xs={6}>
              <Grid container direction="row">
                {data.map((item) => (
                  <WeatherInfo {...item} />
                ))}
              </Grid>
            </Grid>
          </Grid>
        )}
      </CardContent>
    </Card>
  );
}
