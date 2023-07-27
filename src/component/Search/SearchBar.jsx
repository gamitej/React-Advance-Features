import React, { useMemo, useState } from "react";

const SearchBar = ({ searchList = [], inputFieldFontSize = "1rem" }) => {
  const [inputValue, setInputValue] = useState("");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setIsDropdownVisible(value !== "");
  };

  // ========= filter search-list as per input  ========
  const filteredSearchList = useMemo(() => {
    return searchList?.filter((item) =>
      item.toLowerCase().includes(inputValue.toLowerCase())
    );
  }, [inputValue]);

  /**
   * JSX
   */

  return (
    <div className="relative z-[1000]">
      <input
        type="text"
        placeholder="Enter your input ..."
        className={`border border-slate-300 p-3 rounded-xl w-[20rem]`}
        style={{ fontSize: inputFieldFontSize }}
        value={inputValue}
        onChange={handleInputChange}
      />
      {isDropdownVisible && (
        <div
          className={`absolute top-[calc(100%+0.5rem)] p-2 w-[20rem] h-[13rem] overflow-auto shadow-sm border border-slate-300 rounded-xl mt-1 bg-white`}
        >
          {filteredSearchList.length > 0 &&
            filteredSearchList?.map((item, idx) => (
              <React.Fragment key={idx}>
                <div className="p-2">
                  <p>{item}</p>
                </div>
                {idx !== filteredSearchList?.length - 1 && <hr />}
              </React.Fragment>
            ))}

          {filteredSearchList.length === 0 && (
            <div className="w-full h-full flex justify-center items-center text-slate-400 font-semibold text-xl">
              No matching result
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
