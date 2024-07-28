'use client'
import { useEffect, useState } from "react";
import TopStation from "./components/TopStation";
import StationData from "./components/StationData";

let correctStation
let searchStation = StationData.DATA.filter((item) => {
  return item.station_name
});

export default function Home() {
  let [display, setDisplay] = useState("search-line-display0")
  let [inputValue, setInputValue] = useState('')
  let [stationNum, setStationNum] = useState([0])
  let [origin, setOrigin] = useState('역 이름의 유래가 표시됩니다.')
  let [searchTitle, setSearchTitle] = useState('역 이름을 입력해 보세요')
  let [stationColor, setStationColor] = useState('color-gray')
  let [on, setOn] = useState('off')

  function reset(){
    window.location.replace("/")
  }

  function search() {
    correctStation = searchStation.filter(
      (item) => item.station_name === inputValue
    );
    setStationNum(correctStation.map((item) => item.line[1] + "호선"));

    if (correctStation.length == 0) {
      setSearchTitle("일치하는 정보가 없습니다. 다시 입력해 보세요!");
      setOrigin("역 이름의 유래가 표시됩니다.");
      setDisplay("search-line-display0");
      setStationNum("0");
      setStationColor("color-gray");
    } else {
      setOrigin(correctStation[0].origin);
      setSearchTitle(correctStation[0].station_name+"역 명의 유래");
      setOn("on");
    }
    if (correctStation.length == 1) {
      setDisplay("search-line-display1");
    } else if (correctStation.length == 2) {
      setDisplay("search-line-display2");
    } else if (correctStation.length == 3) {
      setDisplay("search-line-display3");
    }
    
  }
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
    <main>

      <section className="search-section">
        <div className="search-containers">
          <div className="search-container">
            <div className="search-station">
              <svg className="search-design" width="300" height="300" viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M254 149.5C254 206.661 207.661 253 150.5 253C93.3385 253 47 206.661 47 149.5C47 92.3385 93.3385 46 150.5 46C207.661 46 254 92.3385 254 149.5Z" fill="white"/>
              <path className={stationColor} fillRule="evenodd" clipRule="evenodd" d="M150.5 253C207.661 253 254 206.661 254 149.5C254 92.3385 207.661 46 150.5 46C93.3385 46 47 92.3385 47 149.5C47 206.661 93.3385 253 150.5 253ZM273.037 165C265.412 225.891 213.458 273 150.5 273C87.5424 273 35.5878 225.891 27.9633 165H0V135H27.8422C35.02 73.6256 87.1982 26 150.5 26C213.802 26 265.98 73.6256 273.158 135H300V165H273.037Z" fill="#D9D9D9"/>
              </svg>
              <div className="search-station-center">
                  <div className={display}>
                    <div>{stationNum[0]}</div>
                    <div>{stationNum[1]}</div>
                    <div>{stationNum[2]}</div>
                  </div>
                  <input className="search-input" value={inputValue} type="text" placeholder="예시) 종로3가" onChange={
                    (event)=>{
                      setInputValue(event.target.value)
                    }}></input>
                  <div className="btn-group">
                    <button className="search-station-button" onClick={search}>검색</button>
                    <button className={`search-station-button ${on}`} onClick={reset}>다시하기</button>
                  </div>
              </div>
            </div>
            <div className="info">
              <div className="notification">*지하철역 중 등록된 정보가 없는 경우도 있습니다.</div>
              <div className="reference">(출처: 서울 열린데이터광장 - 서울교통공사 역명의 유래)</div>
            </div>
          </div>
          <div className="search-mean-area">
            <div className="search-mean-container">
              <div className="search-mean-title">{searchTitle}</div>
              <div className="search-mean-content">{origin}</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider"></div>
      <ins class="kakao_ad_area"
      data-ad-unit = "DAN-yhIQZ5JxCeh8ffyS"
      data-ad-width = "320"
      data-ad-height = "50"></ins>
<script type="text/javascript" src="//t1.daumcdn.net/kas/static/ba.min.js" async></script>

      <section className="list-section">
        <div className="list-containers"> 
          <div className="list-title">재미있는 역명 유래 Top10</div>
          <div className="list-container">
          <TopStation name="여의도"/>
            <TopStation name="새절"/>
            <TopStation name="온수"/>
            <TopStation name="성수"/>
            <TopStation name="고덕"/>
            <TopStation name="연신내"/>
            <TopStation name="약수"/>
            <TopStation name="오금"/>
            <TopStation name="왕십리"/>
            <TopStation name="모란"/>
          </div>
        </div>
      </section>
    </main>
  );
}
