import React from 'react';
import EmployeeList from '../../Json/employee.json';

const Home = () => {
    console.log ("Home", EmployeeList)
    return (
        <div className='continaer'>
            React jS
            {EmployeeList.employee.name}
        </div>
    )
}

export default Home;
