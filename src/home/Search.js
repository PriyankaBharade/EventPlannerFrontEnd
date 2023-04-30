import React from "react";

const Search = ({onKeyChange}) => {
  const search_array = [
    { id: 1, value: "San Francisco" },
    { id: 2, value: "New York" },
    { id: 3, value: "Seattle" },
    { id: 4, value: "Los Angeles" },
    { id: 5, value: "San Francisco" },
  ];
  return (
    <div className="container-fluid header bg-white p-0">
      <div className="row g-0 align-items-center justify-content-center flex-column-reverse 
      flex-md-row pt-120 pb-120">
        <div className="col-md-6  pt-120">
          <h2 className="header-title text-center">Plan a event</h2>
          <input
          onChange={(event)=>{onKeyChange(event.target.value)}}
            className="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Type to search..."
          />
          <datalist id="datalistOptions">
            {search_array.map((item) => (
              <option value={item.value}></option>
            ))}
          </datalist>
        </div>
      </div>
    </div>
  );
};

export default Search;
