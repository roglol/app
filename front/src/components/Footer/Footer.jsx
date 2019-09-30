import React from 'react';
import './footer.scss';

class Clients extends React.Component {
    render() {
        return (
            <div className='footer'>
                <div className="footer-container">
                    <div className='contact-us'>Contact us!</div>

                    <div className="adress">
                        <img src="https://a.icons8.com/cWkSWaYZ/GZhGc1/place-copy-copy.png" alt="" />
                        41 Pekini Av. Tbilisi Georgia
                        </div>
                    <div className="email">
                        <img src="https://a.icons8.com/cWkSWaYZ/q0Oxm9/round--content--markunrea.png" alt="" />
                        Info@TechubDC.GE
                        </div>

                    <div className="phone">
                        <img src="https://a.icons8.com/cWkSWaYZ/wmrhxD/phone_in_talk.png" alt="" />
                        + 972 54 616 3031
                        </div>
                    <div className="social">
                      <div></div>
                      <div></div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Clients;