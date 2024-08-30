// import React, { useState } from "react";
// import { FaSearch } from "react-icons/fa";
// import "./SearchBar.css";

// export const SearchBar = ({setResults}) => {
//     const [input, setInput] = useState("");
//     const fetchDate = (value) => {fetch
//         ("https://jsonplaceholder.typicode.com/users")
//         .then((response) => response.json())
//         .then((json) => { 
//             const results = json.filter((user) => {
//                 return (
//                     value &&
//                     user && 
//                     user.name && 
//                     user.name.toLowerCase().includes(value));
//             });
//             setResults(results);
//         });

//     };

     
    
//         const handleChange = (value) => {
//             setInput(value);
//             fetchDate(value);

//         };
//     return (
//     <div className="input-wrapper"> 
//     <FaSearch id="search-icon"/> 
//     <input placeholder="Type to search..." 
//     value={input} 
//     onChange={(e) => handleChange(e.target.value)}
//     />
//     </div>
//     );

// };

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import data from "../data.json";  // Corrected path
import "./SearchBar.css";

export const SearchBar = ({ setResults }) => {
  const [input, setInput] = useState("");

  const fetchDate = (value) => {
    const { contact } = data;
    const results = [];

    if (value && contact.phone.includes(value)) {
      results.push({ type: "phone", value: contact.phone });
    }

    contact.emails.forEach((email) => {
      if (value && email.toLowerCase().includes(value.toLowerCase())) {
        results.push({ type: "email", value: email });
      }
    });

    setResults(results);
  };

  const handleChange = (value) => {
    setInput(value);
    fetchDate(value);
  };

  return (
    <div className="input-wrapper">
      <FaSearch id="search-icon" />
      <input
        placeholder={data.searchBar.input.placeholder}
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
