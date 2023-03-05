import "./Card.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Card = () => {
  const navigate = useNavigate();

  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    userName: "",
    expiryMonth: "",
    expiryYear: "",
    cvvInput: "",
  });

  const handleCard = (e) => {
    const field = e.target.name;
    const value = e.target.value;

    setCardDetails({ ...cardDetails, [field]: value });
  };

  // cvv div
  let payement_front = document.querySelector(".payment_card");
  let payment_back = document.querySelector(".payment_card_back");

  const handleCVVEnter = () => {
    payement_front.style.transform = "rotateY(-180deg)";
    payment_back.style.transform = "rotateY(0deg)";
  };

  const handleCVVLeave = () => {
    payement_front.style.transform = "rotateY(0deg)";
    payment_back.style.transform = "rotateY(180deg)";
  };

  return (
    <>
      <h1>Payment Card</h1>

      <div className="main_div">
        <div className="left_div">
          <div className="payment_card">
            <h1>Visa</h1>
            <div className="card_number">
              {cardDetails.cardNumber
                ? cardDetails.cardNumber
                : "**** **** **** ****"}
            </div>
            <div className="name_and_date">
              <div className="name_date">
                <span>Card Holder</span>
                <div className="user_name">
                  {cardDetails.userName ? cardDetails.userName : "MS Dhoni"}
                </div>
              </div>
              <div className="expry_date">
                <span>Expry Date</span>
                <div style={{ display: "flex", margin: "5px 0 0 0" }}>
                  <div>
                    {cardDetails.expiryMonth ? cardDetails.expiryMonth : 11}
                  </div>
                  <span>/</span>
                  <div>
                    {cardDetails.expiryYear ? cardDetails.expiryYear : 2023}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="payment_card_back">
            {/* cvv */}

            <div className="black_stripe"></div>
            <div className="enter_cvv">{cardDetails.cvvInput}</div>
            <h1>Visa</h1>
          </div>
          <div className="background_div"></div>
        </div>

        <div className="right_div">
          <h2>Payment Details</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            {/* card holder name input  */}

            <div className="hodler_name_input_div">
              {/* <span>Card Holder's Name</span> */}
              <input
                type="text"
                name="userName"
                placeholder="Enter Name"
                onChange={handleCard}
              />
            </div>
            <br />
            {/* Card number input */}

            <div className="card_number_input_div">
              {/* <span>Card Number</span> */}
              <input
                type="number"
                name="cardNumber"
                placeholder="Card Number"
                maxLength={16}
                onChange={handleCard}
              />
            </div>
            <br />

            <div className="expry_date_input">
              <div className="expiry_month">
                <span>Exp Month</span>
                <input
                  type="number"
                  name="expiryMonth"
                  placeholder="MM"
                  maxLength={2}
                  onChange={handleCard}
                />
              </div>

              <div className="expiry_year">
                <span>Exp Year</span>
                <input
                  type="number"
                  name="expiryYear"
                  placeholder="YYYY"
                  maxLength={4}
                  onChange={handleCard}
                />
              </div>

              <div
                className="cvv"
                onMouseEnter={handleCVVEnter}
                onMouseLeave={handleCVVLeave}
              >
                <span>CVV</span>
                <input
                  type="number"
                  name="cvvinput"
                  placeholder="CVV"
                  maxLength={3}
                  onChange={handleCard}
                />
              </div>
            </div>
            <div className="amount_div">
              <h2>
                Pay Aamout: ₹ <span>999</span>
              </h2>
            </div>
          </form>

          <button className="pay_now_btn" onClick={() => navigate("/otp")}>
            Pay
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
