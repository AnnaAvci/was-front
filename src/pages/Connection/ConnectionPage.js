import React, {useState} from 'react';
import cnxImg from '../../assets/img/connectImg.webp';
import classes from './ConnectionPage.module.css';
import axios from "axios";
import {Link, useHistory} from "react-router-dom";

const ConnectionPage = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios(
            {
                url: 'http://127.0.0.1:8000/api/login_check',
                method: 'post',
                data: {
                    username: email,
                    password: password
                },
                withCredentials: false
            }
        );

        localStorage.setItem('wastoken', response.data.token);
        history.push('/my-profile');
    };

    return (
        <section className={classes.signIn}>
            <div className={classes.mainContent}>
                <div className={classes.user}>
                    <div className={classes.imgBx}>
                        <img src={cnxImg} alt="mountains"/>
                    </div>
                    <div className={classes.formBx}>
                        <form onSubmit={handleSubmit}>
                            <h2>Sign In</h2>
                            <div className={classes.inputBox}>
                                <input
                                    type="email"
                                    name="email"
                                    value={email}
                                    onChange={handleEmail}
                                    required="required"
                                />
                                <span>Email</span>
                            </div>
                            <div className={classes.inputBox}>
                                <input
                                    type="password"
                                    name="email"
                                    value={password}
                                    onChange={handlePassword}
                                    required="required"
                                />
                                <span>Password</span>
                            </div>
                            <input type="submit" name="" value="Sign In"/>
                            <p className="signUp">
                                Don't have an account ?
                                <Link to={'/registration'}>Sign Up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConnectionPage;