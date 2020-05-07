import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import actions from "redux/users/actions";
import filmActions from "redux/films/actions";

import Loader from "react-loader-spinner";
import User from "assets/images/user.svg";
import { FilmRating } from "components/Film";

import styles from "./styles.module.css";

const Profile = React.memo(() => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.singleUser);
  const params = useParams();

  const useFetching = () => {
    useEffect(() => {
      dispatch({
        type: actions.GET_USER_REQUEST,
        payload: {
          id: params.id,
        },
      });
    }, []);
  };

  useFetching();

  const onRatingChange = useCallback(
    (rating, id) => {
      dispatch({
        type: filmActions.UPDATE_FILM_RATING_REQUEST,
        payload: {
          rating,
          id,
        },
      });
    },
    [dispatch]
  );

  if (!user.isLoading) {
    return <Loader type="Puff" color="#00BFFF" height={100} width={100} />;
  }

  return (
    <>
      <div className={styles.user}>
        <User width="150px" height="150px" />
        <span>{user.fullName}</span>
      </div>
      <div className={styles.userFilms}>
        {user.films &&user.films.map((film) => (
          <FilmRating
            key={film.id}
            onChange={(rating) => onRatingChange(rating, film.userFilm.id)}
            film={film}
          />
        ))}
      </div>
    </>
  );
});

Profile.displayName = Profile;

Profile.propTypes = {
  user: PropTypes.shape({}),
};

Profile.defaultProps = {
  user: {},
};

export default Profile;
