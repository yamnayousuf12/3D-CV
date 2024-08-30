
import React from 'react';

const CareerSummary = ({ data }) => (
   
    <div className="career-summary">
        <h2>Career Summary</h2>
        <table>
            <thead>
                <tr>
                    <th>Organization</th>
                    <th>Position</th>
                    <th>From</th>
                    <th>To</th>
                </tr>
            </thead>
            <tbody>
                {data.map((item, index) => (
                    <tr key={index}>
                        <td>{item.organization}</td>
                        <td>{item.position}</td>
                        <td>{item.from}</td>
                        <td>{item.to}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    );

export default CareerSummary;
