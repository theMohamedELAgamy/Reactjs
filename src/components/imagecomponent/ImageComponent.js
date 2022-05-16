import { Component } from "react"
import './ImageComponent.css'

class ImageComponent extends Component {

 
        myInterval
        sliding=true
    constructor(){
        super();
        this.state={
            imgSrc:1
        }
    }
    render(){
        return (
            <div className="imageSlider">
                    <img src={'./images/'+this.state.imgSrc+'.jpg'} width = "300" height = "300"/>
                    <div className="control">
                            <button 
                                   onClick={()=>{
                                       if(this.state.imgSrc<4){
                                            this.setState({
                                                imgSrc:(this.state.imgSrc)+1
                                            })
                                         }
                                   }}     

                            >Next</button>
                            <button
                                  onClick={()=>{
                                    if(this.state.imgSrc>1){
                                         this.setState({
                                             imgSrc:(this.state.imgSrc)-1
                                         })
                                      }
                                }}

                            >Prev</button>
                            <button
                                   onClick={()=>{

                                       if(this.sliding){
                                        this.sliding=false
                                             this.myInterval=setInterval(()=>{
                                                    if(this.state.imgSrc<4){
                                                            this.setState({
                                                                imgSrc:(this.state.imgSrc)+1
                                                            }) 
                                                    }
                                                    if(this.state.imgSrc===4)      
                                                    {  this.setState({
                                                            imgSrc:1
                                                        }) }
                                            
                                                    },1000) 
                                        }
                                   
                                }}
                            
                            >Slid</button>
                            <button

                                onClick={()=>{
                                    clearInterval(this.myInterval);
                                    this.sliding=true
                                }} 

                            
                            >Stop</button>
                    </div>
            </div>
        )
    }

}
export default ImageComponent