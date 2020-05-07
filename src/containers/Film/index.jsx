import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import get from "lodash.get";
import ReactStars from "react-rating-stars-component";
import { FilmItem, UserPreview } from "components/Film";
import Loader from "react-loader-spinner";

import actions from "redux/films/actions";

import styles from "./styles.module.css";

const Film = () => {
  const dispatch = useDispatch();
  const film = useSelector((state) => state.films.singleFilm);
  const users = useSelector((state) => state.users.all);
  const userFilms = useSelector((state) => state.userFilms.all);
  const params = useParams();

  useEffect(() => {
    dispatch({
      type: actions.GET_FILM_REQUEST,
      payload: {
        id: params.id,
      },
    });
  }, [params]);

  const onRatingChange = useCallback(
    (rating) => {
      dispatch({
        type: actions.CREATE_FILM_RATING_REQUEST,
        payload: {
          rating,
          filmId: params.id,
        },
      });
    },
    [dispatch]
  );

  if (!film.isLoading) {
    return <Loader type="Puff" color="#00BFFF" height={100} width={100} />;
  }

  const normalizedFilm = film.isLoading ? film[params.id] : {};

  return (
    <div className={styles.filmWrap}>
      <div className={styles.film}>
        <FilmItem film={normalizedFilm || {}} />
        <ReactStars
          size="24"
          count={5}
          onChange={onRatingChange}
          color2="#ffd700"
          half={false}
        />
      </div>
      <div className={styles.description}>
        <span>{get(normalizedFilm, "description", "")}</span>
        <div className={styles.userStars}>
          {get(normalizedFilm, "users", []).map((userId) => (
            <Link to={`/profile/${userId}`} key={userId}>
              <UserPreview userFilms={userFilms} user={users[userId]} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Film;
