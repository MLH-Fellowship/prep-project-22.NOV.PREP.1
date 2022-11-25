import React from "react";
import { change_icon, change_bg } from "../color_scheme.js";


export default function Result(props){

    return (
        <div className="Results" style={{backgroundImage:change_bg(props.gifurl)}}>
            <div className="Results-overlay">
                {!props.isLoaded && <h2>Loading...</h2>}
                {props.isLoaded && props.results && (
            
                    <div className="weather-container">
                        <div className="weather-cotainer-left">
                            <p id="temp">{Math.round(props.results?.main.feels_like)} &#8451;</p>
                            <div className="weather-status">
                                <p>{props.results?.weather[0].main}</p>
                                {change_icon(props.results?.weather[0].main)}
                                
                            </div>
                        </div>
                        <div className="weather-cotainer-right">
                            <div className="weather-infos">
                                <p className="weather-info-heading">VISIBILITY</p>
                                <p className="weather-info-values">{props.results?.visibility}</p>
                            </div>
                            <div className="weather-infos">
                                <p className="weather-info-heading">PRESSURE</p>
                                <p className="weather-info-values">{props.results?.main.pressure}</p>
                            </div>
                            <div className="weather-infos">
                                <p className="weather-info-heading">WIND SPEED</p>
                                <p className="weather-info-values">{props.results?.wind.speed}</p>
                            </div>
                            <div className="weather-infos">
                                <p className="weather-info-heading">HUMIDITY</p>
                                <p className="weather-info-values">{props.results?.main.humidity}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )

}