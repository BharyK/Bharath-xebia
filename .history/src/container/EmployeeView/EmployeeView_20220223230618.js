import React from 'react';
import EmployeeList from '../../Json/employee.json';
import EmployeeListDisplay from '../../components/Employee/Employee';

const Home = () => {
    return (
        <div className='continaer'>
            <EmployeeListDisplay 
            EmployeeList = {EmployeeList}
            /> 
        </div>
    )
}

export default Home;
