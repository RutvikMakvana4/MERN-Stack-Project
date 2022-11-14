import React from 'react';
import { NavLink } from 'react-router-dom';
import loginpic from '../images/login.svg';


const Login = () => {
  return (
    <>
      <section className='sign-in'>
            <div className='container mt-5'>
                <div className='signin-content'>

                <div className='signin-image'>
                        <figure>
                            <img src={loginpic} alt="img" />
                        </figure>
                        <NavLink to="/signup" className="signup-image-link">Create an Account</NavLink>
                    </div>

                <div className="signin-form">

                    <h2 className="form-title">Sign up</h2>
                    <form method='POST' className='register-form' id='register-form'>

                        <div className='form-group'>
                            <label htmlFor="email">
                            <i class="zmdi zmdi-account material-icons-email"></i>
                            </label>
                            <input type="email" name='email' id='email' autoComplete='off' placeholder='Your Email' 
                            // value={email}
                            // onChange={(e)=>setEmail(e.target.value)}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="password">
                            <i class="zmdi zmdi-lock material-icons-name"></i>
                            </label>
                            <input type="password" name='password' id='password' autoComplete='off' placeholder='Your Password' 
                            // value={password}
                            // onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div className='form-group form-button'>
                            <input type="submit" name='signin' id='signin' className='form-submit' value="Log in"
                            // onClick={loginUser}
                            />
                        </div>

                    </form>

                </div>
                    
                </div>
            </div>
        </section>
    </>
  )
}

export default Login
