import React from 'react';
import Header from '@/components/layout/Header';
import Button from '@/components/common/Button';

const AboutPage = () => {
  return (
    <>
      <Header />
      <div className="p-8 space-y-6">
        <h1 className="text-3xl font-bold text-green-600">About This Project</h1>

        <div className="space-x-4">
          <Button label="Small & Rounded-sm" size="small" shape="rounded-sm" />
          <Button label="Medium & Rounded-md" size="medium" shape="rounded-md" />
          <Button label="Large & Rounded-full" size="large" shape="rounded-full" />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
