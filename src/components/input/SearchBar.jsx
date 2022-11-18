const SearchBar = ({ inputRef, onKeyDown, onChange, autocompleteCities }) => {
  return (
    <div className="input-container">
      <i className="fa fa-map-marker input-icon" aria-hidden="true"></i>
      <input
        list="cities"
        name="search"
        type="text"
        ref={inputRef}
        onKeyDown={onKeyDown}
        onChange={onChange}
        defaultValue="New York City"
        placeholder="Enter a city"
        autoComplete="off"
      />

      <datalist id="cities">
        {autocompleteCities.map((city, i) => (
          <option key={i}>{`${city}`}</option>
        ))}
      </datalist>
    </div>
  );
};

export default SearchBar;
