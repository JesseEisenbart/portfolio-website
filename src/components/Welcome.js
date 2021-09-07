import React from 'react';
import test from "../images/test.png";
import Typical from 'react-typical';

const Welcome = () => {
    const textDelay = 2500;
    return (
        <div className="welcome">
            <div className="welcome-img" style={{ backgroundImage: `url(${test})` }}>
                <h1>HELLO, I'M JESSE</h1>
                <h2>a self-taught{' '}
                    <Typical 
                        loop={Infinity}
                        wrapper="b"
                        steps={['game developer', textDelay, 'web developer', textDelay, 'artist', textDelay, 'photographer', textDelay]}
                    />
                </h2>
            </div>
        </div>
    )
}

export default Welcome
