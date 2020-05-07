import { schema } from "normalizr";

export const user = new schema.Entity("users", {
  userFilm: new schema.Entity("userFilm"),
});

export const films = new schema.Entity("films", {
  users: new schema.Array(user),
});

export const singleFilms = new schema.Entity("film", {
  users: new schema.Array(user),
});
