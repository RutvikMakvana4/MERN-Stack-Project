import React from 'react';
import { NavLink } from 'react-router-dom';
import signpic from "../images/signup.svg"

const Signup = () => {
  return (
    <>
      <section className='signup'>
            <div className='container mt-5'>
                <div className='signup-content'>
                <div className="signup-form">

                    <h2 className="form-title">Sign up</h2>
                    <form method='POST' className='register-form' id='register-form'>

                        <div className='form-group'>
                            <label htmlFor="name">
                            <i class="zmdi zmdi-account material-icons-name"></i>
                            </label>
                            <input type="text" name='name' id='name' autoComplete='off' placeholder='Your Name'
                            // value={user.name}
                            // onChange={handleInputs}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="email">
                            <i class="zmdi zmdi-account material-icons-email"></i>
                            </label>
                            <input type="email" name='email' id='email' autoComplete='off' placeholder='Your Email' 
                            // value={user.email}
                            // onChange={handleInputs}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="phone">
                            <i class="zmdi zmdi-phone-in-talk material-icons-name"></i>
                            </label>
                            <input type="number" name='phone' id='phone' autoComplete='off' placeholder='Your Phone' 
                            // value={user.phone}
                            // onChange={handleInputs}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="work">
                            <i class="zmdi zmdi-slideshow material-icons-name"></i>
                            </label>
                            <input type="text" name='work' id='work' autoComplete='off' placeholder='Your Profession' 
                            // value={user.work}
                            // onChange={handleInputs}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="password">
                            <i class="zmdi zmdi-lock material-icons-name"></i>
                            </label>
                            <input type="password" name='password' id='password' autoComplete='off' placeholder='Your Password' 
                            // value={user.password}
                            // onChange={handleInputs}
                            />
                        </div>

                        <div className='form-group'>
                            <label htmlFor="cpassword">
                            <i class="zmdi zmdi-lock material-icons-name"></i>
                            </label>
                            <input type="password" name='cpassword' id='cpassword' autoComplete='off' placeholder='Confirm Your Password' 
                            // value={user.cpassword}
                            // onChange={handleInputs}
                            />
                        </div>

                        <div className='form-group form-button'>
                            <input type="submit" name='signup' id='signup' className='form-submit' 
                            value="register" 
                            // onClick={PostData}
                            />
                        </div>

                    </form>

                </div>

                <div className='signup-image'>
                        <figure>
                            <img src={signpic} alt="img" />
                        </figure>
                        <NavLink to="/login" className="signup-image-link">I am already register</NavLink>
                    </div>
                    
                </div>
            </div>
        </section>
    </>
  )
}

export default Signup
