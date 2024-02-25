import React from 'react';
import Header from './Shared/Header';
import Footer from './Shared/Footer';
import { useForm } from '@inertiajs/react';


const Login = () => {
    const { data,setData, post, errors } = useForm();
  
    const submit = (e) => {
        e.preventDefault();
        post(route('candidate_login'));
    };
    return (
        <div>
           <Header/> 
            
            <h1> Please Login </h1>
<form className="space-y-6" method="POST" action="{{ route('student.login') }}">

        <div className='row my-3'>
            <input type="text" name='email' placeholder='Enter Email'/>
        </div>
        <div className='row my-3'>
            <input type="text" name='password' placeholder='Enter Password'/>
        </div>

</form>


           <Footer/>
        </div>
    );
};

export default Login;