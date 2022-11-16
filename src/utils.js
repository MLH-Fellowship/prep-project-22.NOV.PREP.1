export const getAutocompleteCities = (query, setFunc) =>
  setTimeout(async () => {
    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&apiKey=${process.env.REACT_APP_GEO_API}`
      );
      const res = await response.json();

      const cities = res.features.map((feature) => {
        return feature.properties.formatted;
      });

      console.log(cities);
      setFunc(cities);
      return cities;
    } catch (err) {
      console.log(err);
      return [];
    }
  }, 200);
