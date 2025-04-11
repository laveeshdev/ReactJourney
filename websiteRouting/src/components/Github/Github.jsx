import { useEffect, useState } from "react";
import React  from "react";
import { useLoaderData } from "react-router-dom";
function Github() {
    const data = useLoaderData() ; 
    // const [data , setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/laveeshdev')
    //     .then(responce => responce.json())
    //     .then(rec => {
    //         console.log(rec)
    //         setData(rec) ; 
    //     })
    // } , [])
    return (
        <>
        <div className="text-center m-4 bg-gray-600 p-4 text-3xl">
            Github followers : {data.followers}
            <img className="text-center" src={data.avatar_url}
            width={200} height={200}></img>
        </div>
        </>
    )
    
}
export const githubInfoFetch = async () => {
    const responce = await  fetch('https://api.github.com/users/laveeshdev')
    return responce.json() ; 
}

export default Github