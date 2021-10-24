
import axios from 'axios';
import { swal } from "../components/ui/sweetalert2";
import carOffers from './carOffers.json';

const apiClient = axios.create({
  baseURL: 'http://cdn.sixt.io',
  headers: {
    Accept: 'application/json',
    'content-type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  },
});

// eslint-disable-next-line import/no-anonymous-default-export
export default {

  /**
  *get car offer
  */
  async getCarOffers() {
    try {
      return await apiClient.get("/codingtask/offers.json") as IOffers;
    }
    catch (error: any) {
      showSweetAlert(error);
      return carOffers;
    }
  },


};


const showSweetAlert = (error: Error) => {
  console.log(error);
  //show the alert dialog box
  swal.fire({
    title: 'Error Info',
    icon: 'error',
    text: error.toString()
  });
};


