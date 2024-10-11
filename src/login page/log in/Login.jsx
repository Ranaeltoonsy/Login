import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Login() {

  const onSubmit = (data) => {
    // Retrieve stored registration data from localStorage
    const storedData = localStorage.getItem("formData");

    if (storedData) {
      const { username, password } = JSON.parse(storedData); // Destructure username and password from stored data

      // Check if entered credentials match the stored data
      if (data.username === username && data.password === password) {
        alert("Login successful!");
        // Redirect to a dashboard or homepage on successful login
      } else {
        alert("Incorrect username or password.");
      }
    } else {
      alert("No user found. Please register first.");
    }
  };

  return (
    <section className="bg-white gap-3">
      <div className="row">
        <div className="col-12 col-md-6">
          <img src="./src/assets/IMG-20241008-WA0000.jpg" alt="Login" />
        </div>
        <div className="col-12 col-md-6 mt-5 d-flex flex-column gap-2">
          <h1 className="text-primary">Welcome Back!</h1>
          <p className="w-75">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            officiis ducimus molestias labore corrupti placeat, tenetur delectus
            magnam similique repellendus in ut ipsum! Reprehenderit autem
            corrupti et. Nihil, explicabo tenetur!
          </p>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="d-flex gap-3 flex-column"
          >
            {/* Username Input */}
            <input
              {...register("username", {
                required: "Username is required",
              })}
              type="text"
              className="rounded-1 col-9 p-2"
              placeholder="Username"
            />
            {errors.username && (
              <span className="text-danger p-0 m-0">
                {errors.username.message}
              </span>
            )}

            {/* Password Input */}
            <input
              {...register("password", {
                required: "Password is required",
              })}
              type="password"
              className="rounded-1 col-9 p-2"
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-danger p-0 m-0">
                {errors.password.message}
              </span>
            )}

             <div className="d-flex gap-5 mt-3 ">
              <div className='d-flex flex-row'>
                <input
                  type="checkbox"
                  className="rounded-0 mb-3"
                  id="remember"
                />
                <label htmlFor="remember">Remember</label>
              </div>
              <p>
                <Link to={"/regester"} className="text-decoration-none">
                  forgot your password?
                </Link>
              </p>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="btn px-4 rounded-2 border-0 text-white text-start ms-2 fs-5"
            >
              NEXT <FontAwesomeIcon className="fs-5 ps-3" icon={faArrowRight} />
            </button>

            {/* Register Link */}
            <p>
              <Link to={"/regester"} className="text-decoration-none ms-2">
                Create account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Login;
