import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import styles from "./styles.module.css";

const FilmRating = ({ film, onChange }) => {
  return (
    <div className={styles.filmRating}>
      <div className={styles.filmDescription}>
        <img
          src={film.poster || "https://i.picsum.photos/id/789/200/300.jpg"}
          alt="block"
        />
        <Link to={`/film/${film.id}`} key={film.id}>
          <span>{film.name || "Film name"}</span>
        </Link>
      </div>
      <ReactStars
        onChange={onChange}
        value={film.userFilm.rating}
        size="24"
        count={5}
        color2="#ffd700"
        half={false}
      />
    </div>
  );
};

FilmRating.propTypes = {
  onChange: PropTypes.func.isRequired,
  film: PropTypes.shape({
    name: PropTypes.string,
    poster: PropTypes.string,
  }),
};

FilmRating.defaultProps = {
  film: {
    userFilm: {},
  },
};

export default FilmRating;
