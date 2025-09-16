// import { useEffect } from "react"
import useGitHubUserFetch from "./Hook/useGitHubUserFetch.js"

export default function App() {
  // useEffect(()=>{
  //   fetch("https://api.github.com/users")
  //   .then(res => res.json())
  //   .then(data =>{
  //     console.log(data)
  //   })
  // },[])

  const {gitHubUser , error , loading} = useGitHubUserFetch("https://api.github.com/users");

  if(loading){
    return <p>Loading....</p>
  }

  if(error){
    return <p>Error: {error.message}</p>
  }

  return (
    <div>
      <h1>Github User Profile</h1>
      {gitHubUser.map((User) => (
        <div>
          <h5>{User.id}</h5>
          <p>{User.login}</p>
          <p>{User.html_url}</p>
          <p>{User.type}</p>
          <img src={User.avatar_url} />
        </div>
      ))}
    </div>
  )
}
