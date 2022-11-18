export const getAutocompleteCities = (query, setFunc) =>
  setTimeout(async () => {
    if (!query || query?.trim() === "") {
      return;
    }

    try {
      const response = await fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${query}&apiKey=${process.env.REACT_APP_GEO_API}`
      );
      const res = await response.json();

      const cities = res.features
        .map((feature) => {
          return feature?.properties?.city ?? null;
        })
        .filter((city) => city !== null);

      setFunc([...new Set(cities)]);

      return cities;
    } catch (err) {
      console.error(err);
      return [];
    }
  }, 200);
