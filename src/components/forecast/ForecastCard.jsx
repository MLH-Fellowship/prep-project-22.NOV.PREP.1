import { Card, CardContent, Stack } from "@mui/material";

// import ForecastCard from "./ForecastCard";
const ForecastCard = ({ forecastData, renderForecastData }) => {
  const renderCardData =
    forecastData[Object.keys(forecastData)[renderForecastData]];

  console.log("DATA: ", forecastData);
  // console.log("LENGTH 2: ", renderForecastData);

  const days = Object.keys(forecastData);
  console.log("DAYS: ", days);

  const data = days.map((day) => {
    const dayData = forecastData[day]["18"];
    // console.log(day, dayData);

    return dayData;
  });

  console.log("LOL: ", data);

  // const dates = Object.keys(data);

  // console.log("DATES: ", dates);

  return (
    <Stack
      direction="row"
      justifyContent="space-evenly"
      spacing={3}
      sx={{
        marginTop: "3rem",
        padding: "0",
      }}
    >
      {/* {console.log(renderCardData)} */}
      {/* {renderCardData &&
        Object.keys(renderCardData).map((key) => (
          <div className="card-container" style={{ display: "inline-block" }}>
            <p>{key}:00</p>
            <p className="temp">
              {Math.round(renderCardData[key].temp - 273.15, 2)}°C
            </p>
            <img
              src={`http://openweathermap.org/img/wn/${renderCardData[key].icon}@2x.png`}
              alt="weather icon"
            />
          </div>
        ))} */}
      {data.map((item, i) => {
        if (!item) return <></>;

        return (
          <>
            <Card>
              <CardContent>
                <Stack direction="column">
                  <p
                    style={{
                      fontWeight: "bold",
                    }}
                  >
                    {days[i]}th
                  </p>
                  <p className="temp">{Math.round(item.temp - 273.15, 2)}°C</p>
                  <img
                    src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
                    alt="weather icon"
                  />
                </Stack>
              </CardContent>
            </Card>
            {/* <div className="card-container" style={{ display: "inline-block" }}>
              <p>{days[i]}th</p>
              <p className="temp">{Math.round(item.temp - 273.15, 2)}°C</p>
              <img
                src={`http://openweathermap.org/img/wn/${item.icon}@2x.png`}
                alt="weather icon"
              />
            </div> */}
          </>
        );
      })}
    </Stack>
  );
};

export default ForecastCard;
