import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

function SignIn(props) {
    const navigate=useNavigate()
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const handleLogin=async(e)=>{
        e.preventDefault();
        try {
            const url=`http://localhost:5000/api/login`;
            const response= await fetch(url,{
                method:"POST",
                body:JSON.stringify({
                    email,
                    password
                }),
                headers:{
                    "content-type":"application/json"
                }
            })
            const parseRes=await response.json();
            console.log(parseRes);
            if(parseRes.error){
                toast.error(parseRes.error);
            }else{
                toast.success(parseRes.msg);
                localStorage.setItem('userID',parseRes._id);
                localStorage.setItem('pic',parseRes.pic);
                localStorage.setItem('username',parseRes.username);
                localStorage.setItem('email',parseRes.email);
                sessionStorage.setItem('userToken',parseRes.token);
                navigate('/');
                setTimeout(()=>{
                    window.location.reload()
                },200)
            }
        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
        }
    }
    return (
        <>
            <div className='sign-in start'>
                <form onSubmit={handleLogin}>
                    <label>Email</label>
                    <input type='email' placeholder='example@gmail.com' onChange={e=>setEmail(e.target.value)} required/>
                    <label>Password</label>
                    <input type='password' placeholder='password' onChange={e=>setPassword(e.target.value)} required/>
                    <div className='link-btn'>
                        <button>Submit</button> <Link to='/register'>Create a new account?</Link>
                    </div>
                </form>
            </div>   
        </>
    );
}

export default SignIn;