import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Demo = () => {

    const [data, setData] = useState()

    async function postAPi() {

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            console.log(response.data)
            setData(response.data)
        }
        catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        postAPi();
    }, [])
    return (
        <div>
            {
                data?.map((post) => {
                    return (
                        <div key={post.id}>
                            <h1>{post.title}</h1>
                            <h2>{post.body}</h2>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Demo
