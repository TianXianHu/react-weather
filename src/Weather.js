import React from "react";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  var [cityName, setCityName] = useState("");
  var [forecasts, setForecasts] = useState(null);

  function getForecast(response) {
    setForecasts(response.data);
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "2b6fdad0cbd018949c50c70f72250726";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(getForecast);
    if (forecasts) {
      console.log(forecasts);
    } else {
      console.log("stupid glitch");
    }
  }

  function updateCityName(event) {
    event.preventDefault();
    setCityName(event.target.value);
  }

  if (forecasts) {
    return (
      <Container>
        <Form onSubmit={handleSearch}>
          <Row>
            <Col md={2}></Col>
            <Col md={6}>
              <Form.Control
                type="search"
                placeholder="Please specify the city name here "
                onChange={updateCityName}
              />
            </Col>
            <Col md={4}>
              <Button variant="primary" type="submit">
                Get the weather forecast
              </Button>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="todaypic">
              <img
                src={
                  "http://openweathermap.org/img/wn/" +
                  forecasts.weather[0].icon +
                  ".png"
                }
                alt="not of your business"
                className="kartinka"
              />
            </Col>
            <Col md={8} className="weatherspecs">
              <ul>
                <li>Temperature: {forecasts.main.temp}°C</li>
                <li>Description: {forecasts.weather[0].description}</li>
                <li>Humidity: {forecasts.main.humidity}%</li>
                <li>Wind: {forecasts.wind.speed}m/s</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>ПН</Col>
            <Col>ВТ</Col>
            <Col>СР</Col>
            <Col>ЧТ</Col>
            <Col>ПТ</Col>
            <Col>СБ</Col>
            <Col>ВС</Col>
          </Row>
        </Form>
      </Container>
    );
  } else {
    return (
      <Container>
        <Form onSubmit={handleSearch}>
          <Row>
            <Col md={2}></Col>
            <Col md={6}>
              <Form.Control
                type="search"
                placeholder="Please specify the city name here "
                onChange={updateCityName}
              />
            </Col>
            <Col md={4}>
              <Button variant="primary" type="submit">
                Get the weather forecast
              </Button>
            </Col>
          </Row>
          <Row>
            <Col md={4}>how to change this thing? </Col>
            <Col md={8} className="weatherspecs">
              <ul>
                <li>Temperature: °C</li>
                <li>Description: </li>
                <li>Humidity: %</li>
                <li>Wind: m/s</li>
              </ul>
            </Col>
          </Row>
          <Row>
            <Col>ПН</Col>
            <Col>ВТ</Col>
            <Col>СР</Col>
            <Col>ЧТ</Col>
            <Col>ПТ</Col>
            <Col>СБ</Col>
            <Col>ВС</Col>
          </Row>
        </Form>
      </Container>
    );
  }
}
