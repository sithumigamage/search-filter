import React, { useState } from 'react'; 
import JSONDATA from './MOCK_DATA.json';
import "./App.css";


function App() {
  const [search, setSearchTerm] = useState("");
  return (
    <div className="App">
      <input 
        type="text"  
        placeholder="Search..." 
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
      />
      {JSONDATA.filter((val) => {
        if(search === "") {
          return val;
        } else if (val.first_name.toLowerCase().includes(search.toLowerCase())) {
          return val;
        }
        return null;
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.first_name}</p> 
          </div>
        );
      })}
    </div>
  );
}

export default App;
