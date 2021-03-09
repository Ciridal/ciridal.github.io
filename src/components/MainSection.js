import React from 'react'
import '../App.css'
import { Button } from '../Button';
import './MainSection.css'

function MainSection() {
    return (
        <div className='mainContainer'>
            <h1> This is me </h1>
            <p> I am a programming student </p>
            <div className='main-btns'>
                <Button
                    className='btns'
                    buttonStyle='btn--outline'
                    buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button
                    className='btns'
                    buttonStyle='btn--primary'
                    buttonSize='btn--large'
                >
                    CLICK ME
                </Button>
            </div>
        </div>
    );

}

export default MainSection;