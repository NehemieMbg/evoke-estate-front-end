'use client';

import LogoXL from '@/app/components/icons/logo/LogoXL';
import UploadProjectNavbar from '@/app/components/navigations/navbar/UploadProjectNavbar';
import { useState } from 'react';

const page = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const clientAction = async (formData: FormData) => {
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const file = e.target.files[0];
    setFile(file);
    setPreview(URL.createObjectURL(file));
  };

  return (
    <form action={clientAction} className="min-h-screen">
      <UploadProjectNavbar />

      <div className="flex flex-col gap-14 items-center justify-center min-h-screen h-full pt-20 p-side">
        {!file && <h1 className="text-3xl">What do you wanna share ?</h1>}

        <div className={`${file && 'hidden'}`}>
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
          <input
            onChange={handleFileChange}
            id="image"
            name="image"
            type="file"
            className="hidden"
          />
        </div>
      </div>
    </form>
  );
};
export default page;
