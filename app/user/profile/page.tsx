import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';
import ProfileForm from './profile-form';

export const metadata = {
  title: 'Profile',
};

const Profile = async () => {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <div className="max-w-md mx-auto space-y-4">
        <h2 className="font-bold">Profile</h2>
        {session?.user?.name}
        <ProfileForm />
      </div>
    </SessionProvider>
  );
};

export default Profile;
