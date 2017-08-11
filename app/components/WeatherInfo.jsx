var React = require('react');


var WeatherInfo = ({location, temp}) => {

    return (
        <div>
            <h1>It is {temp} in {location}</h1>
        </div>
    );
};

module.exports = WeatherInfo;