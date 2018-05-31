import { axios } from "./axios";

return () => {
  axios
    .get("/v1/reservationService/reservations")
    .then(res => {
      return "hello";
    })
    .catch(err => {
      console.log(err);
    });
};
