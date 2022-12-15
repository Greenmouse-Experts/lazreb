import React, { useRef, useState, useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify';
import { login } from '../../store/slices/auth';
import { clearMessage } from "../../store/slices/messages";

export const Login = () => {
    let formRef = useRef();
    const { message } = useSelector((state) => state.message);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const [successful, setSuccessful] = useState(false);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (email === "" || password === "") {
            toast.error('All fields are required');
        }
        else if (password.length < 8) {
            toast.error('The password must be at least 8 characters.');
        }
        else {
            const formdata = new FormData(formRef);

            dispatch(login(formdata))
                .then(() => {
                    setSuccessful(true)
                })
                .catch(() => {
                    setSuccessful(false)
                });
        }
    }

    const displayMessage = (message) => {
        if (message) {
            if (!message.success) {
                toast.error(message.message);
            }
            else {
                toast.success(message.message);
            }
        }
        setSuccessful(false);
    }

    const changeEmail = (event) => {
        setEmail(event.target.value);
        setSuccessful(false)
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
        setSuccessful(false)
    }

  return (
    <div>
        <div className='flex bg-login lg:bg-fit bg-cover bg-bottom justify-center items-center h-screen '>
            <div className='lg:w-5/12 xl:w-4/12 w-11/12 py-6 lg:px-10 px-5 bg-white'>
                <div className='pb-8 text-center'>
                    <Link to="/" className=''><img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669194994/lazreb/IMG-20221122-WA0030_1_1_mceisb.png" alt="logo" className='lg:w-20 w-16 mx-auto' /></Link>
                    <p className='text-gray-600 fw-600 mt-3'>Enter your details to access your account</p>
                </div>
                  <form ref={el => (formRef = el)}>
                    <div>
                        <label className='fw-500'>Email</label>
                        <input type="email" placeholder="Enter your email" name='email' value={email} onChange={changeEmail} className="w-full p-2 mt-2 rounded border border-gray-400"/>
                    </div>
                    <div className='mt-6'>
                        <div className='flex justify-between'>
                            <label className='fw-500'>Password</label>
                            <Link to="/forget" className='fs-400 fw-500 text-primary'>Forget password ?</Link>
                        </div>
                        <input type="password" placeholder="Enter your password" name='password' value={password} onChange={changePassword} className="w-full p-2 mt-2 rounded border border-gray-400"/>
                    </div>
                    <div className='mt-8'>
                          <button className='w-full text-center py-2 bg-primary rounded-md text-white fw-600 fs-700' onClick={handleSubmit}>
                            Login
                        </button>
                    </div>
                </form>
                <p className='mt-8 fs-500'>Don't have an account ? <Link to="/register" className='fw-600 '>Sign Up</Link></p>
              </div>
              {successful ? displayMessage(message) : ''}
        </div>
    </div>
  )
}
