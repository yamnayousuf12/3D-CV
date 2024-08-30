// import React from 'react';
// import Table from './Table';

// const AwardsAchievements = ({ awardsAchievements }) => {
//   const headers = ['Award & Achievement'];
//   const data = awardsAchievements.map((award) => [award]);

//   return (
//     <div>
//       <Table headers={headers} data={data} />
//     </div>
//   );
// };

// export default AwardsAchievements;


import React from 'react';

const AwardsAchievements = ({ awardsAchievements }) => {
  const awardsList = [];

  for (let i = 0; i < awardsAchievements.length; i++) {
    awardsList.push(<li key={i}>{awardsAchievements[i]}</li>);
  }

  return (
    <div>
      <h3>Awards & Achievements</h3>
      <ul>
        {awardsList}
      </ul>
    </div>
  );
};

export default AwardsAchievements;
