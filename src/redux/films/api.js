import axiosClient from "utils/axiosClient";

export const loadFilms = async (query) => {
  try {
    const films = await axiosClient.get("/films", {
      params: { ...query },
    });

    return films;
  } catch (error) {
    return error;
  }
};

export const getFilm = async (id) => {
  try {
    const films = await axiosClient.get(`/films/${id}`);

    return films;
  } catch (error) {
    return error;
  }
};

export const patchFilmRating = async ({ id, rating }) => {
  try {
    const films = await axiosClient.patch(`/films/rating/${id}`, {
      rating,
    });

    return films;
  } catch (error) {
    return error;
  }
};

export const createFilmRating = async (payload) => {
  try {
    const films = await axiosClient.post("/films/rating", {
      ...payload,
    });

    return films;
  } catch (error) {
    return error;
  }
};
