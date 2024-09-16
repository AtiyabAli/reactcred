import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { deleteUser } from '../store/userSlice'

const Home = () => {
  const dispatch = useDispatch()
    const users = useSelector((state)=> state.users)

    const handleDelete = (id) => {
      dispatch(deleteUser({id: id}))
    }

  return (
    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
      
      <Link to='/create'><button style={{padding: '10px', fontSize: '25px', backgroundColor: 'yellow', borderRadius: '20px'}} className=' btn btn-success my-3'>Add new user +</button></Link>
        
        <table>
            <thead >
                <tr>
                    <th style={{padding: '30px'}}>Id</th>
                    <th  style={{padding: '30px'}}>Name</th>
                    <th  style={{padding: '30px', margin: "20px", width: "55%"}}>Email</th>
                    <th  style={{padding: '30px'}}>Action</th>
                </tr>
            </thead>
        </table>
        <body>
          {
            users.map((user, index) => {
                return (
                    <tr key={index}>
                        <td style={{padding: '30px'}}>{user.id}</td>
                        <td style={{padding: '30px'}}>{user.name}</td>
                        <td style={{padding: '30px'}}>{user.email}</td>
                        <td style={{padding: '30px'}}><Link to={`/update/${user.id}`}><button style={{backgroundColor: 'green'}}>Edit</button></Link></td>
                        <td style={{padding: '30px'}}><button style={{backgroundColor: 'red'}} onClick={()=> handleDelete(user.id)}>Delete</button></td>
                    </tr>
                )
            })
          }
        </body>

    </div>
  )
}

export default Home
