import React, { useEffect, useState } from 'react'

function Github() {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/mdehtasham11')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data)
            })
    }, [])
    return (
        <>
            <div className='text-gray-600 m-4 text-center bg-orange-500 text-3xl'>
                Github Followers: {data.followers}
            </div>
            <img src={data.avatar_url} alt="git pic" className='width' />
        </>
    )
}

export default Github
