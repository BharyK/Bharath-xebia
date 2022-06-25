import React from 'react';
import EmployeeList from '../../Json/employee.json';

const Home = () => {
    console.log ("Home", EmployeeList)
    return (
        <div className='continaer'>
            <h1>{EmployeeList.employee.name}</h1>
        </div>
    )
}

export default Home;
