import UpdateAvatar from '@/app/sections/settings/UpdateAvatar';
import UpdateInfo from '@/app/sections/settings/UpdateInfo';
import { evokeReq } from '@/utils/functions/evokeApiReq';

const page = async () => {
  const response = await evokeReq.get('/users/me');
  const userInfo = response.data;

  // console.log('User Info: ', userInfo);

  return (
    <div>
      <UpdateAvatar />
      <UpdateInfo userInfo={userInfo} />
    </div>
  );
};
export default page;
