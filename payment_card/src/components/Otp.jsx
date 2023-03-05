import "./Otp.css";
import React from "react";

const Otp = () => {
  return (
    <>
      <h1>Enter OTP</h1>
      <div className="main_otp_div">
        <div className="otp_div">
          <input type="number" maxlength="1" />
          <input type="number" maxlength="1" />
          <input type="number" maxlength="1" />
          <input type="number" maxlength="1" />
        </div>
        <div className="otp_btn">
          <button>Submit</button>
        </div>
      </div>
    </>
  );
};

export default Otp;
