import React from 'react';
import Header from '@/components/layout/Header';
import Card from '@/components/common/Card';

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Card title="Card One" content="This is the content of the first card." />
        <Card title="Card Two" content="Second card content goes here." />
        <Card title="Card Three" content="Here is some content for the third card." />
      </div>
    </>
  );
};

export default HomePage;
