import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import styles from "./styles.module.css";

const Pagination = ({ onClick, pages, activePage }) => {
  return (
    <div className={styles.buttons}>
      {pages.map((page) => {
        console.log(page - 1, activePage);
        return (
          <button
            className={clsx({
              [styles.activePage]: activePage - 1 === page,
            })}
            onClick={() => {
              onClick(page + 1);
            }}
            type="button"
            key={page}
          >
            {page + 1}
          </button>
        );
      })}
    </div>
  );
};

Pagination.propTypes = {
  onClick: PropTypes.func.isRequired,
  pages: PropTypes.arrayOf(PropTypes.number).isRequired,
  activePage: PropTypes.number,
};

Pagination.defaultProps = {
  activePage: 1,
};

export default Pagination;
