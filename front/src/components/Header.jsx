import React from 'react';
// import Nav from './Nav';


const ComponentA = ({ children, onClick }) => (
    <button type="button" onClick={onClick}>
      {children}
    </button>
  );

class Header extends React.Component{
    // constructor(props){
    //     super(props);

    // }
    componentDidMount(){
        console.log(this.prop);
    }
    hello(id){
        this.props.info(id) ;
    }

    render() {

     return(
    <div className='header'>
    <div className="image-holder">
        <img alt='sad' src="https://firebasestorage.googleapis.com/v0/b/upload-pictures-4e4f6.appspot.com/o/images%2Ftechub-logo-3.png?alt=media&token=dd7842c2-0ec6-4e9f-aa7f-8db55449872c"/>
    </div>
    <div className="navigation">
    <nav>
        <ul className='navigation-list'>
        <ComponentA onClick={() => this.hello(1)}>
        ჩვენი გუნდი
        </ComponentA>
        <ComponentA onClick={() => this.hello(2)}>
        ჩვენს შესახებ
        </ComponentA>    <ComponentA onClick={() => this.hello(3)}>
        კურსები
        </ComponentA>
        </ul>
    </nav>
    </div>
    </div>
)
     }
    }

export default Header;