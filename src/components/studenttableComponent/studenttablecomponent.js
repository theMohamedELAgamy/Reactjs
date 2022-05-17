import { NavLink } from "react-router-dom";

let StudentTable=(studentsList)=>{
    console.log(studentsList.studentsList);

    let renderStudnets = ()=>{
        if(studentsList.studentsList.length > 0){
            return studentsList.studentsList.map((student)=>{
                let detailsUrl='/sudents/details/'+student.id
                return (
                     
                    <tr>
                            <th scope="row">{student.id}</th>
                            <td>{student.name}</td>
                            <td>{student.age}</td>
                            <td><button  class="btn btn-info"><NavLink  to={detailsUrl}>Details</NavLink></button></td>


                    </tr>
                    
            )
        })
    }else{
        return (<h1>No Studentffs</h1>)
    }
}
    return (
        <div className="search-Comp">
                <table class="table table-dark table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Details</th>

                    
                    </tr>
                </thead>
                <tbody>
                
                    {renderStudnets()}
                 
                </tbody>
                </table>
           
        </div>
    )


}
export default StudentTable
