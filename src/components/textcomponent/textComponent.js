 
 import { Component } from 'react'
import './textComponent.css'

 class textComponent extends Component{
     constructor(){
                super();
                this.state={
                    textInput:''
                }  
           }

     render(){
         return (
            <div className='container'>
                <input 
                className='input1' 
                onChange={(e)=>{
                    
                    this.setState({
                        textInput:e.target.value
                    })               
                }} 
                type='text'
                /><br/>

                <button 
                    onClick={()=>{
                        this.setState({
                            textInput:''
                        })
                        document.querySelector('.input1').value=''
                    }}
                
                
                >Reset</button><br/>
                
               <h3> {this.state.textInput}</h3>
        </div>
         )
     }       


 }
 export default textComponent