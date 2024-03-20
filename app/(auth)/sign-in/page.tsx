'use client';

import { FormInput, FormSubmitBtn } from '@/app/components';
import AuthWrapper from '@/app/components/wrappers/auth/AuthWrapper';
import { auth } from '@/app/constant';
import signIn from '@/utils/auth/signIn';
import Link from 'next/link';

const SignInPage = () => {
  async function clientAction(formData: FormData) {
    const username = formData.get('username') as string;
    const password = formData.get('password') as string;

    try {
      await signIn({ username, password });
    } catch (error) {}
  }

  return (
    <AuthWrapper>
      <div>
        <h1 className="font-exo2 text-2xl mb-10">{auth.signIn.title}</h1>
        <form action={clientAction} className="flex flex-col gap-6">
          <FormInput
            name="username"
            type="text"
            label="Email (*)"
            placeholder="Email or Username"
            // required
          />

          <FormInput
            name="password"
            type="password"
            label="Password (*)"
            placeholder="Password"
            // required
          />

          <div className="flex flex-col gap-4 w-full">
            <FormSubmitBtn label="Sign In" islLoading={false} />
            <Link
              href="/forgot-password"
              className="text-sm font-normal underline text-end"
            >
              Forgot your password ?
            </Link>
          </div>
        </form>
      </div>

      <p className="font-light text-sm auth-py">
        Not a member yet?{' '}
        <Link href="/sign-up" className="font-medium underline">
          Register now
        </Link>
      </p>
    </AuthWrapper>
  );
};
export default SignInPage;
