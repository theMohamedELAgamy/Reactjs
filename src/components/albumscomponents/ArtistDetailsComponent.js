import { NavLink, useParams } from "react-router-dom";
import { Component } from "react"

import { useEffect, useState } from "react";



let ArtistDetailsComponent=()=>{
    let {id} = useParams();

    let [artist, setArtist] = useState({});
    let [errMess, setError] = useState('');
    let [albumsList, setAlbumsList] = useState();
   

  

useEffect(()=>{//Fetch API
    fetch( `http://localhost:3004/artists/${id}`)
            .then((response)=>{return response.json()})
            .then((data)=>{
               
                setArtist(data)
                setError("")
                setAlbumsList(data.albums)  
            })
            .catch((err)=>{setError(err)})
            // console.log({artist})
},[]);
    let renderAlbums=()=>{
        if(albumsList){
         return(
                albumsList.map((album)=>{
                    console.log(album.cover)
                    return(
                        
                      <img class="img-thumbnail" width='300px' height='300px' src={`../imagesDay3/albums/${album.cover}.jpg`}alt="..."/>
                      
                        
                        
                        
                    )
                }))
    }
    }

 let imagePath=`../imagesDay3/covers/${artist.cover}.jpg`



    return(
      
        <div  >
            <div>
            <button  className='btn btn-info'><NavLink className='btn info-btn' to='/artists' >Arists DB</NavLink></button>
            </div>s
            <img width='400px' height='400px' alt="..."  src={imagePath} />
            <h2>{artist.name}</h2>
            <h5>{artist.bio}</h5>
            { renderAlbums()}
           
               
          
        
        </div>
      
      
    )
}
// class  ArtistDetailsComponent extends Component{
    
//     // id = useParams();
//     constructor(){
//         super()
//         this.state={
//             artist:{},
//             errMess:''
//         }
      
//     }

//     componentDidMount(){
//         fetch( `http://localhost:3004/artists/1`)
//         .then((response)=>{return response.json()})
//         .then((data)=>{
//            console.log('ahdj')
//             this.setState({artist:data})
//             this.setState({errMess:''})
          
            
//         })
//         .catch((err)=>{this.setState({errMess:err})})

//     }
//     imagePath=`../imagesDay3/covers/${this.state.artist.cover}.jpg`
//     render(){
//         return(
        
//             <div  >
                
//                 <img alt="..."  src={this.imagePath} />
//                 <h2>{this.state.artist.name}</h2>
//                 <h5>{this.state.artist.bio}</h5>
//                 <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
//                     <div class="carousel-inner">
//                         <div class="carousel-item active">
//                         <img width='400px' height='400px' src="https://www.theprairiehomestead.com/wp-content/uploads/2014/10/150.jpg" class="d-block w-100" alt="..."/>
//                         </div>
//                     </div>
//                     {/* { renderAlbums()} */}
//                     <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
//                         <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//                         <span class="visually-hidden">Previous</span>
//                     </button>
//                     <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
//                         <span class="carousel-control-next-icon" aria-hidden="true"></span>
//                         <span class="visually-hidden">Next</span>
//                     </button>
//                 </div>
            
//             </div>
          
          
//         )
//     }


// }

export default ArtistDetailsComponent