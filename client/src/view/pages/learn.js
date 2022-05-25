import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class Profile extends Component {
    render() {
        return (
            <div className="container">
                <div className="card-container">
                    <h3>Learn how to touch type</h3>
                    <p>Touch typing is all about the idea that each finger has its own area on the keyboard. Thanks to that fact you can type without looking at the keys. Practice regularly and your fingers will learn their location on the keyboard through muscle memory.</p>
                    <br></br>
                    <h4>Sitting posture for typing</h4>
                    <img className='postureimg' src="posture.png" />
                    <ul>
                        <li>Sit straight and remember to keep your back straight.</li>
                        <li>Keep your elbows bent at the right angle.</li>
                        <li>Face the screen with your head slightly tilted forward.</li>
                        <li>Keep at least 45 - 70 cm of distance between your eyes and the screen.</li>
                        <li>Еxpose the shoulder, arm, and wrist muscles to the least possible strain. The wrists can touch the tabletop in front of the keyboard. Never shift your body weight to the wrists by resting on them.</li>
                    </ul>
                    <br></br>
                    <h4>Homerow position</h4>
                    <img className='homerowimg' src="b.png" />
                    <p>Curve your fingers a little and put them on the ASDF and JKL; keys which are located in the middle row of the letter keys. This row is called HOME ROW because you always start from these keys and always return to them.F and J keys under your index fingers should have a raised line on them to aide in finding these keys without looking.</p>
                    <h3>Keyboard scheme</h3>
                    <p>The color-coded keyboard under lesson input field will help you to understand which finger should press each key.</p>
                    <img src="a.png" className='kbrimg'></img>
                    <ul>
                        <li>Hit keys only with the fingers for which they have been reserved.</li>
                        <li>Always return to the starting position of the fingers "ASDF – JKL;".</li>
                        <li>When typing, imagine the location of the symbol on the keyboard.</li>
                        <li>Establish and maintain a rhythm while typing. Your keystrokes should come at equal intervals.</li>
                        <li>The SHIFT key is always pressed by the pinky finger opposite to the one hitting the other key.</li>
                        <li>Use the thumb of whichever hand is more convenient for you to press the Space bar.</li>
                    </ul>
                    <p>This method may seem inconvenient at first, but do not stop, eventually, you'll find out that you are typing quickly, easily, and conveniently.</p>

                    <br></br>
                    <h3>Fingers motion</h3>
                    <p>Don't look at the keys when you type. Just slide your fingers around until they find the home row marking.</p>
                    <p>Limit your hand and finger movement only to what is necessary to press a specific key. Keep your hands and fingers close to the base position. This improves typing speed and reduces stress on the hands.</p>
                    <p>Pay attention to ring fingers and little fingers, since they are considerably underdeveloped.</p>
                    <br></br>

                    <h3>Typing speed</h3>
                    <ul>
                        <li>Do not rush when you just started learning. Speed up only when your fingers hit the right keys out of habit.</li>
                        <li>Take your time when typing to avoid mistakes. The speed will pick up as you progress.</li>
                        <li>Always scan the text a word or two in advance.</li>
                        <li>Pass all typing lessons at Ratatype. It will help you to get above the average typing speed.</li>
                    </ul>

                </div>
            </div>
        )
    }
}

export default Profile;