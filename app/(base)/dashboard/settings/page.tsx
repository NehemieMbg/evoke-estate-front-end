'use client';

import { FormInput, FormSubmitBtn } from '@/app/components';
import FormTextArea from '@/app/components/forms/inputs/FormTextArea';
import ProfilePictureInput from '@/app/components/forms/inputs/ProfilePictureInput';
import { user } from '@/app/constant/index';

const page = () => {
  const clientAction = async (formData: FormData) => {
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  return (
    <form
      action={clientAction}
      className="grid xl:grid-cols-3 gap-x-20 gap-y-6"
    >
      <div className="flex flex-col gap-8 xl:col-start-1 xl:col-end-3">
        <ProfilePictureInput />

        {/* //? Username & Full Name */}
        <div className="grid sm:grid-cols-2 gap-6">
          <FormInput
            label="USERNAME (*)"
            name="username"
            type="text"
            defaultValue={user.username}
            placeholder={'Username'}
          />
          <FormInput
            label="FULL NAME (*)"
            name="fullName"
            type="text"
            defaultValue={user.fullName}
            placeholder={'Full Name'}
          />
        </div>

        {/* //? Country & Title */}
        <div className="grid sm:grid-cols-2 gap-6">
          <FormInput
            label="COUNTRY (*)"
            name="country"
            type="text"
            defaultValue={user.country}
            placeholder={'Country'}
          />
          <FormInput
            label="WHO ARE YOU? (*)"
            name="title"
            type="text"
            defaultValue={user.title}
            placeholder={'Who are you?'}
          />
        </div>

        <FormTextArea
          label="DESCRIPTION"
          name="description"
          defaultValue={user.bio}
          placeholder={'description'}
        />
      </div>

      <div className="">
        <FormSubmitBtn label="Save Changes" type="submit" islLoading={false} />
        <p className="font-light mt-6">
          Remember to save your changes before exiting this page to ensure all
          edits are securely applied.
        </p>
      </div>
    </form>
  );
};
export default page;
