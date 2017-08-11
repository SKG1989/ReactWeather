var React = require('react');
var {Link, IndexLink} = require('react-router');


var Nav = React.createClass({
    onSearch: function(e){
        e.preventDefault();
        var location = this.refs.location.value;
        console.log(location);
    },
    render: function () {
        return (
            <div className="top-bar">
                <div className="top-bar-left">
                    <ul className="menu">
                        <li className="menu-text"> React Weather App</li>
                        <li>
                            <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink>
                        </li>
                        <li>
                            <Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link>
                        </li>
                        <li>
                            <Link to="/example" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Example</Link>
                        </li>
                    </ul>
                </div>
                <div className="top-bar-right">
                    <form onSubmit={this.onSearch}>
                        <ul className="menu">
                            <li><input type="text" ref="location" placeholder="Search Weather"/></li>
                            <li><button type="submit" className="button">Get Weather</button></li>
                        </ul>
                    </form>
                </div>
            </div>
        );
    }
})

module.exports = Nav;
