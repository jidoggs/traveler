import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import CustomButton from "../customButtons/CustomButton";

import "react-datepicker/dist/react-datepicker.css";

function BookDestinationForm() {
  const initialState = {
    location: "",
    check: {
      in: new Date(),
      out: new Date(),
    },
    passangers: {
      adult: 0,
      children: 0,
    },
  };

  const userCountOptions = [0, 1, 2, 3, 4, 5, 6];

  const [booking, setBooking] = useState(initialState);

  const locationChangeHandler = (e) => {
    setBooking((prev) => ({ ...prev, location: e.target.value }));
  };
  const passangerAdultChangeHadler = (e) => {
    setBooking((prev) => ({
      ...prev,
      passangers: { ...prev.passangers, adult: e.target.value },
    }));
  };
  const passangerChildrenChangeHadler = (e) => {
    setBooking((prev) => ({
      ...prev,
      passangers: { ...prev.passangers, children: e.target.value },
    }));
  };

  const submitFormHandler = (e) => {
    e.preventDefault();
    console.log(booking);
  };

  return (
    <form style={{ padding: "3rem" }} onSubmit={submitFormHandler}>
      <h2 className="formTitle">Find Your Stay</h2>
      <label htmlFor="location"></label>
      <input
        type="text"
        name="location"
        id="location"
        placeholder="where do you want to go"
        onChange={locationChangeHandler}
      />
      <div className="checkout" role={"group"}>
        <ReactDatePicker
          selected={booking.check.in}
          onChange={(date) =>
            setBooking((prev) => ({
              ...prev,
              check: { ...prev.check, in: date },
            }))
          }
        />
        <ReactDatePicker
          selected={booking.check.out}
          onChange={(date) =>
            setBooking((prev) => ({
              ...prev,
              check: { ...prev.check, out: date },
            }))
          }
        />
      </div>
      <div role={"group"} className="checkout">
        <label htmlFor="adult"></label>
        <select
          name="adult"
          id="adult"
          onChange={passangerAdultChangeHadler}
          value={booking.passangers.adult}
        >
          {userCountOptions.map((count, id) => (
            <option key={id} value={count}>{`${count} Adult${
              count <= 1 ? "" : "s"
            }`}</option>
          ))}
        </select>
        <label htmlFor="kids"></label>
        <select
          name="children"
          id="children"
          onChange={passangerChildrenChangeHadler}
          value={booking.passangers.children}
        >
          {userCountOptions.map((count, id) => (
            <option key={id} value={count}>{`${count} Kid${
              count <= 1 ? "" : "s"
            }`}</option>
          ))}
        </select>
      </div>
      <CustomButton
        type={"BLUE"}
        text={<span className="iconfont icon-search"></span>}
      />
    </form>
  );
}

export default BookDestinationForm;
