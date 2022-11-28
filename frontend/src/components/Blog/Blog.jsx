import React, {useEffect, useState} from 'react';
import axios from "axios";

const Blog = () => {
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        axios.get('http://localhost:3001/api/posts')
            .then((response) => {
                setPosts(response.data);
            }, (error) => {
                console.log(error);
            },);
    }, []);
    return (
        <div className="flex">
            {posts && posts.map(post => (
                <div className="max-w-sm p-6 m-5 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{post.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{post.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Blog;