import React from 'react'; 
import Data from '../../data/dataStudent';

const DetailStudent = () => { 
  return ( 
    <div 
      style={{ 
        display: 'flex', 
        justifyContent: 'Center', 
        alignItems: 'Right', 
        width: '78.6%',
        marginLeft: '21.3%',
        paddingTop: '50px'
      }} 
    > 
     <div>
      <h2>Student Details</h2>
      <p>ID: {id}</p>
      <img src={avatar} alt="Avatar" />
      <p>First Name: {first_name}</p>
      <p>Last Name: {last_ame}</p>
      <p>Birth: {birth}</p>
      <p>Gender: {gender}</p>
      <p>Major: {major}</p>
    </div> 
    </div> 
  ); 
}; 
  
export default DetailStudent;