'use client'
import type { NextPage } from 'next'
import UserProfile from '@/components/useProfile/UserProfile'

const HomePage: NextPage = () => {
  return (
    <div className='px-6 flex-column justify-start'>
      <h1 className='mb-4'>User Profile</h1>
      <UserProfile />
    </div>
  );
};

export default HomePage;