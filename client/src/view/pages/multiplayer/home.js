import React from 'react';
import {useHistory} from 'react-router-dom';
import { Button } from 'react-bootstrap';


const Home = props => {
    let history = useHistory();
    return (
        <div className="container">
            <div className="card-container">
                <h3 className='welcome'>Welcome to Typemania</h3>
                <div className="game-info">
                    <Button className="home" variant="primary"
                            onClick={() => history.push('game/create')}><b>Create Game </b></Button>
                    <Button className="home" variant="secondary" 
                            onClick={() => history.push('game/join')}><b>Join Game</b></Button>
                </div>
            </div>
            <div className='containerl'>
                <img className='imgbanner' src="background.svg.png"/>
            </div>
        </div>
    )
}


export default Home;