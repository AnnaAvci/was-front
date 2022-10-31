import React from 'react';
import './Loader.css';

const Loader = () => {
    return (
        <div className="main">
            <lottie-player
                src="https://assets4.lottiefiles.com/packages/lf20_0zv8teye.json"
                background="transparent"
                speed="1"
                style="width: 300px; height: 300px;"
                loop
                autoplay>
            </lottie-player>
        </div>
    );
};

export default Loader;