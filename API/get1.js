import React, { useEffect, useState, Fragment } from 'react'

const Apitest = () => {
    const [data, setData] = useState();

    async function getApi() {
        try {
            const response = await ('https://jsonplaceholder.typicode.com/posts')
            setData(response.data)
        }
        catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getApi();
    }, [])
    return (
        <div>
            <h1>I love myself</h1>
            {
                data && data.map((post) => {
                    return (
                        <Fragment key={post.id}>
                            <h3>{post.title}</h3>
                            <h3>{post.body}</h3>
                        </Fragment>
                    )

                })

            }
        </div>
    )
}

export default Apitest
