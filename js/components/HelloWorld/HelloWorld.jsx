var React = require('react');

var PropTypes = require('prop-types');
require("../../../assets/css/HelloWorld.css");


class HelloWorld extends React.Component {
    static propTypes = {
        zoom: PropTypes.number,
    };

    render() {
        return (
            <div id= 'myfirst'>
                <h1>Hello World: {this.props.zoom}</h1>
            </div>);
    }
}

module.exports = HelloWorld;
