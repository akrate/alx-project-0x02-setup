import React from 'react';
import { type UserProps } from '@/interfaces';

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-xl transition">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
      <p className="text-gray-600 mb-1">
        <strong>Email:</strong> {email}
      </p>
      <p className="text-gray-600">
        <strong>Address:</strong> {address.street}, {address.city}
      </p>
    </div>
  );
};

export default UserCard;
