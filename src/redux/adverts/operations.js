import axios from 'axios';
import { parseAddress } from 'helpers/parseAddress';
import { createAsyncThunk } from '@reduxjs/toolkit';

const BASE_API_URL = 'https://6574e9dfb2fbb8f6509cc7ce.mockapi.io';

export const getAll = createAsyncThunk(
  'advert/adverts',
  async ({ params, filter }, { reject }) => {
    try {
      const response = await axios.get(
        `${BASE_API_URL}/adverts/?sortBy=rentalPrice${params}`
      );
      let handledData = parseAddress(structuredClone(response.data));

      //since mockapi.io cant use filters like "greater than 'x'" so i cant build proper request to ask exactly 12 advers that will match filters that uses params range, in this case only solution i found is to filter adverts here, this if statement can be easily removed if API will have proper handling of params
      if (filter) {
        if (filter.maxPrice) {
          handledData = handledData.filter(
            advert => advert.rentalPrice <= filter.maxPrice
          );
        }
        if (filter.maxMileage) {
          handledData = handledData.filter(
            advert => advert.mileage <= filter.maxMileage
          );
        }
        if (filter.minMileage) {
          handledData = handledData.filter(
            advert => advert.mileage >= filter.minMileage
          );
        }
      }

      return handledData;
    } catch (error) {
      return reject(error.message);
    }
  }
);
