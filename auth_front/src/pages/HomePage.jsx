import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '@/context/AuthContext';

const HomePage = () => {
  const { user, authTokens, logoutUser } = useContext(AuthContext);
  const [notes, setNotes] = useState([]);

  const getNotes = async () => {
    const response = await fetch('http://localhost:8000/notes/list/', {
      headers: { Authorization: `JWT ${authTokens.access}` },
    });
    const data = await response.json();

    if (response.status === 200){
      setNotes(data);
    }else if( response.statusText === 'Unauthorized'){
      logoutUser()
    }
  };

  useEffect(() => {
    getNotes();
  }
  , [user]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
      <div className="text-center">

        <img className="w-64 h-64 mx-auto my-2" src="shield.svg" alt="logo" />
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Welcome
          <span className='text-blue-700 dark:text-blue-500 mx-3'>
            {user.username}
          </span>
          to Auth System
        </h1>
        <p className="mt-3 text-lg text-gray-700 dark:text-gray-400">
          You are logged in to the home page!
        </p>

        {/* List all notes */}
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mt-6">
          Your notes:
        </h1>
        <div className="flex flex-wrap justify-center mt-1">
          {notes.map((note) => (
            <div className="max-w-sm rounded overflow-hidden shadow-lg m-4 dark:bg-gray-800" key={note.id}>
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 dark:text-white ">{note.title}</div>
                <p className="text-gray-300 text-base">{note.content}</p>
              </div>
              <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#Category</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
