import React from "react";
import PropTypes from "prop-types";
import styles from "./styles.module.css";

const FilmItem = ({ film }) => {
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
};

export default FilmItem;
