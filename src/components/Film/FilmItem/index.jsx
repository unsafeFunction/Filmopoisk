import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const FilmItem = ({ film, isRedirect }) => {
  if (isRedirect) {
    return (
      <Link to={`/film/${film.id}`}>
        <div className={styles.filmItem}>
          <img
            src={film.poster || "https://i.picsum.photos/id/789/200/300.jpg"}
            alt="block"
          />
          <span>{film.name}</span>
        </div>
      </Link>
    );
  }

  return (
    <div className={styles.filmItem}>
      <img
        src={film.poster || "https://i.picsum.photos/id/789/200/300.jpg"}
        alt="block"
      />
      <span>{film.name}</span>
    </div>
  );
};

FilmItem.propTypes = {
  film: PropTypes.shape({
    name: PropTypes.string,
    poster: PropTypes.string,
  }).isRequired,
  isRedirect: PropTypes.bool,
};

FilmItem.defaultProps = {
  isRedirect: false,
};

export default FilmItem;
