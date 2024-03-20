import { evokeReq } from '@/utils/functions/evokeApiReq';

const page = async () => {
  try {
    const response = await evokeReq.get('/test');
    const data = response.data;

    console.log(data);

    return <div>{data}</div>;
  } catch (error) {
    console.error(error);
  }

  return <div>No data</div>;
};
export default page;
