import React from "react";
import "./Startup.css";
import SimpleReactValidator from 'simple-react-validator';

export default class Startup extends React.Component {
  constructor(props){
    super(props);
    this.myRef = React.createRef();
    this.thankYouRef = React.createRef();
    this.blurRef = React.createRef();
    this.state = {
      data:{
        company:'',
        contact_info:'',
        contact_person:'',
        email:'',
        phone:'',
        desc:'',
        company_type:'',
        money_raise:'',
        cto:''
      }
    }
  }

  setRadio = (event) => {
    const data = {...this.state.data}
    data[event.target.name] = event.target.value
    this.setState({data})
    let checkmarks = Array.from(document.querySelectorAll('.checkmark'))
    checkmarks.forEach((checkmark) =>{
      console.log(checkmark.previousSibling.checked)
      if(!checkmark.previousSibling.checked){
        checkmark.classList.remove('hide_checkmark')
      }
          
    })
    event.target.nextSibling.classList.add('hide_checkmark')
    console.log(this.state.data)
  }
  onChange = (event) =>{
    const data = {...this.state.data}
    data[event.target.name] = event.target.value
    this.setState({data})
    console.log(this.state.data)
  }

  validator = new SimpleReactValidator({
    validators: {
      number: {  
        message: 'The :attribute must be a valid number',
        rule: (val, params, validator) => {
          return validator.helpers.testRegex(val,/^-?\d+\.?\d*$/) 
        },  
        required: true  
      }
    }
  });

