import React from 'react';
import { Link } from 'react-router-dom'; 

// const ExpenseListItem = (props) => (
//     <div>
//         <p>{`Description: ${props.description} Amount: ${props.amount} Created On: ${props.createdAt}`}</p>
//     </div>
// );

const ExpenseListItem = ( { description, amount, createdAt, id } ) => (
    <div>
        <Link to={`/edit/${id}`}><h3>{description}</h3></Link>
        <p>{amount} - {createdAt}</p>
    </div>
);


export default ExpenseListItem;