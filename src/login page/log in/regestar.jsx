import React from "react";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Regetar() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    localStorage.setItem("formData", JSON.stringify(data));
    console.log("Data stored:", data);
  };

  return (
    <div className="d-flex  flex-wrap bg-white  ">
      <div className=" col-sm-12 col-md-6  ">
        <img
          className=" w-100 h-100  col-12  object-fit-cover"
          src="./src/assets/IMG-20241008-WA0000.jpg"
          alt="Form Illustration"
        />
      </div>
      <div className="d-flex flex-column justify-content-center algin-items-center  container col-sm-12 col-md-6  px-4 ">
        <div className="container ">
          <h1 className="color-fer fw-bold  mb-3 font-hello   ">
            <span className="borde">HEL</span>LO!
          </h1>
          <p className="my-4  col-sm-12 w-100  create ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis at
            explicabo, nihil repellendus molestias doloribus harum modi natus?
          </p>
        </div>
        <div>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" d-flex flex-column gap-4    my-3 col-sm-12 col-md-11 col-lg-10  ">
            <input
              {...register("username", {
                required: "Username is required",
              })}
              type="text"
              className="form-control color-input cart w-100 border-2 p-2"
              placeholder="Username"
            />
            {errors.username && (
              <span className="text-danger p-0 m-0">{errors.username.message}</span>
            )}

            <input
              {...register("email", {
                required: "Email is required",
              })}
              type="email"
              className="form-control color-input cart border-2 p-2"
              placeholder="Email"
            />
            {errors.email && (
              <span className="text-danger p-0 m-0">{errors.email.message}</span>
            )}

            <input
              {...register("password", {
                required: "Password is required",
              })}
              type="password"
              className="form-control  color-input cart  border-2 p-2"
              placeholder="Password"
            />
            {errors.password && (
              <span className="text-danger p-0 m-0">{errors.password.message}</span>
            )}

            <div className="d-flex gap-2 justify-content-between align-items-center ">
              <div className="d-flex gap-2 ">
                <input
                  className="chekd"
                  {...register("checkbox", {
                    required: "Remember is required",
                  })}
                  type="checkbox"
                  id="option1"
                />
                <label htmlFor="option1" className="f">Remember</label>
                {errors.checkbox && (
                  <p className="text-danger p-2">{errors.checkbox.message}</p>
                )}
              </div>
              <div>
                {" "}
                <p className="color-fer">forgot your password?</p>
              </div>
            </div>

            <button
              type="submit"
              className="btn  border-0 d-flex flex-start next text-center text-white px-3 fw-bold ">
              NEXT{" "}
              <FontAwesomeIcon className="  ps-3 text-center fs-5 "icon={faArrowRight}/>
            </button>
            <p className="create"></p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Regetar;
