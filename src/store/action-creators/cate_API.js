import { CateActionTypes } from "../../types/user";
import axios from "axios";

const API_URL = "https://api.thecatapi.com/v1";

export const getHomeData = (categoricId) => {
  return async (dispatch) => {
    const url =
      categoricId === "random"
        ? `${API_URL}/images/search?limit=10&page=1`
        : `${API_URL}/images/search?limit=10&page=1&category_ids=${categoricId}`;

    const data = await axios.get(url, {});
    const categories = await axios.get(`${API_URL}/categories`, {});

    dispatch({
      type: CateActionTypes.GET_DATA,
      payload: {
        categories: categories.data,
        catesData: data.data,
        categoric: categoricId,
      },
    });
  };
};

export const getMorePhoto = (categoricId, page) => {
  return async (dispatch) => {
    page++;

    const url =
      categoricId === "random" || !categoricId
        ? `${API_URL}/images/search?limit=10&page=${page}`
        : `${API_URL}/images/search?limit=10&page=${page}&category_ids=${categoricId}`;

    const data = await axios.get(url, {});
    console.log(url);

    dispatch({
      type: CateActionTypes.GET_MORE_DATA,
      payload: {
        catesData: data.data,
        page: page,
      },
    });
  };
};
