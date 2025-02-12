import { Metadata } from 'next';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import CredentialsSigninForm from './credentials-signin-form';
import { auth } from '@/auth';
import { redirect } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Sign in',
};

const SignInPage = async (props: {
  searchParams: Promise<{callbackUrl: string}>;
}) => {
  const {callbackUrl} = await props.searchParams;
  const session = await auth();

  if (session) {
    return redirect( callbackUrl || '/');
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <Card>
        <CardHeader className="space-y-4">
          <Link href="/" className="flex-center">
            <Image src="/images/logo.svg" alt="Logo" width={100} height={100} />
          </Link>
          <CardTitle className="text-center">Sign in</CardTitle>
          <CardDescription className="text-center">
            Sign in to your account
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <CredentialsSigninForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default SignInPage;
