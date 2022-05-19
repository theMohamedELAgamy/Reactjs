
import TextComponent from './components/textcomponent/textComponent'
import ImageComponent from './components/imagecomponent/ImageComponent'
import NavBar from './components/navbar/navbarcomponent';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from './components/aboutuscomponent'
import Error from './components/errorcomponent'
import Student from './components/studentcomponent/studentcomponent'
import CoverComponent from './components/albumscomponents/covercomponent'
import React, { Component } from 'react';
import StudentTable from './components/studenttableComponent/studenttablecomponent';
import studentsList from './students.json'
import StudentsDetails from './components/studentDetailcomponent/studentdetails'
import ArtistComponent from './components/albumscomponents/artistcomponent';
import ArtistDetailsComponent from './components/albumscomponents/ArtistDetailsComponent'
class App extends Component{
    constructor(){
      super();
      this.state={
        AllStudents:studentsList.students
      }
    }

   addRecord=(record)=>{
     
      let newRecord={
        name:record.name,
        age:record.age,
        id:Math.floor(Math.random() * 101)

      }

      let newList=this.state.AllStudents
      newList.push(newRecord)
      this.setState({AllStudents:newList})
    }

  render (){
    return(
      <BrowserRouter>
             <center>
            
            <Routes>
                <Route path="" element={<CoverComponent/>}/>
                <Route path="/artists" element={<ArtistComponent/>}/>
                <Route path="/artists/:id" element={<ArtistDetailsComponent/>}/>

            </Routes> 
{/* 
              <NavBar/>
              <Routes>
                  <Route path="" element={<Home/>}/>
                  <Route path="/Students" element={<Users/>}/>
                  <Route path="/sudents/details/:id" element={<StudentsDetails/>}/>
                  <Route path="/home" element={<div><Student onKeyChange={this.addRecord}/><StudentTable studentsList={this.state.AllStudents}/></div>}/>
                  <Route path="/aboutUs" element={<AboutUs/>}/>
                  <Route path="/error" element={<Error/>}/>
                  <Route path="*" element={<Error/>}/>
              </Routes> */}
              {/* <StudentTable  addedRecord={}/> */}
             </center>
    
      </BrowserRouter>
        
    )
  }
}

export default App;