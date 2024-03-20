'use client';

import { auth } from '@/app/constant';
import Link from 'next/link';
import AuthWrapper from '@/app/components/wrappers/auth/AuthWrapper';
import { FormCheckbox, FormInput, FormSubmitBtn } from '@/app/components';
import { registerAction } from '@/app/actions/registerAction';

const SignUpPage = () => {
  async function clientAction(formData: FormData) {
    try {
      // pass server action here
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <AuthWrapper>
      <div>
        <h1 className="font-exo2 text-2xl mb-10">{auth.register.title}</h1>
        <form action={clientAction} className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4">
            <FormInput
              name="firstName"
              type="text"
              label="First Name (*)"
              placeholder="First Name"
              //   required
            />
            <FormInput
              name="lastName"
              type="text"
              label="Last Name (*)"
              placeholder="Last Name"
              //   required
            />
          </div>

          <FormInput
            name="username"
            type="text"
            label="Username (*)"
            placeholder="Username"
            // required
          />
          <FormInput
            name="email"
            type="email"
            label="Email (*)"
            placeholder="Email"
            // required
          />
          <FormInput
            name="password"
            type="password"
            label="Password (*)"
            placeholder="Password"
            // required
          />
          <FormInput
            name="passwordConfirmation"
            type="password"
            label="Repeat Password (*)"
            placeholder="Repeat Password"
            // required
          />

          <p className="font-light text-[15px]">
            Evoke Estate may keep me informed with personalized emails about
            products and services. See our{' '}
            <Link href={'/privacy'} className="font-medium">
              Privacy Policy
            </Link>{' '}
            for more details.
          </p>

          <div className="py-5">
            <FormCheckbox
              label="I have read and accept the Terms and Conditions."
              name="termsAndConditions"
            />
          </div>

          <FormSubmitBtn label="Create Account" islLoading={false} />
        </form>
      </div>

      <p className="font-light text-sm auth-py">
        Are you a member?{' '}
        <Link href="/sign-in" className="font-medium underline">
          Sign In now
        </Link>
      </p>
    </AuthWrapper>
  );
};
export default SignUpPage;
