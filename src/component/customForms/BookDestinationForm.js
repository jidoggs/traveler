import React, { useState } from "react";
import ReactDatePicker from "react-datepicker";
import CustomButton from "../customButtons/CustomButton";

import "react-datepicker/dist/react-datepicker.css";
import PlacesAutocomplete from "./component/PlacesAutocomplete";
import usePlacesAutocomplete from "use-places-autocomplete";
// import axios from "axios";
import Calendar from "../customIcons/Calendar";
import Location from "../customIcons/Location";
import Family from "../customIcons/Family";

function BookDestinationForm() {
  const initialState = {
    location: "",
    check: {
      in: "",
      out: "",
    },
    passangers: {
      adult: 0,
      children: 0,
    },
  };

  const userCountOptions = [0, 1, 2, 3, 4, 5, 6];

  const [booking, setBooking] = useState(initialState);

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
  } = usePlacesAutocomplete();

  const handleSelect = (val) => {
    setValue(val, false);
    setBooking((prev) => ({ ...prev, location: val }));
    // diapatch(inputingSearch(val));
    // navigate(`/search-result`);
  };
  const handleInput = (e) => {
    setValue(e.target.value);
  };

  // const [rapid, setrapid] = useState([]);

  // var options = {
  //   // method: "GET",
  //   // url: "https://mimmofranco.herokuapp.com/https://travel-advisor.p.rapidapi.com/locations/v2/auto-complete",
  //   // params: { query: "eiffel tower", lang: "en_US", units: "km" },
  //   // headers: {
  //   //   "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
  //   //   'x-rapidapi-key': '18400156e4mshc1f3c9773a6e009p185fd6jsn26c4eddf1225'
  //   // },
  // };
  // useEffect(() => {
  //   axios
  //     .request("options")
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err));
  // }, []);// eslint-disable-line

  // const locationChangeHandler = (e) => {
  //   setBooking((prev) => ({ ...prev, location: e.target.value }));
  // };
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

  const props = {
    type: "text",
    name: "location",
    id: "location",
    placeholder: "where do you want to go",
  };

  return (
    <form
      // style={{ padding: "3rem" }}
      onSubmit={submitFormHandler}
    >
      <h2 className="formTitle">Find Your Stay</h2>
      <label htmlFor="location"></label>
      {/* <input
        type="text"
        name="location"
        id="location"
        placeholder="where do you want to go"
        onChange={locationChangeHandler}
      /> */}
      <div className="searchInput">
        <Location className="formIcon" />
        <PlacesAutocomplete
          moreProps={props}
          handleSelect={handleSelect}
          handleInput={handleInput}
          status={status}
          data={data}
          value={value}
          ready={ready}
        />
      </div>
      <div className="checkout" role={"group"}>
        <Calendar className="formIcon" />
        <ReactDatePicker
          selected={booking.check.in}
          onChange={(date) =>
            setBooking((prev) => ({
              ...prev,
              check: { ...prev.check, in: date },
            }))
          }
          placeholderText="Check-in"
        />
        <ReactDatePicker
          selected={booking.check.out}
          placeholderText="Check-out"
          onChange={(date) =>
            setBooking((prev) => ({
              ...prev,
              check: { ...prev.check, out: date },
            }))
          }
        />
      </div>
      <div role={"group"} className="checkout">
        <Family className="formIcon" />
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
