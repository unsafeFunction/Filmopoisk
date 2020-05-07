import React from "react";
import PropTypes from "prop-types";
import ReactStars from "react-rating-stars-component";
import User from "assets/images/user.svg";
import get from "lodash.get";

import styles from "./styles.module.css";

const UserPreview = ({ user, userFilms }) => {
  return (
    <div className={styles.userPreview}>
      <div className={styles.userLogo}>
        <User width="30px" />
        <span>{user.fullName}</span>
      </div>
      <ReactStars
        value={get(userFilms[user.userFilm], "rating", 0)}
        edit={false}
        size="24"
        count={5}
        color2="#ffd700"
        half={false}
      />
    </div>
  );
};

UserPreview.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string,
  }),
  userFilms: PropTypes.shape({
    rating: PropTypes.number.isRequired,
  }),
};

UserPreview.defaultProps = {
  user: {},
  userFilms: {},
};

export default UserPreview;
