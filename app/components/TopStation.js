'use client'
import React from "react"
import { useEffect, useState } from "react";
import StationData from "./StationData";


function TopStation(props){
  let topStationName
  let searchStation = StationData.DATA.filter((item) => {
    return item.station_name
  });
  topStationName = searchStation.filter(
    (item) => item.station_name === props.name
  );
  let stationNum = topStationName.map((item) => item.line[1] + "호선");

  let [stationColor, setStationColor] = useState('color-gray')

  useEffect(() => {
    if (stationNum[0] == "1호선") {
      setStationColor("color-navy");
    } else if (stationNum[0] == "2호선"){
      setStationColor("color-green");
    } else if (stationNum[0] == "3호선"){
      setStationColor("color-orange");
    } else if (stationNum[0] == "4호선"){
      setStationColor("color-sky");
    } else if (stationNum[0] == "5호선"){
      setStationColor("color-purple");
    } else if (stationNum[0] == "6호선"){
      setStationColor("color-brown");
    } else if (stationNum[0] == "7호선"){
      setStationColor("color-grass");
    } else if (stationNum[0] == "8호선"){
      setStationColor("color-pink");
    }
  }, [stationNum]);

    return (
      <div className="list-item">
        <div className="station-container">
          <svg className="station-design" width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M254 149.5C254 206.661 207.661 253 150.5 253C93.3385 253 47 206.661 47 149.5C47 92.3385 93.3385 46 150.5 46C207.661 46 254 92.3385 254 149.5Z" fill="white"/>
          <path className={stationColor} fillRule="evenodd" clipRule="evenodd" d="M150.5 253C207.661 253 254 206.661 254 149.5C254 92.3385 207.661 46 150.5 46C93.3385 46 47 92.3385 47 149.5C47 206.661 93.3385 253 150.5 253ZM273.037 165C265.412 225.891 213.458 273 150.5 273C87.5424 273 35.5878 225.891 27.9633 165H0V135H27.8422C35.02 73.6256 87.1982 26 150.5 26C213.802 26 265.98 73.6256 273.158 135H300V165H273.037Z" fill="#D9D9D9"/>
          </svg>
          <div className="station-name">{props.name}</div>
        </div>
        <div className="mean-content">
        {topStationName[0].origin}
        </div>
      </div>
    );
}

export default TopStation