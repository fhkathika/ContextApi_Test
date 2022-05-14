import React, {useState } from 'react';
const login = () => {
    const [adduser,setAdduser]=useState([])
    const handleLogin=e=>{
const user=e.target.value;
const password=e.target.value ;
const loginUser={user,password} 
e.preventDefault()
   
    }
    
    return (
        <div>
              <form  onSubmit={handleLogin}>

<label>username: </label> <input className="w-50 m-3 m-3 p-2" type="text"  placeholder="enter name" />
<br />
<label>Password: </label><input className="w-75 m-3 m-3 p-2" type="text"  placeholder="enter detail"/>
<br />

 <input className="w-25 mx-auto m-3 p-2" type="submit" value="Add Item" />
</form>
        </div>
    );
};

export default login;