'use client';

import { FormInput, FormSubmitBtn } from '@/app/components';
import updateUserEmailAction from '@/utils/actions/UpdateUserEmailAction';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

interface IProps {
  currentEmail: string;
}

const UpdateEmail: React.FC<IProps> = ({ currentEmail }) => {
  const router = useRouter();
  const [updateError, setUpdateError] = useState<string | null>(null);

  const clientAction = async (formData: FormData) => {
    try {
      const response = await updateUserEmailAction(formData);
      if (response && response.error) {
        throw new Error(response.error);
      }

      router.push('.');

      // ? log out user
    } catch (error: any) {
      // manage error
      console.error(error);
      setUpdateError(error.message as string);
    }
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
          defaultValue={currentEmail}
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
        {updateError && (
          <p className="font-light text-xmd mb-5 text-red-400">{updateError}</p>
        )}
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
