import React from "react";
import PropTypes from "prop-types";

import styles from "./styles.module.css";

const Header = ({ onChange }) => {
  return (
    <div className={styles.header}>
      <input
        onChange={onChange}
        placeholder="Search"
        className={styles.searchInput}
      />
    </div>
  );
};

Header.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default Header;
