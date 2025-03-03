import { Button } from '@/components/ui/button';
import Link from 'next/link';

export const metadata = {
  title: 'Unauthorized Access',
};

const UnauthorizedPage = () => {
  return (
    <div className="container mx-auto flex h-[calc(100vh-200px)] flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">Unauthorized Access</h1>
      <p className="text-muted-foreground">
        You do not have permission to access this page
      </p>
      <Button asChild>
        <Link href="/">Return</Link>
      </Button>
    </div>
  );
};

export default UnauthorizedPage;
