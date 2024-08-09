import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/mdehtasham11')
    //         .then(response => response.json())
    //         .then(data => {
    //             console.log(data);
    //             setData(data)
    //         })
    // }, [])
    const data = useLoaderData();


    return (
        <>
        <div className='flex items-start'>
            <img src={data.avatar_url} alt="git pic" className='width' />
            <div className='text-gray-600 m-4 text-center text-3xl flex '>
                Github Followers: {data.followers}
            </div>
        </div>
        </>
    )
}

export default Github

export const GithubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/mdehtasham11')
    return response.json()
}
