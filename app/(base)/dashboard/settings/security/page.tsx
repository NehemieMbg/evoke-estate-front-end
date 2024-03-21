import DeleteAccount from '@/app/sections/settings/DeleteAccount';
import UpdateEmail from '@/app/sections/settings/UpdateEmail';
import UpdatePassword from '@/app/sections/settings/UpdatePassword';
import { evokeReq } from '@/utils/functions/evokeApiReq';

const page = async () => {
  const response = await evokeReq.get('/users/me');
  const userInfo = response.data;

  return (
    <div className="">
      <UpdateEmail currentEmail={userInfo.email} />

      <hr className="my-20" />

      <UpdatePassword />

      <hr className="my-20" />

      <DeleteAccount />
    </div>
  );
};
export default page;
