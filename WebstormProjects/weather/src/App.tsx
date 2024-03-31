import React from "react";
import './App.css'
import Title from "./components/Title.tsx";
import Search from "./components/Search.tsx";
import Weather from "./components/Weather.tsx";

class App extends React.Component {
    state = {
        city: undefined,
        temperature: undefined,
        feels_like: undefined,
        wind_speed: undefined,
        humidity: undefined,
        description: undefined,
        error: undefined
    }

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4092a92254e5ff0ef36cff76a0407c01&units=metric`);
        const data = await  api_call.json();
        if (city) {
            this.setState({
                    city: data.name,
                    temperature: data.main.temp,
                    feels_like: data.main.feels_like,
                    wind_speed: data.wind.speed,
                    humidity: data.main.humidity,
                    description: data.weather[0].description,
                    error: ""
            });
        }else {
            this.setState({
                city: undefined,
                temperature: undefined,
                feels_like: undefined,
                wind_speed: undefined,
                humidity: undefined,
                description: undefined,
                error: "Please enter city name"
            })
        }

    }

  render() {
    return (
        <div>
          <Title />
          <Search getWeather={this.getWeather} />
          <Weather
              city={this.state.city}
              temperature={this.state.temperature}
              feels_like={this.state.feels_like}
              wind_speed={this.state.wind_speed}
              humidity={this.state.humidity}
              description={this.state.description}
              error={this.state.error}
          />
        </div>
    );
  }
}



export default App
