import React, { useState } from "react";

const arr = [
  "amitej",
  "bag",
  "cat",
  "dog",
  "elephant",
  "frog",
  "girl",
  "hello",
  "irish",
];

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    // Show the dropdown only if the input value is not empty
    setIsDropdownVisible(value !== "");
  };

  return (
    <div className="relative z-[1000]">
      <input
        type="text"
        placeholder="Enter your input ..."
        className={`border border-slate-300 p-3 rounded-xl w-[20rem]`}
        value={inputValue}
        onChange={handleInputChange}
      />
      {isDropdownVisible && (
        <div
          className={`absolute top-[calc(100%+0.5rem)] p-2 w-[20rem] h-[13rem] overflow-auto shadow-sm border border-slate-300 rounded-xl mt-1 bg-white`}
        >
          {arr.map((item, idx) => (
            <React.Fragment key={idx}>
              <div className="p-2">
                <p>{item}</p>
              </div>
              {idx !== arr.length - 1 && <hr />}
            </React.Fragment>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
