import { NavLink } from "react-router-dom"

let NavBar=()=>{
    return (
                <nav class="navbar navbar-expand-lg  navbar-dark bg-dark">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                     <NavLink to={'/home'} class="nav-link " aria-current="page" >Home</NavLink>
                </li>
                <li class="nav-item">
                    <NavLink class="nav-link"  to={"/aboutus"}> Aboutus</NavLink> 
                </li>
                <li class="nav-item">
                        <NavLink class="nav-link"  to={"/error"}> Error</NavLink> 
                </li>
                
                
                
            </ul>
            <form class="d-flex" role="search">
            </form>
            </div>
        </div>
        </nav>
    )

}
export default NavBar