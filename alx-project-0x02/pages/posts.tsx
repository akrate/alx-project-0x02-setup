import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { type PostProps } from '@/interfaces';

const PostsPage = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=9')
      .then((res) => res.json())
      .then((data) => {
        const formattedPosts: PostProps[] = data.map((post: any) => ({
          userId: post.userId,
          title: post.title,
          content: post.body,
        }));
        setPosts(formattedPosts);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6 text-blue-800">All Posts</h1>
        {loading ? (
          <p className="text-gray-500">Loading posts...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {posts.map((post, index) => (
              <PostCard
                key={index}
                userId={post.userId}
                title={post.title}
                content={post.content}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default PostsPage;
