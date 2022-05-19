import { NavLink } from "react-router-dom";
let ArtistItem=(artistInfo)=>{

    console.log(artistInfo.artistInfo)
    let imagePath=`./imagesDay3/covers/${artistInfo.artistInfo.cover}.jpg`
    return(
            
            <div>
                <img width='400px' height='400px' src={imagePath}  />
                <div>
                <button  className='btn btn-info'><NavLink  class="btn btn-info" to={`/artists/${artistInfo.artistInfo.id}`} >{artistInfo.artistInfo.name}</NavLink></button>
                </div>
            </div>
    )

}

export default ArtistItem;