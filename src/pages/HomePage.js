import React, {useEffect, useState} from 'react';
import Banner from "../components/Banner/Banner";

const HomePage = () => {

    const [title, setTitle] = useState('Worth a Shot');

    return (
        <>
            <Banner mainTitle={title}/>
        </>
    );
};

export default HomePage;