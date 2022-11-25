import React, { useState, useEffect } from "react";
import leaflet from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

const DefaultIcon = leaflet.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -41],
});

leaflet.Marker.prototype.options.icon = DefaultIcon;

const SetMarkerDynamically = ({
  city,
  setCity,
  cityCoordinates,
  setCityCoordinates,
}) => {
  useMapEvent("click", (e) => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${e.latlng.lat}&lon=${e.latlng.lng}&appid=${process.env.REACT_APP_APIKEY}`
    )
      .then((res) => res.json())
      .then((res) => {
        // console.log("MAP: ", res);
        setCityCoordinates({ lat: e.latlng.lat, lon: e.latlng.lng });
        setCity(res.name);
      });
  });

  return (
    <Marker position={[cityCoordinates.lat, cityCoordinates.lon]}>
      <Popup>{city}</Popup>
    </Marker>
  );
};

const Map = ({ city, setCity, cityCoordinates, setCityCoordinates }) => {
  const [map, setMap] = useState();

  useEffect(() => {
    setMap(map);
  }, [map]);

  useEffect(() => {
    const mapCenter = [cityCoordinates.lat, cityCoordinates.lon];
    if (map) {
      if (map.getZoom() < 4) {
        map.setView(mapCenter, 7);
      } else {
        map.setView(mapCenter, map.getZoom());
      }
    }
  }, [map, cityCoordinates, city]);

  return (
    <MapContainer
      whenCreated={setMap}
      center={[cityCoordinates.lat, cityCoordinates.lon]}
      scrollWheelZoom={true}
      zoom={7}
      style={{
        height: "100%",
        width: "100%",
        borderRadius: "1rem",
        minHeight: "300px",
      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url="https://tiles.stadiamaps.com/tiles/outdoors/{z}/{x}/{y}{r}.png?api_key={process.env.REACT_APP_APIKEY}"
      />
      <SetMarkerDynamically
        city={city}
        setCity={setCity}
        cityCoordinates={cityCoordinates}
        setCityCoordinates={setCityCoordinates}
      />
    </MapContainer>
  );
};

export default Map;
