import React ,{useState, useEffect}from 'react'

const EditForm=(props)=>{
    
    const [user,setUser]=useState(props.currentUser)
    console.log(user)
    const handleInputChange=(event)=>{
     
        const {name,value}=event.target

        setUser({...user,[name]:value})
    }
    useEffect(()=>{
setUser(props.currentUser)
    },[props])
    return(
        <form onSubmit={event=>{
            event.preventDefault()
                props.updateuser(user.id,user)
                
        }}>
            <label>Name</label>
            <input type="text" value={user.name} name="name" onChange={handleInputChange}/>
            <label>Username</label>
            <input type="text" value={user.username}name="username" onChange={handleInputChange}/>
            <button>update User</button>
        </form>
    )

}
export default EditForm