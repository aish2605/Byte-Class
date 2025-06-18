import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUserData({ ...userData, [name]: value });
  };

  const submitData = async (event) => {
    event.preventDefault();
    const { firstName, lastName, phone, email, address, message } = userData;

    if (firstName && lastName && phone && email && address && message) {
      const res = fetch(
        "https://demo1-55b1e-default-rtdb.firebaseio.com/userDataRecords.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            firstName,
            lastName,
            phone,
            email,
            address,
            message,
          }),
        }
      );

      if (res) {
        setUserData({
          firstName: "",
          lastName: "",
          phone: "",
          email: "",
          address: "",
          message: "",
        });
        alert("Data Stored");
      } else {
        alert("plz fill the data");
      }
    } else {
      alert("plz fill the data");
    }
  };

  return (
    <>
      <section className="contactus-section">
        <div className="contact-box">
          <div className="left-section">
            <h1 className="heading">Connect With Our Team</h1>
            <p className="sub-text">for any suggestions and help contact us by email.</p>
            <img
              src="./images/callcenter.jpg"
              alt="contatUsImg"
              className="img-contact"
            />
          </div>

          <div className="right-section">
            <form method="POST" onSubmit={submitData}>
              <div className="input-row">
                <input
                  type="text"
                  name="firstName"
                  className="input-field"
                  placeholder="First Name"
                  value={userData.firstName}
                  onChange={postUserData}
                />
                <input
                  type="text"
                  name="lastName"
                  className="input-field"
                  placeholder="Last Name"
                  value={userData.lastName}
                  onChange={postUserData}
                />
              </div>
              <div className="input-row">
                <input
                  type="text"
                  name="phone"
                  className="input-field"
                  placeholder="Phone Number"
                  value={userData.phone}
                  onChange={postUserData}
                />
                <input
                  type="email"
                  name="email"
                  className="input-field"
                  placeholder="Email ID"
                  value={userData.email}
                  onChange={postUserData}
                />
              </div>
              <input
                type="text"
                name="address"
                className="input-field full"
                placeholder="Address"
                value={userData.address}
                onChange={postUserData}
              />
              <input
                type="text"
                name="message"
                className="input-field full"
                placeholder="Enter Your Message"
                value={userData.message}
                onChange={postUserData}
              />
              <div className="checkbox-area">
                <input type="checkbox" id="agree" />
                <label htmlFor="agree">
                  I agree, you may contact me at the email address or phone number above.
                </label>
              </div>
              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;