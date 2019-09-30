import React,{Component} from 'react';
export const MContext = React.createContext();


class Myprovider extends Component {
    state =  {references:  null}

    render() {
        return( 
                <MContext.Provider value={
                {   state: this.state,
                    setMessage: (value) => this.setState({
                                references: value })}}>
                {this.props.children}  
                </MContext.Provider>)
    }

}

export default Myprovider;