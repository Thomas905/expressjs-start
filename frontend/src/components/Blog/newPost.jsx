import React, {useEffect, useState} from 'react';
import axios from "axios";

const NewPost = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/api/posts', {
            title,
            description
        })
        .then((response) => {
            console.log(`${response} Post créé avec succès`);
        }, (error) => {
            console.log(`${error} Erreur lors de la création du post`);
        },);
        setTitle('');
        setDescription('');
    }
    return (
        <div>
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={onSubmit}>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Titre</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={title} onChange={e => setTitle(e.target.value)} />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Description</label>
                    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"  value={description} onChange={e => setDescription(e.target.value)} />
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Enregistrer</button>
                </div>
            </form>
        </div>
    );
};

export default NewPost;