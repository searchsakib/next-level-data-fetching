'use client';

import { useEffect, useState } from 'react';
import Title from '../Title/Title';

const AllUsers = () => {
  const [allUsers, setAllUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => setAllUsers(data));
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="flex flex-col justify-center items-center h-screen">
        <span className="loading loading-bars w-[150px]"></span>
      </div>
    );
  }

  return (
    <div>
      <Title>All Users length: {allUsers.length} </Title>

      <div>
        {allUsers.map((user) => (
          <div
            key={user.id}
            className="max-w-lg p-6 m-6 rounded-md shadow-md mx-auto dark:bg-gray-900 dark:text-gray-50"
          >
            <div className="mt-6 mb-2">
              <span className="block text-xs font-medium tracki uppercase dark:text-violet-400">
                Name: {user.name}
              </span>
              <h2 className="text-xl font-semibold tracki">
                Email: {user.email}{' '}
              </h2>
            </div>
            <p className="dark:text-gray-100">Company: {user.company.name}</p>
            <p className="dark:text-gray-100">
              Slogan: {user.company.catchPhrase}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUsers;
