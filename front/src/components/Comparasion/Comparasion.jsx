import React from 'react';
import './comparasion.scss'

class Comparasion extends React.Component {
    render() {
        return (
            <div className='comparasion-container' id="georgia">
                <div className='comparasion-header'>
                    <h3>Georgia services</h3>
                    <h2>Costs vs East Europe</h2>
                </div>
                <div className="comparasion-description">
                    Integer non felis eget diam tempor luctus quis luctus felis. Mauris a purus id enim vehicula faucibus a sed nisl. Duis feugiat molestie nisl eget consequat. Pellentesque ipsum erat, sagittis ut fringilla sed, tincidunt eget mauris.
                </div>
                <div className="statistics-container">
                    <div className="statistic-container">

                        <img className="gray-oval" src={require('./45-saving.png')} alt="" />


                        <div className="statistics-description">
                            <div className="statistic-header">
                                <h3>Junior front end developer</h3>
                                <p>Integer tempus enim sit amet eleifend interdum. Praesent faucibus augue dictum semper </p>

                            </div>
                        </div>

                    </div>
                    <div className="statistic-container">
                        <img className='gray-oval' src={require('./30-saving.png')} alt="" />
                        <div className="statistics-description">
                            <div className="statistic-header">
                                <h3>Full Stack & Senior</h3>
                                <p>Integer tempus enim sit amet eleifend interdum. Praesent faucibus augue dictum semper </p>

                            </div>
                        </div>
                    </div>
                    <div className="statistic-container">
                        <img className='gray-oval' src={require('./20-saving.png')} alt="" />
                        <div className="statistics-description">
                            <div className="statistic-header">
                                <h3>UX Expert</h3>
                                <p>Integer tempus enim sit amet eleifend interdum. Praesent faucibus augue dictum semper </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )

    }
}

export default Comparasion;
