// Example component using the store
import React from 'react'
import useUserStore from '@/store/useUserStore'

const UserProfile: React.FC = () => {
  const { user, setUser } = useUserStore()

  return (
    <div>
      {user ? <p>Welcome, {user.name}!</p> : <p>Please log in.</p>}
      <button
        className='bg-primary_background_strong rounded-[4px] text-white px-2 py-1 hover:bg-primary_background_strong_hover '
        onClick={() => setUser({ name: 'Jane Doe' })}
      >
        Log In
      </button>
    </div>
  )
}

export default UserProfile
