import React from "react";
import PropTypes from "prop-types";
import FilmItem from "../Film/FilmItem";
import styles from "./styles.module.css";

const Footer = React.memo(({ recommendations }) => {
  return (
    <div className={styles.footer}>
      {recommendations.map((film) => (
        <FilmItem isRedirect key={film.id} film={film} />
      ))}
    </div>
  );
});

Footer.propTypes = {
  recommendations: PropTypes.arrayOf(PropTypes.shape),
};

Footer.defaultProps = {
  recommendations: [],
};

export default Footer;
