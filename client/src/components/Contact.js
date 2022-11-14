import React from 'react'

const Contact = () => {
  return (
    <>
    <div className="contact_info">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1 d-flex justify-content-between">
                        {/* phone number  */}
                        <div className="contact_info_item d-flex justify-content-start align-items-center">
                            <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="phone" />
                            <div className="contact_info_content">
                                <div className="contact_info_title">
                                    Phone
                                </div>
                                <div className="contact_info_text">
                                    +91 1111 543 2198
                                </div>
                            </div>
                        </div>

                        {/* email  */}
                        <div className="contact_info_item d-flex justify-content-start align-items-center">
                            <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="email" />
                            <div className="contact_info_content">
                                <div className="contact_info_title">
                                    Email
                                </div>
                                <div className="contact_info_text">
                                    abc23@gmail.com
                                </div>
                            </div>
                        </div>

                        {/* address  */}
                        <div className="contact_info_item d-flex justify-content-start align-items-center">
                            <img src="https://img.icons8.com/office/24/000000/iphone.png" alt="address" />
                            <div className="contact_info_content">
                                <div className="contact_info_title">
                                    Address
                                </div>
                                <div className="contact_info_text">
                                    Delhi, India
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        {/*contact us form */}


        <div className="contact_form">
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="contact_form_container py-5">
                            <div className="contact_form_title">
                                Get In Touch
                            </div>
                            <form method='POST' id='contact_form'>
                                <div className="contact_form_name d-flex justify-content-between align-items-between">
                                    <input type="text" id='contact_form_name' className='contact_form_name input_field'
                                    placeholder='Your Name' required='true' 
                                    // value={userContact.name}
                                    // name="name"
                                    // onChange={handleInputs}
                                    />
                                    <input type="email" id='contact_form_email' className='contact_form_email input_field'
                                    placeholder='Your Email' required='true' 
                                    // value={userContact.email}
                                    // name="email"
                                    // onChange={handleInputs}
                                    />

                                    <input type="number" id='contact_form_phone' className='contact_form_phone input_field'
                                    placeholder='Your Phone Number' required='true'
                                    //  value={userContact.phone}
                                    // name="phone"
                                    // onChange={handleInputs}
                                    />
                                </div>

                                <div className="contact_form_text mt-5">
                                    <textarea className='text_field contact_form_message' id="" cols="30" rows="10"
                                    placeholder='Message'
                                    // value={userContact.message}
                                    // name="message"
                                    // onChange={handleInputs}
                                    ></textarea>
                                </div>

                                <div className="contact_form_button">
                                    <button type="submit" className="button contact_submit_button"
                                    // onClick={contactForm}
                                    >Send Message</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
    </>
  )
}

export default Contact
