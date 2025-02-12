'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { signInWithCredentials } from '@/lib/actions/user.actions';
import { useFormStatus } from 'react-dom';
import { useActionState } from 'react';
import { useSearchParams } from 'next/navigation';

const CredentialsSigninForm = () => {
  const [data, action] = useActionState(signInWithCredentials, {
    success: false,
    message: '',
  });

  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get('callbackUrl') || '/';

  const SignInButton = () => {
    const { pending } = useFormStatus();

    return (
      <Button variant="default" disabled={pending} className="w-full">
        {pending ? 'Signing in...' : 'Sign In'}
      </Button>
    );
  };

  return (
    <form action={action} className="">
      <input name="callbackUrl" value={callbackUrl} className="hidden" />
      <div className="space-y-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            name="password"
            autoComplete="password"
            required
          />
        </div>
        <SignInButton />

        {data && !data.success && (
          <div className="text-center text-red-500">{data.message}</div>
        )}
        <div className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{' '}
          <Link href="/sign-up" target="_self" className="link">
            Sign Up
          </Link>
        </div>
      </div>
    </form>
  );
};

export default CredentialsSigninForm;
