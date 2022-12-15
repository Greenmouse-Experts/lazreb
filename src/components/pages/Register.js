import React, {useRef, useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from 'react-toastify';
import { register } from '../../store/slices/auth';
import { clearMessage } from "../../store/slices/messages";


export const Register = () => {
    const captchaRef = useRef(null);
    let formRef = useRef();
    const { message } = useSelector((state) => state.message);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const [successful, setSuccessful] = useState(false);

    const [fullNames, setFullNames] = useState('');
    const [gender, setGender] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setNewPassword] = useState('');
    const [agreement, setAgreement] = useState('yes');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (fullNames === "" || gender === "" || email === "" || phone === "" || password === "" || password2 === "" || !agreement) {
            toast.error('All fields are required');
        }
        else if (password !== password2) {
            toast.error('Passwords do not match');
        } else {
            const formdata = new FormData(formRef);

             dispatch(register(formdata))
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
                toast.error((Object.values(message.errors).toString()));
            }
            else {
                toast.success(message.message);
            }
        }
        setSuccessful(false);
    }

    const changeFullNames = (event) => {
        setFullNames(event.target.value);
        setSuccessful(false)
    }

    const changeGender = (event) => {
        setGender(event.target.value);
        setSuccessful(false)
    }

    const changeEmail = (event) => {
        setEmail(event.target.value);
        setSuccessful(false)
    }

    const changePhone = (event) => {
        setPhone(event.target.value);
        setSuccessful(false)
    }

    const changePassword = (event) => {
        setPassword(event.target.value);
        setSuccessful(false)
    }

    const verifyPassword = (event) => {
        setNewPassword(event.target.value);
        setSuccessful(false)
    }

    const verifyAgreement = (event) => {
        setAgreement(event.target.value);
        setSuccessful(false)
    }

  return (
      <div>
         <div className='flex bg-register bg-fit justify-center items-center min-h-screen '>
            <div className='lg:w-7/12 xl:w-6/12 py-4 px-10 bg-white my-2'>
                <Link to="/"><img src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1669194994/lazreb/IMG-20221122-WA0030_1_1_mceisb.png" alt="logo" className='lg:w-20 w-16 mx-auto' /></Link>
                <div className='pb-6 pt-2'>
                    <p className='text-gray-600 fw-600 text-center'>Create your account</p>
                </div>
                  <form ref={el => (formRef = el)}>
                    <div className='lg:flex'>
                        <div className='lg:w-6/12 lg:pr-6'>
                            <label className='fw-500'>Full Name</label>
                              <input type="text" name='name' value={fullNames} onChange={changeFullNames}
                                  placeholder="Enter your full name" className="w-full p-2 py-1 mt-2 rounded border border-gray-400" required
                              />
                        </div>
                        <div className='lg:w-6/12 lg:pl-6 mt-4 lg:mt-0'>
                            <label className='fw-500'>Sex</label>
                              <select name='sex' value={gender} className="w-full p-2 py-1 mt-2 rounded border border-gray-400" onChange={changeGender}>
                                <option>Select gender</option>
                                <option>Male</option>
                                <option>Female</option>
                              </select>
                        </div>
                    </div>
                    <div className='lg:flex mt-4'>
                        <div className='lg:w-6/12 lg:pr-6'>
                            <label className='fw-500'>Email</label>
                            <input type="email" name='email' value={email} onChange={changeEmail} required placeholder="Enter your email" className="w-full py-1 p-2 mt-2 rounded border border-gray-400"/>
                        </div>
                        <div className='lg:w-6/12 lg:pl-6 mt-6 lg:mt-0'>
                            <label className='fw-500'>Phone Number</label>
                            <input type="number" name='phone_number' value={phone} onChange={changePhone} required placeholder="Enter your phone number" className="w-full py-1 p-2 mt-2 rounded border border-gray-400"/>
                        </div>
                    </div>
                    <div className='lg:flex'>
                        <div className='lg:w-6/12 lg:pr-6 mt-4'>
                            <label className='fw-500'>Password</label>
                            <input type="password" name='password' min={8} max={100} value={password} onChange={changePassword} required placeholder="Enter your password" className="w-full py-1 p-2 mt-2 rounded border border-gray-400"/>
                        </div>
                        <div className='lg:w-6/12 lg:pl-6 mt-4'>
                            <label className='fw-500'>Confirm Password</label>
                              <input type="password" name='password_confirmation' value={password2} onChange={verifyPassword} required placeholder="Enter your password" className="w-full py-1 p-2 mt-2 rounded border border-gray-400"/>
                        </div>
                    </div>
                    <div className='flex items-start my-4'>
                          <input type="checkbox" name='agreement' className='mt-2 mr-3' required value={agreement} onChange={verifyAgreement} />
                        <p>By Signing Up, I Agree to the Terms and Conditions and Privacy Policy</p>
                      </div>
                      <form>
                    <div className="mt-4 w-full overflow-hidden">
                        <ReCAPTCHA
                            sitekey="6Lc2fk4jAAAAALrd7ZbSKm0sFi9DH4XH1DMdFwzo"
                            ref={captchaRef}
                        />
                          </div>
                          </form>
                    <div className='mt-4'>
                        <button className='w-full text-center py-2 bg-primary rounded-md text-white fw-600 fs-700' onClick={handleSubmit}>
                            Sign Up
                        </button>
                    </div>
                </form>
                <p className='mt-4 fs-500'>Already have an account ? <Link to="/login" className='fw-600 '>Login</Link></p>
              </div>
              {successful ? displayMessage(message) : ''}
        </div>
    </div>
  )
}
