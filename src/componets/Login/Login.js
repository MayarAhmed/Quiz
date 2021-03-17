import React, { Component , Fragment } from 'react'
import classes from './Login.css'
import Input from './Input/Input'
import Bg from '../../assets/Login.jpg'
import Button from '../UI/Button/Button'
import { Link } from 'react-router-dom'


class Login extends Component{
  
        state = {
            LoginInfo:{
                Name:{
                    elementConfig: {
                        type: 'text',
                        placeholder: 'Your Name'
                    },
                    value: '',
                    validation: {
                        required: true
                    },
                    valid: false,
                    touched: false
                } ,
            //  Password:{
            //     elementConfig: {
            //         type: 'password',
            //         placeholder: 'Password'
            //     },
            //     value: '',
            //     validation: {
            //         required: true
            //     },
            //     valid: false,
            //     touched: false
            // },
            Email:{
                elementConfig: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                value: '',
                validation: {
                    required: true
                },
                valid: false,
                touched: false
            },
              },
           LoginIsValid:false,
           showAdmin:false
               }


 checkValidaty = (value,rules)=>{
        let isValid = true;
        
        if (rules.required) {
            isValid = value.trim() !== "" && isValid;
            console.log('checking',isValid)

        }

        return isValid;

    }
              

inputChangeHandler = (event,ele) => {
      
      const updatedLoginInfoArr =  {...this.state.LoginInfo};
      const updatedLoginElem = {...updatedLoginInfoArr[ele]};
      updatedLoginElem.value = event.target.value;
      updatedLoginElem.touched = true;
      updatedLoginElem.valid = this.checkValidaty(updatedLoginElem.value,updatedLoginElem.validation)
      updatedLoginInfoArr[ele] = updatedLoginElem

      let LoginValid = true;

      for(let key in updatedLoginInfoArr){

        LoginValid =    updatedLoginInfoArr[key].valid && LoginValid
        console.log('[LoginValid]', LoginValid , '[ele]', updatedLoginInfoArr[ele].valid , '[ele' )

      }


      this.setState({LoginInfo:updatedLoginInfoArr, LoginIsValid : LoginValid})
      console.log('BtnValidation',this.state.LoginIsValid )

}

        submitHandler = ()=>{
        this.props.history.push('./Test')
        }
        showAdminhandler =()=>{
            this.setState({
                showAdmin:true
            })
            console.log(this.state.showAdmin)
        }
    render(){
        
        const loginFormArr = [];
        
        for(let key in this.state.LoginInfo){
            loginFormArr.push({
               id:key,
               config:this.state.LoginInfo[key]
           })

        }
console.log(loginFormArr)
    return(

            <div className={classes.container}>
               <img src={Bg} alt='check' className={classes.image}/>
               <h1 className={classes.header}>Sign To IQ test</h1>
               <form className={classes.ContactDetailsContainer}>
                        {loginFormArr.map(loginType =>(
                            <Input 
                            key={loginType.id}
                            type={loginType.config.elementConfig.type}
                            placeholder={loginType.config.elementConfig.placeholder}
                            label={loginType.id}
                            value={loginType.config.value}
                            invalid={!loginType.config.valid}
                            touched={loginType.config.touched}
                            changed={(event)=>this.inputChangeHandler(event,loginType.id)}
                            />
                            ))
                            }
                          {this.state.showAdmin?
                          <Input
                          label="password"
                          type="password"/>:null}
                          
        
                    <Button 
                    style={{width:'25%'}}
                    disabled={!this.state.LoginIsValid} 
                    btntype={'active'}
                    clicked={this.submitHandler}> GO </Button>
                   

               </form>

            </div>
    )
}


}

export default Login;
