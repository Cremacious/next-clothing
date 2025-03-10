import { notFound } from 'next/navigation';
import { getUserById } from '@/lib/actions/user.actions';
import UpdateUserForm from './update-user-form';

export const metadata = {
  title: 'Update User',
};

const AdminUserUpdatePage = async (props: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await props.params;
  const user = await getUserById(id);
  if (!user) {
    return notFound();
  }

  return (
    <div className="mx-auto max-w-lg space-y-8">
      <h1 className="font-bold">Update Users</h1>
      <UpdateUserForm user={user} />
    </div>
  );
};

export default AdminUserUpdatePage;
