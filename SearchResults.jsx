// import React from 'react'
// import "./SearchResults.css";

// export const SearchResults = ({result}) => {
//   return (
    
//     <div className='search-result'
   
//     onClick={(e) => alert(`You clicked on ${result.name}`)}>
    
//     {result.name}</div>
//   );
// };


import React from "react";

export const SearchResults = ({ result }) => {
    return (
        <div className="result-item">
            <p>
                {result.type === "phone" ? "Phone: " : "Email: "}
                {result.value}
            </p>
        </div>
    );
};
