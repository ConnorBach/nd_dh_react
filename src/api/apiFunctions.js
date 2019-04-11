const apiURL = 'https://www.dh-rest-service.herokuapp.com';
const API_ENDPOINT = process.env.REACT_APP_API_ENDPOINT || apiURL;
export const getTodayFoods = async () => {
  console.log('hitting api');
  console.log('process.endpoint: ', process.env.REACT_APP_API_ENDPOINT);
  console.log('actual endpoint: ', API_ENDPOINT);
  const res = await fetch(`${API_ENDPOINT}/api/today`, {
    headers: {
      accepts: 'application/json',
    },
  });
  console.log('res', res);
  const json = await res.json();
  console.log(json);
  return json;
};

export { getTodayFoods as default };
