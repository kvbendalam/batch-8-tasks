import React, { useEffect } from 'react'
import axios from 'axios'

function AxiosDemo() {
    const [post, setPost] = React.useState(null);


    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1').then((res) => {
            setPost(res.data)
        })
    }, [])

    function createPost() {
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            title: "Hello World!",
            body: "This is a new post."
        }).then((resp) => {
            setPost(resp.data)
        })
    }

    function updatePost() {
        axios
            .put('https://jsonplaceholder.typicode.com/posts/1', {
                title: "Hello World!",
                body: "This is an updated post."
            })
            .then((response) => {
                setPost(response.data);
            });
    }

    function deletePost() {
        axios
            .delete('https://jsonplaceholder.typicode.com/posts/1')
            .then(() => {
                alert("Post deleted!");
                setPost(null)
            });
    }


    if (!post) return "No post!"

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <button onClick={createPost}>Create Post</button>
            <button onClick={updatePost}>Update Post</button>
            <button onClick={deletePost}>Delete Post</button>
        </div>
    )
}

export default AxiosDemo