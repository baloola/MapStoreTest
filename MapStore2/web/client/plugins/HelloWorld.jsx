const React = require('react');

const {connect} = require('react-redux');
const assign = require('object-assign');


const HelloWorld = connect((state) => ({
    zoom: state.map && state.map.present.zoom
}))(require('../components/HelloWorld/HelloWorld'));



class HelloWorldPlugin extends React.Component{
   
    render() {
        return (
            <HelloWorld 
            />);
    }


}

module.exports = {
    HelloWorldPlugin:assign(HelloWorldPlugin, {}
    ),
   reducers: {}
};






