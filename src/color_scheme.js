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
        <div className="icon flurries">
          <div className="cloud"></div>
          <div className="snow">
            <div className="flake"></div>
            <div className="flake"></div>
          </div>
        </div>
      )
    case 'Clouds':
      return (
        <div className="icon cloudy">
          <div className="cloud"></div>
          <div className="cloud"></div>
        </div>
      )
    case 'Rain':
      return (
        <div className="icon rainy">
          <div className="cloud"></div>
          <div className="rain"></div>
        </div>
      )
    case 'Drizzle':
      return (
        <div className="icon sun-shower">
          <div className="cloud"></div>
          <div className="sun">
            <div className="rays"></div>
          </div>
          <div className="rain"></div>
        </div>
      )
    case 'Thunderstorm':
      return (
        <div classNameName="icon thunder-storm">
          <div classNameName="cloud"></div>
          <div classNameName="lightning">
            <div classNameName="bolt"></div>
            <div classNameName="bolt"></div>
          </div>
        </div>
      )
    case 'Clear':
      return (
        <div className="icon sunny">
          <div className="sun">
            <div className="rays"></div>
          </div>
        </div>
      )
    case 'Atmosphere':
      return (
        <div className="icon rainy">
          <div className="cloud"></div>
        </div>
      )
    default:
      return (
        <div className="icon rainy">
          <div className="cloud"></div>
        </div>
      )
  }
}