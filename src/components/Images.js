import React, { Component } from 'react';
import logo from './Pics/pinkelephant.PNG'

console.log(logo);

//Showcase images in webpage


export default class Header extends Component {
    render() {
        return (
            <div className='row'>
                <div className='logo'>
                    <img src={logo} width='100' height='50' />
                </div>
            </div>

        );
    }
}

//function Images() {

//    <logo = {require ("./Pics/pinkelephant.PNG")}>

//    return <img src={logo} alt="Logo" />;
//}

//export default Images;