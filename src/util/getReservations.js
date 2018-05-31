import { axios } from "./axios";

export const getReservations = () => {
  axios
    .get("/v1/reservationService/reservations")
    .then(res => {
      return "hello";
    })
    .catch(err => {
      console.log(err);
    });
};
