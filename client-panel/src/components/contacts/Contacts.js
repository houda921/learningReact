// import React from 'react';
// //import styled from 'styled-components';
// //import PropTypes from 'prop-types';
// import Contact from '../contact/Contact';
// // #region constants

// // #endregion

// // #region styled-components

// // #endregion

// // #region functions

// // #endregion

// // #region component
// const propTypes = {};

// const defaultProps = {};

// /**
//  * 
//  */
// class Contacts extends React.Component { 
//     state =
//     { 
//         Contacts:[
//             {id :1 , 
//             name : "houda sayar ", 
//             tel:"324134" ,
//             email:"houda@gmail.com" 
//         } , 
//         {id :1 , 
//             name : "maaha ", 
//             tel:"937498" ,
//             email:"maha@gmail.com" 
//         } , 
//         {id :1 , 
//             name : "hassen sayar ", 
//             tel:"09843" ,
//             email:"hassen@gmail.com" 
//         }
//          ]
//     }
// constructor(props) {
//     super(props);

//     this.state = {
//     };
// }

//     render() { 
//         const Contacts=this.state; 
//         return (
//         <div> 
//           { Contacts.map(Contact=>(
//            <Contact data={Contact}/>
//            ) )}
//         </div>)
//     }
// }

// Contacts.propTypes = propTypes;
// Contacts.defaultProps = defaultProps;
// // #endregion

// export default Contacts; 
import React, { Component } from 'react';
import Contact from '../contact/Contact'
 class Contacts extends Component { 
     
     state = {
         contacts : [
             {id:1 , name:'Ayadi', tel:'25364125', email:'ayadi@gmail.com'},
             {id:2 , name:'brahmi', tel:'40125326', email:'brahmi@gmail.com'},
             {id:3 , name:'ayari', tel:'52132654', email:'ayari@gmail.com'},
         ]
     }
  render() {
  const {contacts} =  this.state
    return (
    <div>
     {contacts.map ((contact) => (
        //  <Contact Name={contact.name}  Tel ={contact.email} Email={contact.email}/>
        <Contact data={contact} />
     ))}
    </div>
    );
  }
}
export default Contacts