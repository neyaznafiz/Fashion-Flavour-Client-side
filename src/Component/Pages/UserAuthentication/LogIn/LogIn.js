import axios from "axios";
import React, { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import auth from "../../../../Firebase/firebase.init";
import Loading from "../../../Shared/Loading/Loading";
import SocialLogin from "../SocialLogin/SocialLogin";

const LogIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  if (error) {
    toast.error("Please input a valid email and password");
  }

  if (loading || sending) {
    return (
      <div className="mx-40 my-32">
        <Loading></Loading>
      </div>
    );
  }

  if (user) {
    navigate(from, { replace: true });
  }

  const handleLogInWithEmailAndPass = async (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    await signInWithEmailAndPassword(email, password);
    const { data } = await axios.post(
      `https://fashion-flavour-serverside-production.up.railway.app/login`,
      { email }
    );
    localStorage.setItem("accessJwtToken", data.accessJwtToken);
  };

  const resetPassHandle = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Your reset password email was sent.");
    } else {
      toast.error("Please input your email address.");
    }
  };

  return (
    <div className=" w-full pt-24 bg-yellow-600 border-8 border-yellow-600 grid grid-cols-1 lg:grid-cols-1">
      <section className="h-100 h-custom" style={{ backgroundColor: "1" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-5 col-xl-5">
              <div className="card form-shadow">
                <img
                  src="https://i.ibb.co/MVtZQR1/img3.jpg"
                  className="w-100 rounded-t-lg" alt=""
                />
                <div className="card-body">
                  <h3 className="mb-4 pb-2  text-2xl font-bold font-serif">
                    LogIn Here
                  </h3>

                  <form
                    onSubmit={handleLogInWithEmailAndPass}
                    className="px-md-2"
                  >
                    <div className="row">
                      <div className=" mb-4">
                        <div className="form-outline datepicker form-shadow">
                          <input
                            ref={emailRef}
                            type="email"
                            name="email"
                            id="exampleDatepicker1"
                            className="form-control py-2"
                          />
                          <label
                            for="exampleDatepicker1"
                            className="form-label font-semibold px-2 text-white-50 text-sm"
                          >
                            TYPE YOUR EMAIL
                          </label>
                        </div>
                      </div>
                      <div className=" mb-3">
                        <div className="form-outline datepicker form-shadow">
                          <input
                            ref={passwordRef}
                            type="password"
                            name="password"
                            id="exampleDatepicker1"
                            className="form-control py-2"
                          />
                          <label
                            for="exampleDatepicker1"
                            className="form-label font-semibold px-2 text-white-50 text-sm"
                          >
                            TYPE YOUR PASSWORD
                          </label>
                        </div>

                        <div className="flex justify-end">
                          <button
                            onClick={resetPassHandle}
                            className="font-semibold mt-1 text-white text-lg"
                          >
                            Forget Password
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="lg:flex lg:items-center lg:justify-between grid grid-cols-1">
                      <button
                        type="submit"
                        className="px-4 py-2 mb-3 btn-shadow text-gray-100"
                      >
                        Log In
                      </button>

                      <div className="text-gray-200 font-semibold flex gap-x-2 ">
                        <p>Are you new here ? </p>
                        <Link
                          to="/signup"
                          className="hover:text-white hover:border-b-2 lg:mx-2 mx-auto"
                        >
                          Sign Up
                        </Link>
                      </div>
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

export default LogIn;
