import React from 'react';
import './technologies.scss';

class Technologies extends React.Component {

  state = {
    intervalIsSet: false,
    data: [
     {name: 'angular'}
    ],
  }


  async componentDidMount() {
    // try {
    //   const res = await fetch('http://localhost:3001/api/courses-names')
    //   if (!res.ok) {
    //     throw Error(res.statusText);
    //   }
    //   // const json = await res.json();
      // this.setState({ data: json.data })
    // } catch (error) {
    //   console.log(error);
    // }
  }

  render() {
    return (
      <div>
        <div className="technologies-content" id="tech">
          <h1 className='technologies-header'>Our Technologies</h1>
          <p className='technologies-description'>Integer non felis eget diam tempor luctus quis luctus felis. Mauris a purus id enim vehicula faucibus a sed nisl. Duis feugiat molestie nisl
          eget consequat. Pellentesque ipsum erat, sagittis ut fringilla sed, tincidunt eget mauris.
         </p>

          <div className="technologies-list">
            {/* {this.state.data.map((item, i) => ( */}
              <div className="rectangle">
                  <div className="technologies-image-container">
                    <img src={require('./angular.png')}  alt="" />
                 
                  </div>
              </div>
              <div className="rectangle">
                  <div className="technologies-image-container">
                    <img src={require('./react.png')}  alt="" />
                 
                  </div>
              </div>
              <div className="rectangle">
                  <div className="technologies-image-container">
                    <img src={require('./reactnative.png')}  alt="" />
                 
                  </div>
              </div>
              <div className="rectangle">
                  <div className="technologies-image-container">
                    <img src={require('./php.png')}  alt="" />
                 
                  </div>
              </div>
              <div className="rectangle">
                  <div className="technologies-image-container">
                    <img src={require('./mysql.png')}  alt="" />
                 
                  </div>
              </div>
              <div className="rectangle">
                  <div className="technologies-image-container">
                    <img src={require('./python.png')}  alt="" />
                 
                  </div>
              </div>
              <div className="rectangle">
                  <div className="technologies-image-container">
                    <img src={require('./net.png')}  alt="" />
                 
                  </div>
              </div>
              <div className="rectangle">
                  <div className="technologies-image-container">
                    <img src={require('./sharp.png')}  alt="" />
                 
                  </div>
              </div>
              <div className="rectangle">
                  <div className="technologies-image-container">
                    <img src={require('./postgre.png')}  alt="" />
                 
                  </div>
              </div>
              <div className="rectangle">
                  <div className="technologies-image-container">
                    <img src={require('./angular.png')}  alt="" />
                 
                  </div>
              </div>
            {/* ))} */}
            {/* <div className="rectangle">
            <div className="technologies-image-container">
                    <img src='https://a.icons8.com/gTpfdSef/D92D6G/javascript.png'  alt="" />
                  </div>
            </div>
            <div className="rectangle">
            <div className="technologies-image-container">
                    <img src="https://a.icons8.com/gTpfdSef/mJMuCa/bitmap.png"  alt="" />
                  </div>
                  </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Technologies;