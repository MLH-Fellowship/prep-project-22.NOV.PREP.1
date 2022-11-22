import React, { Component } from "react";
import Carousel from "react-elastic-carousel";

export default class Forecast extends Component {
  state = {
    items: [
      { id: 1, time: "4:30pm", code: "http://openweathermap.org/img/wn/02d@2x.png", temp: "20°C" },
      { id: 2, time: "5:30pm", code: "http://openweathermap.org/img/wn/01d@2x.png", temp: "20°C" },
      { id: 3, time: "6:30pm", code: "http://openweathermap.org/img/wn/03d@2x.png", temp: "20°C" },
      { id: 4, time: "7:30pm", code: "http://openweathermap.org/img/wn/04d@2x.png", temp: "20°C" },
      { id: 5, time: "8:30pm", code: "http://openweathermap.org/img/wn/09d@2x.png", temp: "20°C" },
      { id: 6, time: "9:30pm", code: "http://openweathermap.org/img/wn/10d@2x.png", temp: "20°C" },
      { id: 7, time: "10:30pm", code: "http://openweathermap.org/img/wn/02d@2x.png", temp: "20°C" },
      { id: 8, time: "11:30pm", code: "http://openweathermap.org/img/wn/11d@2x.png", temp: "20°C" },
      { id: 9, time: "12:30pm", code: "http://openweathermap.org/img/wn/02d@2x.png", temp: "20°C" },
      { id: 10, time: "1:30am", code: "http://openweathermap.org/img/wn/13d@2x.png", temp: "20°C" },
      { id: 11, time: "2:30am", code: "http://openweathermap.org/img/wn/02n@2x.png", temp: "20°C" },
      { id: 12, time: "3:30am", code: "http://openweathermap.org/img/wn/01n@2x.png", temp: "20°C" },
      
    ],
  };

  render() {
    const { items } = this.state;
    return (
      <div>
        <h3>Hourly Forecast</h3>
        <hr />
        <Carousel itemsToShow={6}>
          {items.map((item) => (
            <div key={item.id}>
              <div className="flex flex-col items-center justify-center">
                <p className="font-light text-sm">{ item.time}</p>
                <img
                  src={item.code}
                  className="w-12 my-1"
                  alt=""
                />
                <p className="font-medium">{ item.temp}</p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}

