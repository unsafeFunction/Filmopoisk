import React, { useEffect, useRef, useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import debounce from "lodash.debounce";
import { Header, Footer, SideMenu } from "components";

import actions from "redux/genres/actions";
import filmActions from "redux/films/actions";
import styles from "./styles.module.css";

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();
  const genres = useSelector((state) => state.genres.items);

  useEffect(() => {
    dispatch({
      type: actions.LOAD_GENRES_REQUEST,
      payload: {},
    });
  }, []);

  const setWithDelay = useCallback(
    (value) => {
      dispatch({
        type: filmActions.SET_FILM_QUERY_DATA,
        payload: {
          value,
        },
      });
    },
    [dispatch]
  );

  const delayedQuery = useRef(debounce((q) => setWithDelay(q), 500)).current;

  const onChange = (event) => {
    const { value } = event.target;

    delayedQuery(value);
  };

  return (
    <div className={styles.rootContent}>
      <SideMenu genres={genres} />
      <div className={styles.contentWrap}>
        <Header onChange={onChange} />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
