import axiosClient from "utils/axiosClient";

export const loadGenres = async (query) => {
  try {
    const genres = await axiosClient.get("/genres");

    return genres;
  } catch (error) {
    return error;
  }
};
