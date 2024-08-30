// import React from 'react';

// const Header = ({ data }) => (
//     <div className="header">
//         <h1>{data.name}</h1>
//         <p>
//             <img src="image/images.jpg" alt="Saad Ahsan Baig" className="profile-img" />
//             <strong>Contact:</strong> {data.contact} | <a href={`mailto:${data.email}`}>{data.email}</a>
//         </p>
//         <p>{data.address}</p>
//         <p>{data.tags}</p>

//     </div>
// );

// export default Header;
const Header = ({ data }) => (
    <div className="header">
        <h1>{data.name}</h1>
        <p>
            <img src="image/images.jpg" alt="Saad Ahsan Baig" className="profile-img" />
            <strong>Contact:</strong> {data.contact} | <a href={`mailto:${data.email}`}>{data.email}</a>
        </p>
        <p>{data.address}</p>
        <p>
            {data.tags && data.tags.map((tag, index) => (
                <span key={index}>{tag}{index < data.tags.length - 1 ? ', ' : ''}</span>
            ))}
        </p>
    </div>
);

export default Header;