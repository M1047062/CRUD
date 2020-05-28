import React from 'react'
import Button from 'react-bootstrap/Button';
const userTable=(props)=>(
    <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>username</th>
                <th>actions</th>
            </tr>
        </thead>
    
    <tbody>
        {props.users.length>0?
        (props.users.map(user=>(
        <tr key={user.id}>
            
            <td>{user.name}</td>
            <td> {user.username}</td>
            <td>
            <Button variant="success"onClick={()=>props.editrow(user)}>Edit</Button>{' '}
            <Button variant="danger"onClick={()=>props.deleteuser(user.id)}>Delete</Button>{' '}
            
            </td>
            </tr>
            ))
            ):(
                <tr>
                    <td colSpan={3}>No Users</td>
                </tr>
            )

        
        }
           
        
    </tbody>
    </table>
)
export default userTable;