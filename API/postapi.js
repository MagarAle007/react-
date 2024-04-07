import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Postapi = () => {
    const [data, setData] = useState()

    //get the data & display 
    async function getApi() {
        try {
            const response = await ('https://jsonplaceholder.typicode.com/posts')
            console.log(response.data)
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    //create 
    async function postApi() {
        try {
            const response = await axios.post('https://jsonplaceholder.typicode.com/posts',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        title: 'ram',
                        body: 'thapa',
                        user: '1',
                    })
                })
            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    //update using put
    async function updateApi() {
        try {
            const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1',
                {
                    method: 'PUT',
                    body: JSON.stringify({
                        title: 'SANJEEV',
                        body: 'ALE',
                        user: '1',
                    })

                    , headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },

                })

            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    //update using patch
    async function updateApipatch() {
        try {
            const response = await axios.patch('https://jsonplaceholder.typicode.com/posts/1',
                {
                    method: 'patch',
                    body: JSON.stringify({
                        title: 'ale',
                    })

                    , headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },

                })

            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    //delete 
    async function deleteApi() {
        try {
            const response = await axios.delete('https://jsonplaceholder.typicode.com/posts/1',
                {
                    method: 'delete',
                    body: JSON.stringify({
                        title: 'ale',
                    })

                    , headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },

                })

            console.log(response)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getApi();
        // axios('https://jsonplaceholder.typicode.com/posts')
        //     .then(function (response) {
        //         setData(response.data)
        //     })
        //     .catch(function (error) {
        //         console.log(error)
        //     })
        //     .finally(function () {

        //     })
    }, [])
    return (
        <div>
            <button onClick={postApi}>Create</button>
            <button onClick={updateApi}>Update</button>
            <button onClick={updateApipatch}>Update patch</button>
            <button onClick={deleteApi}>Delete</button>


            {

                data?.map((post) => {
                    return (
                        <div key={post.id}>
                            <h3>{post.title}</h3>
                            <h5>{post.title}</h5>
                        </div>
                    )
                })

            }
        </div>
    )
}

export default Postapi