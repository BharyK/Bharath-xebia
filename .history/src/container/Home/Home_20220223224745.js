import React from 'react';
import EmployeeList from '../../Json/employee.json';

const Home = () => {
    return (
        <div className='continaer'>
            {EmployeeList.name}
        </div>
    )
}

export default Home;
