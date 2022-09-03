import { async } from '@firebase/util';
import axios from 'axios';
import React from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../../Firebase/firebase.init';
import Loading from '../../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const SignUp = () => {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true })

    const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);

    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";

    // if (error || updateProfileError) {
    //     toast.error(<p>Error: {error.message}</p>)
    // }

    if (loading || updating) {
        return <Loading></Loading>
    }

    if (user) {
        navigate(from, { replace: true });
    }

    const handleSignUp = async event => {
        event.preventDefault()

        // const emailRegx = /\S+@\S+\.\S+/
        // const email = emailRegx.test(event.target.email.value)

        // const passRegx = /.{6,}/
        // const password = passRegx.test(event.target.password.value)
        const email = event.target.email.value
        const password = event.target.password.value

        createUserWithEmailAndPassword(email, password)

        const { data } = await axios.post(`https://cryptic-stream-11517.herokuapp.com/signup`, { email })
        localStorage.setItem('accessJwtToken', data.accessJwtToken)

        updateProfile()
        toast.success('Your profile updated')


    }


    return (
        <div className=' w-full pb-20 bg-yellow-600 border-8 border-yellow-600 grid grid-cols-1 lg:grid-cols-1'>
            <section className="h-100 h-custom" style={{ backgroundColor: '1' }}>
                <div className="container pt-24 h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-5 col-xl-5">
                            <div className="card form-shadow">
                                <img src="https://i.ibb.co/MVtZQR1/img3.jpg" className="w-100 rounded-t-lg" />
                                <div className="card-body">
                                    <h3 className="mb-4 pb-2  text-2xl font-bold font-serif">SignUp Here</h3>

                                    <form onSubmit={handleSignUp} className="px-md-2" >

                                        <div className="form-outline mb-4 form-shadow">
                                            <input type="text" name="name" id="form3Example1q" className='form-control py-2' />
                                            <label className="form-label fixed-top font-semibold px-2 text-white-50 text-sm" for="form3Example1q">NAME</label>
                                        </div>

                                        <div className="row">
                                            <div className=" mb-4">
                                                <div className="form-outline datepicker form-shadow">
                                                    <input type="email" name="email" id="exampleDatepicker1" className='form-control py-2' />
                                                    <label for="exampleDatepicker1" className="form-label font-semibold px-2 text-white-50 text-sm">TYPE YOUR EMAIL</label>
                                                </div>
                                            </div>
                                            <div className=" mb-4">
                                                <div className="form-outline datepicker form-shadow">
                                                    <input type="password" name="password" id="exampleDatepicker1" className='form-control py-2' />
                                                    <label for="exampleDatepicker1" className="form-label font-semibold px-2 text-white-50 text-sm">TYPE YOUR PASSWORD</label>
                                                </div>
                                            </div>

                                            <div className=" mb-4">
                                                <div className="form-outline datepicker form-shadow">
                                                    <input type="password" name="confirm-password" id="exampleDatepicker1" className='form-control py-2' />
                                                    <label for="exampleDatepicker1" className="form-label font-semibold px-2 text-white-50 text-sm">COMFIRM YOUR PASSWORD</label>
                                                </div>
                                            </div>

                                        </div>

                                        <div className='lg:flex lg:items-center lg:justify-between grid grid-cols-1'>
                                            <button type="submit" className=" btn btn-lg mb-3 btn-shadow text-gray-300">Sign Up</button>

                                            <p className='text-gray-200 font-semibold lg:flex grid justify-center '>Already have an account ? <Link to='/login' className='hover:text-white hover:border-b-2 lg:mx-2 mx-auto'>Log In</Link></p>
                                        </div>

                                    </form>

                                    <div>
                                        <SocialLogin></SocialLogin>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
            <ToastContainer />
        </div>

    );
};

export default SignUp;