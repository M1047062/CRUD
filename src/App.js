import React,{useState, useEffect} from 'react';
import './index.css'
import './App.css';
import UserTable from './Components/Tables/userTable';
import Button from 'react-bootstrap/Button';
import MyVerticallyCenteredModal from './Components/Form/Model';
   
  const App = () => {
    
    const [modalShow, setModalShow] = React.useState(false);
    const intitalstate={id:'',name:'',username:''}
    const[currentuser,setCurrentUser]=useState(intitalstate)
    const [edit,setEdit]=useState(1)
    const userData=[
      { id: 1, name: 'Rohith', username: 'Franklin008' },
    { id: 2, name: 'walter white', username: 'Mr.White' },
    { id: 3, name: 'Vegeta', username: 'PrinceVegeta' },
    ]
    const[users,setUsers]=useState(userData);
    const onShow = ()=>
    {
      setModalShow(true)
      setEdit(0)

    }
    const editRow=(user)=>{
      setModalShow(true)
      setEdit(1)
      setCurrentUser({id:user.id,name:user.name,username:user.username})
    }
    useEffect(()=>{
console.log("in App")
    },[])

    const addUsers=(user)=>{
      user.id=users+1
      setUsers([...users,user])
    }
    const deleteuser=(id)=>{
      setUsers(users.filter(user=>user.id!==id))
    }
    const updateUser=(id,updateuser)=>{
      setEdit(0)
      setModalShow(false);
      setUsers(users.map(user=>(user.id===id? updateuser:user)))
    }
    return (
      <div className="container">
        <h1>Employee Details</h1>
        <Button style={{marginRight:'auto'}} variant="primary" onClick={onShow}>
          Add user
        </Button>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false) }
          setedit={setEdit}
          currentuser={currentuser}
          updateuser={updateUser}
          addusers={addUsers}
         edit={edit}
        />
            <h2>View users</h2>
             <UserTable users={users} deleteuser={deleteuser} editrow={editRow} onHide={() => setModalShow(true) }/> 
      </div>
    );
    }

export default App;
