export function change_bg(climate) {
  switch(climate) {
    case 'Snow':
      document.body.style.backgroundImage = "url('assets/snow.gif')";
      break;
    case 'Clouds':
      document.body.style.backgroundImage = "url('assets/clouds.gif')";
      break;
    case 'Rain':
      document.body.style.backgroundImage = "url('assets/rain.gif')";
      break;
    case 'Thunderstorm':
      document.body.style.backgroundImage = "url('assets/thunderstorm.gif')";
      break;
    case 'Drizzle':
      document.body.style.backgroundImage = "url('assets/drizzle.gif')";
      break;
    case 'Atmosphere':
      document.body.style.backgroundImage = "url('assets/atmosphere.gif')";
      break;   
    default:
        document.body.style.backgroundImage = "url('assets/atmosphere.gif')";
        break;
  }
  return `Change theme to, ${climate}`;
}