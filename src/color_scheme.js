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
    case 'Clear':
      document.body.style.backgroundImage = "url('assets/clear.gif')";
      break;   
    default:
        document.body.style.backgroundImage = "url('assets/atmosphere.gif')";
        break;
  }
  return `Change theme to, ${climate}`;
}

export function change_icon(climate) {
  switch (climate) {
    case 'Snow':
      return (
        <div class="icon flurries">
          <div class="cloud"></div>
          <div class="snow">
            <div class="flake"></div>
            <div class="flake"></div>
          </div>
        </div>
      )
    case 'Clouds':
      return (
        <div class="icon cloudy">
          <div class="cloud"></div>
          <div class="cloud"></div>
        </div>
      )
    case 'Rain':
      return (
        <div class="icon rainy">
          <div class="cloud"></div>
          <div class="rain"></div>
        </div>
      )
    case 'Drizzle':
      return (
        <div class="icon sun-shower">
          <div class="cloud"></div>
          <div class="sun">
            <div class="rays"></div>
          </div>
          <div class="rain"></div>
        </div>
      )
    case 'Thunderstorm':
      return (
        <div className="icon thunder-storm">
          <div className="cloud"></div>
          <div className="lightning">
            <div className="bolt"></div>
            <div className="bolt"></div>
          </div>
        </div>
      )
    case 'Clear':
      return (
        <div class="icon sunny">
          <div class="sun">
            <div class="rays"></div>
          </div>
        </div>
      )
    case 'Atmosphere':
      return (
        <div class="icon rainy">
          <div class="cloud"></div>
        </div>
      )
    default:
      return (
        <div class="icon rainy">
          <div class="cloud"></div>
        </div>
      )
  }
}