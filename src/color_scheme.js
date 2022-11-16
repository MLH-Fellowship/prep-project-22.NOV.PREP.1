export function change_bg(climate) {
    switch(climate) {
        case 'Snow':
          document.body.style.backgroundImage = "url(https://i.gifer.com/IqB.gif)";
          break;
        case 'Clouds':
          document.body.style.backgroundImage = "url(https://data.whicdn.com/images/271917689/original.gif)";
          break;
        case 'Rain':
          document.body.style.backgroundImage = "url(https://acegif.com/wp-content/uploads/rainy-10.gif)";
          break;
        case 'Thunderstorm':
          document.body.style.backgroundImage = "url(http://24.media.tumblr.com/d0e9137219b78062b0441ee74ca47a8f/tumblr_mjv8falGbU1s8o1r4o1_1280.gif)";
          break;
        case 'Drizzle':
          document.body.style.backgroundImage = "url(https://giffiles.alphacoders.com/105/105463.gif)";
          break;
        case 'Atmosphere':
          document.body.style.backgroundImage = "url(https://media2.giphy.com/media/5PGOG2uWtJikU/giphy.gif)";
          break;   
        default:
            document.body.style.backgroundImage = "url(https://media2.giphy.com/media/5PGOG2uWtJikU/giphy.gif)";
            break;
      }
    return `Change theme to, ${climate}`;
  }
  
export const message = "Clear";
  