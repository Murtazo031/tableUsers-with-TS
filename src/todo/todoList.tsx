import { ChangeEvent, useState } from "react";
import { ITodo } from "./todo";

export default function Todo() {
  const [users, setUsers] = useState<ITodo[]>([
    {
      id: 1,
      name: "Asliddin",
      role: "arobakash",
      status: false,
    },
    {
      id: 2,
      name: "Hasan",
      role: "taxi",
      status: true,
    },
    {
      id: 3,
      name: "Firuz",
      role: "raqosa",
      status: false,
    },
  ]);
  //setADdd
  const [addUser, setAddUser] = useState<ITodo>({
   id : Date.now(),
   name : "",
   role: "",
   status : false
  })

//ADD 
function addNew(newUser:ITodo){
   setUsers([...users,{
      id : newUser.id,
      name : newUser.name,
      role : newUser.role,
      status: newUser.status
   }])
}

//setEdit
const [openEdit, setOpenEdit]= useState(false)
const [selectedUser,setSelectedUser] = useState({
      id : 2,
      name : "",
      role : "",
      status: false
})

//edit
function editUser(user1:ITodo){
   setUsers(users.map((user)=>user.id===user1.id?{...user,name:user1.name,role:user1.role}:user))
   setSelectedUser({
      id : 2,
      name : "",
      role : "",
      status: false
   })
   setOpenEdit(false)
}

  // delete
function deleteUser(idx:string|number){
   setUsers(users.filter((user)=>user.id!==idx))
}

//info
function info (user:ITodo){
   alert(user.name+" " +user.role)
}

//chek
function check (id:number | string){
   setUsers(users.map((user:ITodo)=>user.id==id?{...user, status: !user.status}:user))
}


  return (
    <>
      <h1 style={{ textAlign: "center" }}>Table Users TypeScript</h1>
      <table
        style={{width:"75%",margin: "auto", borderCollapse: "collapse", textAlign:"start"}}
      >
        <thead style={{backgroundColor:"grey", color:"white"}}>
          <tr>
            <th style={{textAlign:"start", padding:"2vh"}}>Name</th>
            <th style={{textAlign:"start", padding:"2vh"}}>Role</th>
            <th style={{textAlign:"start", padding:"2vh"}}>Status</th>
            <th style={{textAlign:"start", padding:"2vh"}}>Actions</th>
          </tr>
          <tr>
            <td><input style={{borderRadius:"2vh", outline:"none", border:"none", padding:"1vh"}} placeholder="name" value={addUser.name} onChange={(e:ChangeEvent<HTMLInputElement>)=>setAddUser({...addUser, name: e.target.value})} type="text" /></td>
            <td><input style={{borderRadius:"2vh", outline:"none", border:"none", padding:"1vh"}} placeholder="role" value={addUser.role} onChange={(e:ChangeEvent<HTMLInputElement>)=>setAddUser({...addUser, role: e.target.value})} type="text" /></td>
            <td><input style={{borderRadius:"2vh", outline:"none", border:"none", padding:"1vh"}} value={addUser.status?"active":"inactive"} onChange={(e:ChangeEvent<HTMLInputElement>)=>setAddUser({...addUser, status: e.target.value=="active"?true:false})} type="text" /></td>
            <td>
      <button onClick={()=>addNew(addUser)} style={{border:"none", borderRadius:"2vh", padding:"1vh 2vh", color:"white", backgroundColor:"black" }}>ADD</button>
            </td>
          </tr>
        </thead>
        <tbody >
          {users.map((user: ITodo) => (
            <tr style={{backgroundColor:"bisque", textAlign:"start", borderBottom:"2px solid lightgrey"}} key={user.id}>
              <td style={{padding:"2vh"}}>{user.name}</td>
              <td style={{padding:"2vh"}}>{user.role}</td>
              <td style={{padding:"2vh"}}>{user.status ? "Active" : "Inactive"}</td>
              <td style={{padding:"2vh"}}>
                <div>
                  <button onClick={()=>deleteUser(user.id)}>delete</button>
                  <button onClick={()=>info(user)}>info</button>
                  <input type="checkbox" checked={user.status} onChange={()=>check(user.id)} />
                     <button onClick={()=>{
                        setOpenEdit(true)
                        setSelectedUser({id: user.id ,name: user.name,role: user.role, status: user.status})
                     }}>Edit</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {openEdit&& <div>
         <input value={selectedUser.name} onChange={(e:ChangeEvent<HTMLInputElement>)=>setSelectedUser({...selectedUser, name: e.target.value})} type="text" />
         <input value={selectedUser.role} onChange={(e: ChangeEvent<HTMLInputElement>)=>setSelectedUser({...selectedUser, role:e.target.value})} type="text" />
         <button onClick={()=>setOpenEdit(false)}>cancel</button>
         <button onClick={()=>editUser(selectedUser)}>save</button>
         </div>}
    </>
  );
}
