import axios from 'axios';

// var axios = require("axios").default;

export const getPlacesData = async (sw, ne, type) => {
  try {
    const {
      data: { data },
    } = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          // bl_latitude: '-34.86182',
          // tr_latitude: '-34.8973207',
          // bl_longitude: '138.6321',
          // tr_longitude: '138.6660814',
          bl_latitude: sw.lat,
          tr_latitude: ne.lat,
          bl_longitude: sw.lng,
          tr_longitude: ne.lng,
        },
        headers: {
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com',

          'x-rapidapi-key': process.env.REACT_APP_RAPID_API_TRAVEL_API_KEY,
        },
      }
    );

    return data;
  } catch (error) {
    console.log(`An Error Has Been Caugt: ${error}`);
  }
};
