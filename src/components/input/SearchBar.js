import { useEffect, useRef, useState } from "react";
import { getAutocompleteCities } from "../../utils";

const SearchBar = ({ city, setCity }) => {
  const inputRef = useRef();
  const [autocompleteCities, setAutocompleteCities] = useState([]);
  let reqTimeout = null;

  useEffect (() => {
    inputRef.current.value = city;
  }, [city]);

  // Load suggestations
  const handleOnChange = async (e) => {
    if (reqTimeout) {
      clearTimeout(reqTimeout);
    }

    const cityValue = inputRef.current.value;

    reqTimeout = getAutocompleteCities(cityValue, setAutocompleteCities);
  };

  // If user clicks enter on input field
  const handleEnter = async (e) => {
    const cityValue = inputRef.current.value;

    // Triggered when user clicks enter on input field
    if (e.code === "Enter") {
      setCity(cityValue);
    }
  };

  // If user clicks on item from data list
  const handleListItemClick = async (e) => {
    const value = e.currentTarget.value;

    autocompleteCities.forEach((city) => {
      if (city.city === value) {
        setCity(city.city);
        return;
      }
    });
  };

  return (
    <div className="input-container">
      <i className="fa fa-map-marker input-icon" aria-hidden="true"></i>
      <input
        data-testid="search-bar"
        ref={inputRef}
        list="cities"
        name="search"
        type="text"
        defaultValue="New York City"
        placeholder="Enter a city"
        autoComplete="off"
        onKeyDown={handleEnter}
        onChange={handleOnChange}
        onInput={handleListItemClick}
      />

      {
        autocompleteCities.length > 0 && (
          <datalist data-testid="data-list" id="cities">
            {autocompleteCities.map((city, i) => (
              <option
                key={i}
                value={city.city}
              >{`${city.city}, ${city.country}`}</option>
            ))}
          </datalist>
        )
      }
    </div>
  );
};

export default SearchBar;
