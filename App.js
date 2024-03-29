import React,{useState} from 'react'
import axios from 'axios';
export default function App() {
    const[state,setState]=useState({
        name:"",
        age:"",
        fname:"",
        email:"",
        quali:""
    });
    function uhandlechange(event){
        setState({...state,[event.target.name]:event.target.value})
    }
    
    const handlesubmit=(e)=>
    {
        e.preventDefault();
        console.log(state);
        axios.post('http://localhost:8081/uplode',{state})
        .then(res=>alert("registered Successfully"))
        .catch(err=>console.log(err));
    }
  return (
    <>
    <div className='container'>
        <div className='row d-flex justify-content-center p-5 mt-5'>
            <div className='col-sm-4  p-3 shadow-lg p-3 mb-5 bg-body rounded'>
               
                <form onSubmit={e=>handlesubmit(e)}>
                    <div className='d-flex justify-content-center'>
                   
                    </div>
                    <div class="mb-3">
                        <label className="form-label fw-bold fs-4">Name</label>
                        <input type="text" class="form-control" required placeholder='Enter a Name' name="name" onChange={uhandlechange} value={state.name}/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label fw-bold fs-4">Age</label>
                        <input type="number" className="form-control" required placeholder='Enter a Age' name="age" onChange={uhandlechange} value={state.age}/>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label fw-bold fs-4">FatherName</label>
                        <input type="text" className="form-control" required placeholder='Enetr a FatherName'  name="fname" onChange={uhandlechange} value={state.fname}/>
                    </div>

                    <div className="mb-3">
                        <label  className="form-label fw-bold fs-4">Email</label>
                        <input type="email" className="form-control" required placeholder='Enter Your Eamil'  name="email" onChange={uhandlechange} value={state.email}/>
                    </div>

                    <div className="mb-3">
                    <label  className="form-label fw-bold fs-4">Qualification</label>
                       <select  className='form-select'  name="quali" onChange={uhandlechange} required>
                        <option className='selected' value="">--select--</option>
                        <option value="Bsc">Bsc</option>
                        <option value='B.com'>B.com</option>
                        <option value='Engineering'>Engineering</option>
                        <option value='Agri'>Agri</option>
                        <option value='BA'>BA</option>
                       </select>
                    </div>
                    <div className='d-flex justify-content-center'>
                    <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                   
                </form>
                <div className='d-flex justify-content-end '>
                    <button className='btn text-primary text-decoration-underline' >Clear</button>
                </div>
                </div>

                
        </div>
    </div>
    </>
  )
}





