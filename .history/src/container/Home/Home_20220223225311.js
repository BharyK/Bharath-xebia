import React from 'react';
import EmployeeList from '../../Json/employee.json';
import EmployeeListDisplay from '../../components/Employee/Employee';

const Home = () => {
    console.log ("Home", EmployeeList)
    return (
        <div className='continaer'>
            <EmployeeListDisplay/> 
        </div>
    )
}

export default Home;
