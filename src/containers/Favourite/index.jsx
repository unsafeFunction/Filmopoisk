import React, { useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import actions from "redux/films/actions";
import { FilmItem, Pagination } from "components";
import Loader from "react-loader-spinner";
import get from "lodash.get";
import pageButtonsArray from "hooks/usePagination";
import styles from "./styles.module.css";

const Favourite = () => {
  const dispatch = useDispatch();
  const filmsData = useSelector((state) => state.films.all);
  const singleFilm = useSelector((state) => state.films.singleFilm);

  const genres = useSelector((state) => state.genres.items);
  const { pathname, search } = useLocation();

  const onPageChange = useCallback(
    (value) => {
      dispatch({
        type: actions.SET_FILM_DATA,
        payload: {
          name: "page",
          value,
        },
      });
    },
    [dispatch]
  );

  const [pages, ITEM_PEAR_PAGE] = pageButtonsArray(filmsData.total);

  useEffect(() => {
    dispatch({
      type: actions.LOAD_FILMS_REQUEST,
      payload: {
        isFeatured: pathname === "/",
        genreId: search.split("=")[1],
        name: singleFilm.searchString,
        limit: 10,
        offset:
          singleFilm.page > 1 ? ITEM_PEAR_PAGE * (singleFilm.page - 1) : 0,
      },
    });
  }, [pathname, search, singleFilm]);

  const genreId = search.split("=")[1];

  if (!filmsData.isLoading) {
    return <Loader type="Puff" color="#00BFFF" height={100} width={100} />;
  }

  const { films } = filmsData.items;
  const genre = genres.find((genre) => genre.id === +genreId);

  return (
    <>
      <h3>{`${get(genre, "name", "Favourites")} films`}</h3>
      <div className={styles.films}>
        {films &&
          Object.values(films).map((film) => {
            return (
              <Link key={film.id} to={`/film/${film.id}`}>
                <FilmItem film={film} />
              </Link>
            );
          })}
      </div>
      <Pagination
        activePage={singleFilm.page}
        pages={pages}
        onClick={onPageChange}
      />
    </>
  );
};

export default Favourite;