  register = () => {
    document.body.classList.add('blur')
    this.myRef.current.classList.add('show');
    this.blurRef.current.classList.add('show');
  }
  sendData = () =>{
    fetch('/competition', {
      method: 'POST',
      headers : {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({...this.state.data})
  }).then(res =>{
    return res.json()
  }).then(data =>
    console.log(data));
  }

  thankYou = () => {
    if (this.validator.allValid()) {
      this.myRef.current.classList.remove('show');
      this.thankYouRef.current.classList.add('show');
      this.sendData()
    } else {
      this.validator.showMessages();
      this.forceUpdate();
    }
      

  }

  closeThankyou = () =>{
    this.thankYouRef.current.classList.remove('show');    
    this.blurRef.current.classList.remove('show');  
  }

  render() {
    return (
      <div className="content">
        <div ref={this.thankYouRef} className="thank-you-container">
          <div className="close-container">
            <div className="close-icon">
              <div onClick={this.closeThankyou} className="close-icon-image">

              </div>
              {/* <img src={require('./close.png')} alt=""/> */}
            </div>
          </div>
          <div className="thank-you-image-container">
            <img src={require('./thankyou.png')} alt=""/>
          </div>
          <div className="thank-you-header">
          <p >Successfully sent!</p>
          </div>
          <div className="divider">
          </div>
          <div className="thank-you-description">
            <p>Excelent, we'll be reviewing your initial application in no time and we'll be in touch soon.</p>
          </div>
        </div>

        <div className="form-box" ref={this.myRef}>
        <img src={require('./small.png')} alt=""/>  
        <div className="form-container">
            <p className='registration-header'>Registration</p>

            <input className='small-input' type="text" name="company" value={this.state.data.company} onChange={this.onChange} placeholder='Start up Company Name'/>
            {this.validator.message('company', this.state.data.company, 'required')}
            <input className='small-input' type="text" name="contact_info" value={this.state.data.contact_info} onChange={this.onChange} placeholder='Contact Info'/>
            {this.validator.message('contact_info', this.state.data.contact_info, 'required')}
            <input className='small-input' type="text" name="contact_person" value={this.state.data.contact_person} onChange={this.onChange} placeholder='Contact Person'/>
            {this.validator.message('contact_person', this.state.data.contact_person, 'required')}
            <input className='small-input' type="text" name="email" value={this.state.data.email} onChange={this.onChange} placeholder='Email address'/>
            {this.validator.message('email', this.state.data.email, 'required|email')}
            <input className='small-input' type="text" name="phone" value={this.state.data.phone} onChange={this.onChange} placeholder='Phone number'/>
            {this.validator.message('phone', this.state.data.phone, 'required|number')} 
            <textarea placeholder='Tell us about your project in 160 characters' id="" cols="30" rows="10" name="desc" value={this.state.data.desc} onChange={this.onChange}></textarea>
            {this.validator.message('description', this.state.data.desc, 'required')}
            <div className="radio-container">
              <p>Incorporated/registered company</p>
              <div className="checkbox-inputs">
              <label className="label-container">
              <input type="radio"  name="company_type" value="Yes" onChange={this.setRadio}/>
              <span className="checkmark"></span>
              </label>
              <p className='radio-desc'>Yes</p>
              
              <label className="label-container">  
              <input type="radio" name="company_type" value="No" onChange={this.setRadio}/>
              <span className="checkmark"></span>
              </label>
              <p className='radio-desc'>No</p>
              
              </div>
              {this.validator.message('company_type', this.state.data.company_type, 'required')}
            </div>
           

            <div className="radio-container money">
              <p>Money raise stage</p>
              <div className="checkbox-inputs ">
              <label className="label-container">
              <input type="radio"  name="money_raise" value="Seed money" onChange={this.setRadio}/>
              <span className="checkmark"></span>
              </label>
              <p className='radio-desc'>Seed money</p>
              
              <label className="label-container">
              <input type="radio" name="money_raise" value="Other" onChange={this.setRadio}/>
              <span className="checkmark"></span>
              </label>
              <p className='radio-desc'>Other</p>
              </div>

              <div className="checkbox-inputs ">
              <label className="label-container">
              <input type="radio"  name="money_raise" value="Round A" onChange={this.setRadio}/>
              <span className="checkmark"></span>
              </label>
              <p className='radio-desc'>Round A</p>
              
              <label className="label-container">
              <input type="radio" name="money_raise" value="Pre round b" onChange={this.setRadio}/>
              <span className="checkmark"></span>
              </label>
              <p className='radio-desc'>Pre round b</p>
              </div>
              {this.validator.message('money_raise_stage', this.state.data.money_raise, 'required')}
            </div>

            <div className="radio-container">
              <p>Do you have a CTO or a technical project manager in your team</p>
              <div className="checkbox-inputs">
              <label className="label-container">
              <input type="radio"  name="cto" value="Yes" onChange={this.setRadio}/>
              <span className="checkmark"></span>
              </label>
              <p className='radio-desc'>Yes</p>
              
              <label className="label-container">
              <input type="radio" name="cto" value="No" onChange={this.setRadio}/>
              <span className="checkmark"></span>
              </label>
              <p className='radio-desc'>No</p>
              
              </div>

              {this.validator.message('manager', this.state.data.cto, 'required')}
        </div>
        <div className="form-button">
            <button onClick={this.thankYou}>Submit</button>
            </div>
        </div>
        </div>

      <div className="wrapper">
        
      <div className="images-main">
        <div className="images-container">
          <div className="left-picture">
            <img src={require("./subscribe-background.png")} alt="" />
            <h1 className="heading">
              Startups competition to win a programming Package worth $20,000
            </h1>
            <p className="sub-heading">
              We have a total of $60,000 to give away for 3 promising projects
            </p>
          </div>
          <div className="right-picture">
            <img src={require("./big-logo.png")} alt="" />
          </div>
        </div>
        </div>

        <div className="information-wrapper">

        <div className="information-container">
          <div className="txt-container">
            <p className="fund-information">
              If you're an eCommerce, Fintech, logistics related, Social media,
              web application Start up in early stages fund raising you have a
              great chance. Your place in the quarter final is guaranteed!
            </p>
          <div className="qualify">
            <p className='qualify-description'>To qualify for the quarter final round of the competition, you must have:</p>
            <ul>
              <li> <img src={require('./check_mark.png')} alt=""/> <p>Excelent mock up or product presentation</p></li>
              <li> <img src={require('./check_mark.png')} alt=""/> <p>Fully detailed product specification and development roadmap</p></li>
              <li> <img src={require('./check_mark.png')} alt=""/> <p>Company registrations documents</p></li>
            </ul>
          </div>

          <div className="apply">
            <p className='apply-description'>Out of all applying startups, up to 5 projects will qualify for the semifinal round and 3 finalists will be offered with:</p>
            <ul>
              <li> <img src={require('./bullet.png')} alt=""/> <p>$20,000 developing worth package (3-4 months depending on the nature of the required Development scope)</p></li>
              <li> <img src={require('./bullet.png')} alt=""/> <p>A contract for additional 9 month continuing the Dev’ road map in excellent rates</p></li>
              <li> <img src={require('./bullet.png')} alt=""/> <p>“Techub DC” will become the Tech partner in real equity of 1-2.5%  - to maintain excellent programming rates (optional)</p></li>
            </ul>
          </div>

          <div className="register-button">
            <button onClick={this.register}>Register Now</button>
          </div>

          <div className="prize">
            <p className='prize-header'>We also have 2nd Prize</p>
            <p className="prize-information">The finalists who did not win the 20k package will be offered a one year contract in which the first 3 months will be in 50% reduced cost with an exit point after 9 months from starting point.</p>
          </div>
          </div>

          <div className="image-container">
          {/* <img src={require('./long_illustration.png')} alt=""/> */}
          </div>

        </div>
        </div>
       
      </div>
      
      <div ref={this.blurRef} className="blur-div">

      </div>
      </div>

    );
  }
}
