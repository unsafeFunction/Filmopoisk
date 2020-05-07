import axiosClient from "utils/axiosClient";

export const getUser = async (id) => {
  try {
    const user = await axiosClient.get(`/users/${id}`);

    return user;
  } catch (error) {
    return error;
  }
};
