import React from 'react';

const Profile = ({ data }) => (
    <div className="profile">
        <h2>Profile</h2>
        <ul>
            {data.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>
);

export default Profile;
