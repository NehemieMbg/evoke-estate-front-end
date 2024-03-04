'use client';

import { FormInput, FormSubmitBtn } from '@/app/components';
import { user } from '@/app/constant/index';

const UpdatePassword = () => {
  const clientAction = async (formData: FormData) => {
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  return (
    <form
      action={clientAction}
      className="grid xl:grid-cols-3 gap-x-20 gap-y-6"
    >
      <h2 className="text-lg font-medium mb-4">Change password</h2>

      <div className="flex flex-col gap-8 xl:col-start-1 xl:col-end-3">
        <FormInput
          label="Current Password (*)"
          name="password"
          type="password"
          placeholder={'Current Password'}
        />

        <div className="grid sm:grid-cols-2 gap-6">
          <FormInput
            label="New Password (*)"
            name="newPassword"
            type="password"
            placeholder={'New Password'}
          />
          <FormInput
            label="Confirm New Password (*)"
            name="confirmPassword"
            type="password"
            placeholder={'Confirm New Password'}
          />
        </div>
      </div>

      <div className="">
        <FormSubmitBtn
          label="Update Password"
          type="submit"
          islLoading={false}
        />
        <p className="font-light mt-6">
          Remember to save your changes before exiting this page to ensure all
          edits are securely applied.
        </p>
      </div>
    </form>
  );
};
export default UpdatePassword;
