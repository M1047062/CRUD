import React ,{useState}from 'react'

const AddForm=(props)=>{
    
    const intitalstate={id:'',name:'',username:''}
    const [user,setUser]=useState(intitalstate)
    const handleInputChange=(event)=>{
        console.log(event)
        const {name,value}=event.target

        setUser({...user,[name]:value})
    }
    return(
        <form onSubmit={event=>{
            console.log(event)
            event.preventDefault()
            if(!user.name||!user.username)
                return
                props.addusers(user)
                setUser(intitalstate)
        }}>
            <label>Name</label>
            <input type="text" value={user.name} name="name" onChange={handleInputChange}/>
            <label>Username</label>
            <input type="text" value={user.username}name="username" onChange={handleInputChange}/>
            <button>Add User</button>
        </form>
    )

}
export default AddForm