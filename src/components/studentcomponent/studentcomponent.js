import { Component } from "react";
import TextComponent from '../textcomponent/textComponent'
class Student extends Component{

    constructor(){
        super();
        this.state={
            textInputName:'',
            textInputAge:0
        }  
   }

    render(){
        return (
            
            <div className='container'>
            <label>Name:</label>
            <input 
                className='input1' 
                onChange={(e)=>{
                    
                    this.setState({
                        textInputName:e.target.value
                    })               
                }} 
                type='text'
                /><br/>
            <label>Age:</label>
            <input 
                className='input2' 
                onChange={(e)=>{
                    
                    this.setState({
                        textInputAge:e.target.value
                    })               
                }} 
                type='number'
                /><br/>

                <button 
                    onClick={()=>{
                        this.setState({
                            textInputName:'',
                            textInputAge:0
                        })
                        document.querySelector('.input1').value=''
                        document.querySelector('.input2').value=''

                    }}
                
                
                >Reset</button><br/>
                  <button 
                    onClick={(e)=>{
                        this.props.onKeyChange({name:this.state.textInputName,age:this.state.textInputAge});
                        
                        this.setState({
                            textInputName:'',
                            textInputAge:0
                        })
                        document.querySelector('.input1').value=''
                        document.querySelector('.input2').value=''

                    }}
                
                
                >Add</button><br/>
            <h3> {this.state.textInputName}</h3>
         </div>
         

            
        

        )
    }
}

export default Student