

const Search = (props) => {
    return (
        <form onSubmit={props.getWeather}>
            <input type="text" name="city" placeholder="сity name"/>
            <button>Get weather</button>
        </form>
    );
}

export default Search