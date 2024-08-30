// import React from "react"
// import "./SearchResult.css";
// import { SearchResults } from "./SearchResults";

// export const SearchResult = ({ results }) => {
//     return (
//         <div className="results-list">
//             {
//                 results.map((result, id) => {
//                     return <SearchResults result={result} key={id} />;
//                 })
//             }
//         </div>
//     );
// };

import React from "react";
import "./SearchResult.css";
import { SearchResults } from "./SearchResults";

export const SearchResult = ({ results }) => {
    return (
        <div className="results-list">
            {results.map((result, id) => (
                <SearchResults result={result} key={id} />
            ))}
        </div>
    );
};
