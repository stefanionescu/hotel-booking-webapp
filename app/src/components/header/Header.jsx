import "./header.css";

import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
  faPerson,
  faPalette,
  faCalendarDays,
  faMagnifyingGlass
} from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
import { format } from "date-fns";
import "react-date-range/dist/styles.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/theme/default.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({type}) => {
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: "selection"
        }
    ]);

    const [openOptions, setOpenOptions] = useState(false);
    const [options, setOptions] = useState(
        {
            adults: 1,
            children: 0,
            rooms: 1
        }
    );

    const handleOption = (name, operation) => {
        setOptions(prev => {return {
            ...prev,
            [name]: operation === "+" ? options[name] + 1 : options[name] - 1,
        }});
    };

    return (
        <div className="header">

          <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
            <div className="headerList">
              <div className="headerListItem active">
                <FontAwesomeIcon icon={faBed} />
                <span>Stays</span>
              </div>

              <div className="headerListItem">
                <FontAwesomeIcon icon={faPlane} />
                <span>Flights</span>
              </div>

              <div className="headerListItem">
                <FontAwesomeIcon icon={faCar} />
                <span>Car Rentals</span>
              </div>

              <div className="headerListItem">
                <FontAwesomeIcon icon={faPalette} />
                <span>Attractions</span>
              </div>

              <div className="headerListItem">
                <FontAwesomeIcon icon={faTaxi} />
                <span>Airport Taxis</span>
              </div>
            </div>

            { type !== "list" &&
              <>
              <h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
              <p className="headerDesc">
                Get rewarded for your travels – unlock instant savings of 10% or
                more with a free Lamabooking account
              </p>
              <button className="headerBtn">Sign in / Register</button>
              <div className="headerSearch">
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faMagnifyingGlass} className="headerIcon" />
                  <input type="text" placeholder="Where are you going?" className="headerSearchInput" />
                </div>

                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
                  <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">
                    {`${format(
                      date[0].startDate,
                      "MM/dd/yyyy"
                    )} to ${format(date[0].endDate, "MM/dd/yyyy")}`}</span>
                  {openDate && <DateRange
                    editableDateInputs={true}
                    onChange={item => setDate([item.selection])}
                    moveRangeOnFirstSelection={false}
                    ranges={date}
                    className="date"
                  />}
                </div>

                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                  <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">
                  {`${options.adults} adults, ${options.children} children, ${options.rooms} rooms`}</span>
                  {
                    openOptions && <div className="options">
                    <div className="optionItem">
                      <span className="optionText">Adults</span>
                      <div className="optionCounter">
                        <button disabled={options.adults <= 1} className="optionCounterButton" onClick={() => handleOption("adults", "-")}>-</button>
                        <span className="optionCounterNumber">{options.adults}</span>
                        <button className="optionCounterButton" onClick={() => handleOption("adults", "+")}>+</button>
                      </div>
                    </div>

                    <div className="optionItem">
                      <span className="optionText">Children</span>
                      <div className="optionCounter">
                        <button disabled={options.children == 0} className="optionCounterButton" onClick={() => handleOption("children", "-")}>-</button>
                        <span className="optionCounterNumber">{options.children}</span>
                        <button className="optionCounterButton" onClick={() => handleOption("children", "+")}>+</button>
                      </div>
                    </div>

                    <div className="optionItem">
                      <span className="optionText">Rooms</span>
                      <div className="optionCounter">
                        <button disabled={options.rooms <= 1} className="optionCounterButton" onClick={() => handleOption("rooms", "-")}>-</button>
                        <span className="optionCounterNumber">{options.rooms}</span>
                        <button className="optionCounterButton" onClick={() => handleOption("rooms", "+")}>+</button>
                      </div>
                    </div>
                  </div>
                  }
                </div>


                <div className="headerSearchItem">
                  <button className="headerBtn">Search</button>
                </div>
              </div>
            </>}

          </div>
        </div>
    );
}

export default Header;
