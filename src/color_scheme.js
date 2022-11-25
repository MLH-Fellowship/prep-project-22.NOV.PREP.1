export function change_bg(climate) {
  switch(climate) {
    case 'Snow':
      return "url('assets/snow.gif')";
    case 'Clouds':
      return "url('assets/clouds.gif')";
    case 'Rain':
      return "url('assets/rain.gif')";
    case 'Thunderstorm':
       return "url('assets/thunderstorm.gif')";
    case 'Drizzle':
       return "url('assets/drizzle.gif')";
    case 'Atmosphere':
       return "url('assets/atmosphere.gif')";
    case 'Clear':
       return "url('assets/clear.gif')";
    default:
        return "url('assets/atmosphere.gif')";
  }
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