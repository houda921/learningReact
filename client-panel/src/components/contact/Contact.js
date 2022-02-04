import React, { Component } from 'react';
import PropTypes from 'prop-types'
import './contact.css';
 class Contact extends Component {  
  state ={ 
    showContactToggle:false 
}
   showContact(myMessage){ 
     console.log('saaalam') 
     //this.state.showContactToggle=true 
     this.setState(
      { showContactToggle:!this.state.showContactToggle}
     );
   }
  render=()=>{  
      //render kima return ama f fel classe matefhemech return wahadha
       
      //bech nesta9balhom menn this.props 
      //l but mta3 props ennou components yahkiw m3a b3adhhom
      const { name ,tel ,email}= this.props.data; 
      const myContact=this.props.data;
    return (
      <div className="card" >
        
        <div className="card-body">
          <h5 className="card-title">{name}</h5>  
          //nestaamlou bind bech najmou n3addiw lfonction kima parametre , w this houwa reference lel classe ely khdhina menha l methode 
          {name}  <i onClick={this.showContact.bind(this,'pingo')} className="fa fa-sort-down" aria-hidden="true"></i>" 
          {(this.showContactToggle)? ( 
            <ul>
              <li> {tel}</li> 
              <li>{email}</li>
            </ul>

          ):null}
          <h6 className="card-subtitle mb-2 text-muted ">Card subtitle</h6> 
        </div> 
        <ul className="list-group">
          
          <li className="list-group-item d-flex justify-content-between align-items-center">
            {tel}
            
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-center">
            {email}
            
          </li>
        </ul>
      </div>
    )
    
  } 
  

  }
  Contact.defaultProps= {
      name :"My name",
      tel:"0000" ,
      email:"my@email.com"
   }
Contact.prototypes={ 
// name : PropTypes.string.isRequired,
// tel : PropTypes.number.isRequired,
// email :PropTypes.string.isRequired, 
data :PropTypes.object.isRequired
}
export default Contact ;