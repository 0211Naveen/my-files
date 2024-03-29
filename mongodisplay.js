import React,{useState,useEffect} from 'react'
import axios from 'axios';
import {Link,useNavigate,useParams} from 'react-router-dom' 


function Mongodisplay() {
    const navigate=useNavigate();
   
    const [data,setData]=useState([])
    const [newvalue,newchange] = useState({
        name:"",
        age:"",
        fname:"",
        email:"",
        quali:""
    })
  
  
  
  
    useEffect(()=>{
      axios.get('http://localhost:8081/Display/')
      .then(res=>setData(res.data))
      .catch(err=>console.log(err));
    },[])
   
    const hdelete=(email)=>
    {
      const confirm=window.confirm("Would you like to Delete?"+email);
      if(confirm)
      {
        axios.delete('http://localhost:8081/delete/'+email)
        .then(res=>{navigate(0)})
        .catch(err=>console.log(err));
     }
    }

    const hget=(uid)=>
      {
        axios.get('http://localhost:8081/popup/'+uid)
        .then(res=> newchange(res.data[0]))
        .catch(err=>console.log(err));
       
      }
  
  
      function uhandlechange(evt)
      {
        newchange({...newvalue,[evt.target.name]:evt.target.value});
      }

      const hsubmit=(e)=>{

        e.preventDefault();
        console.log(newvalue);
        axios.put('http://localhost:8081/update/'+newvalue.email,{newvalue})
       
        .then(res=>alert("updated successfully"))
        .then(res=>{navigate(0)})
        .catch(err=>console.log(err));
      }
  
  
  
  
  
  
  
  
  return (
          <>
     
  <h1 className='fx-5 mb-5 '>Display All Data</h1>
  
  
  
  
          <table className='table'><tr><th>Name</th><th>Age</th><th>Father Name</th><th>Email</th><th>Qualification</th>
         
          </tr>
          {data.map((x,index)=>{
  return <tr key={index}>
               <td>{x.name}</td>
              <td>{x.age}</td>
              <td>{x.fname}</td>
              <td>{x.email}</td>
              <td>{x.quali}</td>
  
  
             
  
  
             
  <td>  
  <input type="button"  value ="Edit" onClick={e2=>hget(x.email)} class="bg-dark text-light" data-bs-toggle="modal" data-bs-target="#exampleModal"/>
  <input type="button"  class="bg-dark text-light" value="Delete" onClick={e=> hdelete(x.email)}/>
  </td>
  
  
            </tr>
          })}
         
          </table>
  
  
  
  
  
  
         
   
  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>

        <div class="modal-body">
        <form onSubmit={(e)=>hsubmit(e)}>
  
  <div className="mb-3">
  <label  className="form-label">Name</label>
  <input type="text" className="form-control" name="name" value={newvalue.name} onChange={uhandlechange} ></input>
  </div>

  <div className="mb-3">
  <label  className="form-label">Age</label>
  <input type="number" className="form-control" name="age" value={newvalue.age} onChange={uhandlechange}></input>
  </div>

  <div className="mb-3">
  <label className="form-label">Father Name </label>
  <input type="text" className="form-control" name="fname" value={newvalue.fname} onChange={uhandlechange}></input>
  </div>

  <div className="mb-3">
  <label  className="form-label">Email</label>
  <input type="text" className="form-control" name="email" value={newvalue.email} onChange={uhandlechange} readOnly ></input>
  </div>

  <div className="mb-3">
  <label  className="form-label">Qualification</label>
  <input type="text" className="form-control" name="quali" value={newvalue.quali} onChange={uhandlechange} ></input>
  </div>
  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-primary">Save changes</button>
  </form>
        </div>
       
      </div>
    </div>
  </div>
  
  
          </>
        );
  
  
  
  
  }
  
  
  
  
  
  
  
  
  export default Mongodisplay