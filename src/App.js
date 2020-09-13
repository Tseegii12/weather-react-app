import React, { useEffect, useState } from "react";
import { Row, Col, Spin } from "antd";
import XMLParser from "react-xml-parser";

import API from "./service/API";

import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

function App() {
  const [weatherDatas, setWeatherDatas] = useState([]);
  const [currentCity, setCurrentCity] = useState([]);
  const [cityName, setCityName] = useState("Улаанбаатар");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    API.get("/forecast_xml")
      .then((res) => res.data)
      .then((xmlData) => {
        let weather = [];
        var xml = new XMLParser().parseFromString(xmlData);
        let weathers = xml.children;

        for (let i in weathers) {
          if (
            weathers[i].children !== null &&
            weathers[i].children !== [] &&
            weathers[i].children.length > 0
          ) {
            weather.push(weathers[i].children);
          }

          if (weathers[i].children[0].value === cityName) {
            setCurrentCity(weathers[i].children[1].children);
          }
        }
        setWeatherDatas(weather);
        setIsLoading(false);
      })
      .catch((error) => {
        //
      });
  }, []);

  const handleSearch = (val) => {
    const selectedCity = weatherDatas
      .filter((weatherData) => weatherData[0].value === val)
      .map((fData) => fData[1]);

    setCityName(val);
    setCurrentCity(selectedCity[0].children);
  };

  if (isLoading) {
    return (
      <Row>
        <Col span={24} style={{ textAlign: "center" }}>
          <Spin
            tip="Цаг агаарын мэдээллийг уншиж байна..."
            spinning={isLoading}
            style={{ padding: "250px 0", color: '#fff' }}
          ></Spin>
        </Col>
      </Row>
    );
  } else {
    return (
      <div className="App">
        <Row justify="center">
          <Col span={24} style={{ textAlign: 'center' }}>
            <SearchBar handleSearch={handleSearch} />
          </Col>
        </Row>
        <Row justify="center">
          {currentCity.map((current, index) => (
            <WeatherCard
              key={index}
              weatherTime={currentCity[index]?.children[0].value}
              nightTemp={currentCity[index]?.children[1].value}
              dayTemp={currentCity[index]?.children[2].value}
              phenoNightId={currentCity[index]?.children[3].value}
              phenoNight={currentCity[index]?.children[4].value}
              phenoDayId={currentCity[index]?.children[5].value}
              phenoDay={currentCity[index]?.children[6].value}
            />
          ))}
        </Row>
      </div>
    );
  }
}

export default App;
