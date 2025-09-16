import { useEffect, useState } from "react";

interface gitHubUserType {
    id: number,
    login : string ,
    avatar_url : string , 
    html_url : string ,
    type :string
}

const useGitHubUserFetch = (url : string) =>{
 
    const [gitHubUser , setGitHubUser]= useState<gitHubUserType[]>([]);
    const [error , setError]= useState<Error | null>(null);
    const [loading , setLoading]= useState<boolean>(true);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setGitHubUser(data))
        .catch(error => setError(error))
        .finally(() => setLoading(false));
    },[url])

    return {gitHubUser , error , loading};
}

export default useGitHubUserFetch;