const apiURL = "http://www.dh-rest-service.herokuapp.com";
export const getTodayFoods = async () => {
  console.log("hitting api");
  const res = await fetch("/api/today", {
    headers: {
      accepts: "application/json"
    }
  });
  console.log("res", res);
  const json = await res.json();
  console.log(json);
  return json;
};
