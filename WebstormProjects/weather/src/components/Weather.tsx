

const Weather = (props) => {
    return (
        <div>
            {props.city && <h2>City: {props.city}</h2>}
            {props.temperature && <h2>Temperature: {props.temperature}</h2>}
            {props.feels_like && <h2>Feels like: {props.feels_like}</h2>}
            {props.wind_speed && <h2>Wind speed: {props.wind_speed}</h2>}
            {props.humidity && <h2>Humidity: {props.humidity}</h2>}
            {props.description && <h2> Conditions: {props.description}</h2>}
            {props.error && <h2> {props.error}</h2>}
        </div>
    );
}

export default Weather;