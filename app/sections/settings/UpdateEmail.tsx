'use client';

import { FormInput, FormSubmitBtn } from '@/app/components';
import { user } from '@/app/constant/index';

const UpdateEmail = () => {
  const clientAction = async (formData: FormData) => {
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  return (
    <form
      action={clientAction}
      className="grid xl:grid-cols-3 gap-x-20 gap-y-6"
    >
      <h2 className="text-lg font-medium mb-4">Change email</h2>

      <div className="flex flex-col gap-8 xl:col-start-1 xl:col-end-3">
        <FormInput
          label="CURRENT E-MAIL (*)"
          name="currentEmail"
          type="text"
          defaultValue={user.email}
          placeholder={'Current E-mail'}
        />

        {/* //? Username & Full Name */}
        <div className="grid sm:grid-cols-2 gap-6">
          <FormInput
            label="New E-mail (*)"
            name="newEmail"
            type="email"
            placeholder={'New E-mail'}
          />
          <FormInput
            label="Confirm New E-mail (*)"
            name="confirmEmail"
            type="email"
            placeholder={'Confirm E-mail'}
          />
        </div>
      </div>

      <div className="">
        <FormSubmitBtn label="Update E-mail" type="submit" islLoading={false} />
        <p className="font-light mt-6">
          Remember to save your changes before exiting this page to ensure all
          edits are securely applied.
        </p>
      </div>
    </form>
  );
};
export default UpdateEmail;
