import React,{useState} from 'react';
import axios from 'axios';
export default function Delete2() {
    const[state,setState]=useState({
        email:""
    })


    function handleChange(evt) {
        setState({...state,[evt.target.name]: evt.target.value});

      }

      const handlesubmit=(e)=>
      {
          e.preventDefault();
          console.log(state);
          axios.post('http://localhost:8081/del'+state.email)
          .then(res=>alert("Deleted Successfully"))
          .catch(err=>console.log(err));
      }

  return (
    <>
     <form onSubmit={e=>handlesubmit(e)}>
     <div className="container">
        <div className='col-sm-5'>
            <label  className="form-label fw-bold fs-4">Email</label>
            <input type="email" className="form-control" required placeholder='Enter Your Eamil' value={state.email}  onChange={handleChange}  name="email"/>
            <input type='submit'  className='btn btn-danger mt-3' value='Delete'/>
        </div>
    </div>
    
     </form>
    </>
  )
}