import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const SideMenu = ({ genres }) => {
  return (
    <div className={styles.sideMenu}>
      <h2 className={styles.title}>
        <Link to="/">FilmPoisk</Link>
      </h2>
      <span>Genres:</span>
      <ul className={styles.genre}>
        {genres.map((genre) => {
          return (
            <Link
              key={genre.id}
              to={{
                pathname: "/films",
                search: `?genreId=${genre.id}`,
              }}
            >
              <li>{genre.name}</li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

SideMenu.displayName = SideMenu;

SideMenu.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

SideMenu.defaultProps = {
  genres: [],
};

export default SideMenu;
