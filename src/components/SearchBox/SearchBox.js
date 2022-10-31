import React from 'react';
import './SearchBox.css';

const SearchBox = () => {
    return (
        <div className="searchBox">
            <div className="inputBx">
                <p>Enter Location</p>
                <input type="text" placeholder="Ex:Saint Petersbourg"/>
            </div>
            <div className="inputBx">
                <p>Check In</p>
                <input type="date"/>
            </div>
            <div className="inputBx">
                <p>Check Out</p>
                <input type="date"/>
            </div>
            <div className="inputBx">
                <p>Max Price (€)</p>
                <input type="number"/>
            </div>
            <div className="inputBx">
                <p className="white"></p>
                <input type="Submit" value="Find"/>
            </div>
        </div>
    );
};

export default SearchBox;