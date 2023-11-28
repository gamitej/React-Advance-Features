import React, { useState } from "react";

const Head = ({
  villType = {},
  handleType = () => {},
  setSearchText = () => {},
}) => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter") setSearchText(searchValue);
  };

  /**
   * JSX
   */
  return (
    <div className="flex flex-col gap-3 p-3 mt-8">
      {/*  SEARCH */}
      <div className="ml-[1rem]">
        <input
          type="text"
          value={searchValue}
          placeholder="Search..."
          onKeyDown={handleSearchSubmit}
          className="border border-black py-2 px-3 rounded-md"
          onChange={({ target }) => setSearchValue(target.value)}
        />
      </div>
      {/*  TYPE BTN GROUPS */}
      <div className="flex w-[18rem] justify-around  items-center h-[5rem]">
        <button
          className={`${
            villType.poor ? "bg-red-100" : "border-2 border-red-300 bg-white"
          } p-2 w-[7rem] rounded-md h-[3rem]`}
          onClick={() => handleType("poor")}
        >
          poor
        </button>
        <button
          className={`${
            villType.rich
              ? "bg-green-100"
              : "border-2 border-green-300 bg-white"
          } p-2 w-[7rem] rounded-md h-[3rem]`}
          onClick={() => handleType("rich")}
        >
          rich
        </button>
      </div>
    </div>
  );
};

export default Head;
