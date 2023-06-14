"use client";
// con use client , indicamos que la interactividad esta de lado del cliente como lo es Onclick
import { useRouter } from 'next/navigation';

function Users({users}) {
  const router = useRouter()
    
  return (
    <ul className='list-group'>
        {
          users.map((user) => (
            <li key={user.id}
                className="list-group-item d-flex justify-content-between align-items-center list-group-item-action"
                onClick={() => {
                    router.push(`/users/${user.id}`)
                }}
            >

              <div>
                <h5>{user.id} {user.first_name}{user.last_name}</h5>
                <p>{user.email}</p>
                <img src={user.avatar} alt={user.email}
                  style={{borderRadius:"50%"}}
                />
              </div>
            </li>
          ))
        }
      </ul>
  )
}

export default Users