const ITEM_PEAR_PAGE = 6;

const usePagination = (total) => {
  const totalPages = parseInt(
    (total + ITEM_PEAR_PAGE - 1) / ITEM_PEAR_PAGE,
    10
  );
  const pageButtonsArray = [...Array(totalPages).keys()];

  return [pageButtonsArray.length > 1 ? pageButtonsArray : [], ITEM_PEAR_PAGE];
};

export default usePagination;
