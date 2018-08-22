import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faCompass from '@fortawesome/fontawesome-free-solid/faCompass';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faClock from '@fortawesome/fontawesome-free-solid/faClock';
import faEnvelope from '@fortawesome/fontawesome-free-solid/faEnvelope';

const Footer = () => {
    return (
        <footer className="bck_b_dark">
            <div className="container">
                <div className="logo">
                    WAVES
                </div>
                <div className="wrapper">
                    <div className="left">
                        <h2>Contact Information</h2>
                        <div className="business_nfo">
                            <div className="tag">
                                <FontAwesomeIcon icon={faCompass} className="icon" />
                                <div className="nfo">
                                    <div>Address</div>
                                    <div>3000 Main St.</div>
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon icon={faPhone} className="icon" />
                                <div className="nfo">
                                    <div>Phone</div>
                                    <div>1 800 555 5555</div>
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon icon={faClock} className="icon" />
                                <div className="nfo">
                                    <div>Hours</div>
                                    <div>9:00 AM - 5:00PM Mon - Fri</div>
                                </div>
                            </div>
                            <div className="tag">
                                <FontAwesomeIcon icon={faEnvelope} className="icon" />
                                <div className="nfo">
                                    <div>Email</div>
                                    <div>anthony@ledesma.tech</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="left">
                        <h2>Be The First To Know</h2>
                        <div>Get all the information on events, sales, and offers. You can't afford to miss out!</div>
                    </div>
                </div>

            </div>

        </footer>
    );
};

export default Footer;