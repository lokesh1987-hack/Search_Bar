import { useRef, useState } from "react";

function SearchBar() {
  const [text, setText] = useState("");
  const fakeData = ["red", "yellow", "white", "greeen", "blue", "voilet"];
  const [searchvalue, setsearchValue] = useState();

  const inputData = useRef();

  const handler = (data) => {
    // let intext = inputData.current.value;
    setText(data);
    const result = fakeData.filter((item) => {
      if (item.includes(data)) {
        return true;
      }
    });
    data === "" ? setsearchValue([]) : setsearchValue(result);
  };

  const makeStyle = {
    searchstyle: {
      border: "2px",
      display: "flex",
      paddingLeft: "18px",
      padding: "4px",
      marginBlockEnd: "0em",
      marginInlineStart: "0px",
      marginInlineEnd: "0px",
      width: "172px",
      margin: "1px"
    }
  };

  return (
    <div>
      <h1>Search Bar</h1>
      <div
        style={{
          display: "inline-block",
          background: "light",
          border: "solid 1px"
        }}
      >
        <input
          type="text"
          value={text}
          ref={inputData}
          onChange={(e) => {
            handler(e.target.value);
          }}
        />
        <div>
          {searchvalue?.map((item) => {
            return <p style={makeStyle.searchstyle}>{item}</p>;
          })}
        </div>
      </div>
    </div>
  );
}
export default SearchBar;
