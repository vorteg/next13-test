import Users from '@/components/Users'

async function fetchUsers(){
 const res = await fetch("https://reqres.in/api/users")
 const data = await res.json()
 //console.log(data) aqui se mostraran desde la consola del server
 return data.data
}

async function IndexPage() {
  const users = await fetchUsers()
  //console.log(users)
  return (
    <div>
      <Users users={users}/>
      {/* <div>
        {JSON.stringify(users)} esta es una forma de mostrar los datos pero no la mas elegante
      </div> */}
      

    </div>
  )
}

export default IndexPage