import React from 'react';

const EmployeeListDisplay = ({EmployeeList}) => {
    console.log ("EmployeeList", EmployeeList)
    return (
        <div className='continaer'>
            {EmployeeList.employee.map((employee, index) => {
                return (
                    <div key = {`SD`,index}>
                        <h1>{employee.name}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default EmployeeListDisplay;
