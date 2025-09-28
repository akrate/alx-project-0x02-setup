import React from 'react';
import { type PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ userId, title, content }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
      <h2 className="text-xl font-semibold text-blue-600 mb-2">{title}</h2>
      <p className="text-gray-700 mb-4">{content}</p>
      <span className="text-sm text-gray-500">User ID: {userId}</span>
    </div>
  );
};

export default PostCard;
