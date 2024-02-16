import React, { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import { Link } from "react-router-dom";

const SignUp = () => {

  const [inputes, setInputes] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: ""
  })

  const handleGenderCheckbox = (gender) => {
    setInputes({ ...inputes, gender });
  };  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputes)
  }

  return (
    <div className="flex flrx-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl font-semibold text-center text-gray-300">
          SignUp <span className="text-pink-300">WeChat</span>
        </h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Full Name"
              className="w-full input input-bordered h-10"
              value={inputes.fullName}
              onChange={(e)=>setInputes({...inputes, fullName : e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter Your Username"
              className="w-full input input-bordered h-10"
              value={inputes.username}
              onChange={(e)=>setInputes({...inputes, username : e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              className="w-full input input-bordered h-10"
              value={inputes.password}
              onChange={(e)=>setInputes({...inputes, password : e.target.value})}
            />
          </div>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Your Password"
              className="w-full input input-bordered h-10"
              value={inputes.confirmPassword}
              onChange={(e)=>setInputes({...inputes, confirmPassword : e.target.value})}
            />
          </div>
          
          <GenderCheckbox onCheckboxChange={handleGenderCheckbox} selectedGender={inputes.gender} />

          <Link
            to={"/login"}
            className="text-sm hover:underline hover:text-pink-300 mt-2 inline-block"
          >
            Already have an account?
          </Link>
          <div>
          <button className="btn btn-block btn-sm mt-2">SignUp</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
