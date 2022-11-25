// import ForecastCard from "./ForecastCard";
const ForecastCard = ({ forecastData, renderForecastData }) => {
  const renderCardData =
    forecastData[Object.keys(forecastData)[renderForecastData]];
  return (
    <div className="card-wrapper">
      {/* {console.log(renderCardData)} */}
      {renderCardData &&
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
        ))}
    </div>
  );
};

export default ForecastCard;
