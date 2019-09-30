import React from 'react';
import './ourteam.scss';


class OurTeam extends React.Component {

    render() {
        return (

            <div className='ourteam-container' id="team" ref='team'>
                <div>
                    <h1 className="ourteam-header">Our Team</h1>
                    <p className="ourteam-description">
                    Integer non felis eget diam tempor luctus quis luctus felis. Mauris a purus id enim vehicula faucibus a sed nisl. Duis feugiat molestie nisl eget consequat
                    </p>
                </div>
                <div className="ourteam-list">
                    <div className="member">
                        <div className="ourteam-image"></div>
                        {/* <img src={require('./meni.png')} alt="" /> */}
                        <p className='member-name'>Meni Benish</p>
                        <p className='member-description'>
                        Business man and Honorary consul of Georgia in Israel. 
                        He has 25 years of experience in business management of 
                        all levels: Sales and Marketing, Online Marketing and advertising,
                         Strategy planning.
                          {/* and Branding.Serial entrepreneur, 
                         one of the Co-founders of “Archi” Group and founder of Benish Group. */}

                  </p>

                    </div>
                    <div className="member">
                        {/* <img src={require('./eyal.png')} alt="" /> */}
                        <div className="ourteam-image"></div>
                        <p className='member-name'>Levan Lobhzanidze</p>
                        <p className='member-description'>
                        Entrepreneur with around 15 years of experience In business management, in Governmental and private Sector.
Has worked in Georgia as well as In several countries of Africa, Asia and Europe.
{/* on different positions of Business development, Management, Sales and Marketing; */}
                         </p>
                    </div>
                    <div className="member">
                        {/* <img src={require('./eran.png')} alt="" /> */}
                        <div className="ourteam-image"></div>
                        <p className='member-name'>Eran Lasser</p>
                        <p className='member-description'>
                        Israeli entrepreneur with over 20 years in IT-business and IT-education.
                        Founder of educational center John Bryce Training,
                        that today occupies 70% of IT-education market in Israel.
                            
                            </p>
                    </div>
                    <div className="member">
                        {/* <img src={require('./mickey.png')} alt="" /> */}
                        <div className="ourteam-image"></div>
                        <p className='member-name'>Mickey Boguslavsky</p>
                        <p className='member-description'>
                        CPA, EMBA. Serves as the CFO of Benish Group Ltd. Mickey served as the 
                        Commercial Finance Business Partner in Amdocs. Previously was the managing 
                        director in AFI development subsidiary.
                          
                          </p>
                    </div>

                   
                </div>

            </div>
        )
    }
}
export default OurTeam;