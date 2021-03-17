import React, {Component} from 'react';
import Aux from '../../../hoc/Auxailiary'
import BackDrop from '../BackDrop/BackDrop'
import classes from './Modal.css'
import { useHistory } from "react-router-dom";

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



class Modal extends Component {  
  


    redirectPage =()=>{

        console.log('[ redirect ]')
        this.props.history.push("./Test")
    }


    render(){

        return(

<Aux>
  <BackDrop/>
      <div className={classes.Modal}>
          {this.props.answers.map((answerText,i)=>{

              return(
                  <div key={i}>
                  <div>{answerText.answer}</div>
                  <div>{answerText.id ? 'right' : 'noooo'}</div>
                  </div>
              )

          })}
          <div>
      <button onClick={this.redirectPage}>Start Again</button>
      <button>Finish</button>
          </div>
      </div>
   </Aux>

        )
    }
   

}
export default Modal;
