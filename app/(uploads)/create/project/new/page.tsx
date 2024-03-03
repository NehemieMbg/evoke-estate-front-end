'use client';

import LogoXL from '@/app/components/icons/logo/LogoXL';
import UploadProjectNavbar from '@/app/components/navigations/navbar/UploadProjectNavbar';

const page = () => {
  const clientAction = async (formData: FormData) => {
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  return (
    <form action={clientAction} className="min-h-screen">
      <UploadProjectNavbar />

      <div className="flex flex-col gap-14 items-center justify-center min-h-screen h-full pt-20 p-side">
        <h1 className="text-3xl">What do you wanna share ?</h1>

        <div>
          <label
            htmlFor="image"
            className="flex items-end justify-center border-dotted border-2 border-neutral-300 p-4 w-80 h-80 rounded-3xl cursor-pointer"
          >
            <LogoXL />

            <p className="font-light text-center">
              Simply drop your image here or <br />
              <span className="font-medium">Browse</span>
            </p>
          </label>
          <input id="image" name="image" type="file" className="hidden" />
        </div>
      </div>
    </form>
  );
};
export default page;
