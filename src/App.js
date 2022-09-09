import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <Weather className="forecast" />
      <div>
        <a href="https://github.com/TianXianHu/react-weather">
          My GItHUB project is here
        </a>
        <p>
          I can not customize bootstrap css in react. That's quite frustrating.
        </p>
      </div>
    </div>
  );
}

export default App;
