import React from 'react';
import Header from './Header';
import Info from './Info';
import Myprovider from './Myprovider';

class Homepage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            reference : 2,
        }
    }

    setFunction = (refu) => {
        this.info = refu;
        console.log(this.info);
    }

    getInfo(e){
       console.log(this.state);
    }

    sendData(e){

    }

    componentDidMount(){
    }
   

    render(){
        return(
            <div className='again'>
                <Myprovider>
                <div className="again2">

                <Header info={this.getInfo} />
                <Info   />

                </div>
                </Myprovider>

            </div>
        )
    }
}

export default Homepage;