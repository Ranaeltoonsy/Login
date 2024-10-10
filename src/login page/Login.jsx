import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { width } from '@fortawesome/free-brands-svg-icons/fa42Group';
export default function Login() {

  const [hasError, setHasError] = useState(false);
  
  const nameInput = useRef();
  const passwordInput  = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate inputs
    const idRegex = /^[a-zA-Z][a-zA-Z0-9]+$/;
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,11}$/;

    if (!idRegex.test(nameInput)) {
      alert("Invalid Username");
      setHasError(true);
      return;
    }

    if (!passwordRegex.test(passwordInput)) {
      alert("Invalid password");
      setHasError(true);
      return;
    }

    setHasError(false);

    // Check if user exists in local storage
    const userString = localStorage.getItem("users");
    const usersArray = userString ? JSON.parse(userString) : [];

    const idIndex = usersArray.findIndex((el) => {
      return el.text === nameInput && el.password === passwordInput;
    });

    if (idIndex !== -1) {
      // Redirect to Cats.html if login is successful
      alert ('WELCOME + el.name')
    } else {
      alert("Wrong ID or Password");
    }
  };

  return (
    <section className="bg-white">
      <div className="row">
        <div className="col-12 col-md-6">
          <img src="./src/assets/IMG-20241008-WA0000.jpg" />
        </div>
        <div className="col-12 col-md-6 mt-5">
          <h1 className="text-primary">Welcome Back!</h1>
          <p className="w-75">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus
            doloribus possimus eos esse quaerat labore vel deleniti, delectus
            ducimus, distinctio, ex consectetur cupiditate. Iste dicta nostrum ea
            voluptates veniam quisquam!
          </p>
          <form onSubmit={handleSubmit} className='d-flex gap-3 flex-column'>
            
              <input
              ref={nameInput}
                type="text"
                className="rounded-1 col-9 p-2"
                required
                placeholder="Username"
              />
            
            
              <input
              ref={passwordInput}
                type="password"
                className="rounded-1 col-9 p-2"
                required
                placeholder="password"
              
              />
            
            <div className="d-flex gap-5">
              <div>
                <input
                  type="checkbox"
                  className="runded-0"
                  id="remember"
                />
                <label htmlFor="remember">Remember</label>
              </div>
              <p>
                <Link to={"/register"} className="text-decoration-none">
                  forgot your password?
                </Link>
              </p>
            </div>
            <div>
              <button
                type="submit"
                className="btn px-4 rounded-2 border-0 text-white text-start ms-2 fs-5"
              >
                NEXT <FontAwesomeIcon className='fs-5 ps-3' icon={faArrowRight}/>
              </button>
              <p>
                <Link to={"/register"} className="text-decoration-none ms-2">
                  Create account
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}