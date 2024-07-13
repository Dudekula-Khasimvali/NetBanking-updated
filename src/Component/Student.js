import React from 'react';

const Student = () => {

   let students=[
    {name:"Vinod",age:22},
    {name:"Vinodkumar",age:23}
];


let result=students.map( (list,index) => (
    
    <tr key={index}>
        <td>{list.name}</td>
        <td>{list.age}</td>
    </tr>
));
    return (
        <table border="2">
             <thead>
            <tr>
                <th>Name</th>
                <th>age</th>
            </tr>
            </thead>
            <tbody>
           
                {result}

            </tbody>
        </table>
    );
};

export default Student;
