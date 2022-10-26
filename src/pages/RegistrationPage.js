import React from 'react';
import registrationImg from '../assets/img/signupPhoto.webp';
import './RegistrationPage.css'

const RegistrationPage = () => {
    return (
        <section id="signUp">
            <div className="main-content">
                <div className="user signUpBx">
                    <div className="imgBx">
                        <img
                            src={registrationImg}
                            alt="secondary"
                        />
                        </div>
                    <div className="formBx">
                        <form action="#">
                            <h2>Create an account</h2>
                            <div className="inputBox">
                                <input type="text" name="" required="required"/>
                                <span>Username</span>
                            </div>
                            <div className="inputBox">
                                <input type="email" name="" required="required"/>
                                <span>Email</span>
                            </div>
                            <div className="inputBox">
                                <input type="password" name="" required="required"/>
                                <span>Password</span>
                            </div>
                            <div className="inputBox">
                                <input type="password" name="" required="required"/>
                                <span>Password</span>
                            </div>
                            <input type="submit" name="" value="Sign Up"/>
                            <p className="signUp">Already have an account ? <a href="#" onClick="toggleForm();">Sign
                                    In</a></p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RegistrationPage;