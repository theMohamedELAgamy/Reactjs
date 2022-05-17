import { useParams } from "react-router-dom";
import studentsList from '../../students.json'
let StudentsDetails = ()=>{

    let {id} = useParams();
    console.log(id);
    console.log(studentsList.students);

    

    let showStudent=()=>{
        
            return studentsList.students.map((student)=>{
                if(Number(student.id)===Number(id)){
                        return (
                            
                            <tr>
                                    <th scope="row">{student.id}</th>
                                    <td>{student.name}</td>
                                    <td>{student.age}</td>
                                    <td>{student.email}</td>
                                    


                            </tr>
                            
                            )
                        }
        })
    

        }
    
    return(
        <div className="search-Comp">
                <table class="table table-dark table-striped">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">email</th>

                    
                    </tr>
                </thead>
                <tbody>
                
                    {showStudent()}
                 
                </tbody>
                </table>
           
        </div>
    )
}

export default StudentsDetails;