import React from 'react';
import cnxImg from '../assets/img/connectImg.webp';
import './ConnectionPage.css';

const ConnectionPage = () => {
    return (
        <section id="signIn">
            <div className="main-content">
                <div className="user signInBx">
                    <div className="imgBx">
                        <img src={cnxImg} alt="mountains"/>
                    </div>
                    <div className="formBx">
                        <form action="#">
                            <h2>Sign In</h2>
                            <div className="inputBox">
                                <input type="email" name="" required="required"/>
                                <span>Email</span>
                            </div>
                            <div className="inputBox">
                                <input type="password" name="" required="required"/>
                                <span>Password</span>
                            </div>
                            <input type="submit" name="" value="Sign In"/>
                            <p className="signUp">Don't have an account ? <a href="#">Sign Up</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConnectionPage;