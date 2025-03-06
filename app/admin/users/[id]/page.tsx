import { notFound } from 'next/navigation';
import { getUserById } from '@/lib/actions/user.actions';

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
      <h1 className="font-bold">Update User</h1>
    </div>
  );
};

export default AdminUserUpdatePage;
