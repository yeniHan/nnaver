
const getPagination = ({ page, itemsPerPage }
                           : { page: number; itemsPerPage: number; } , totalItems: any[]) => {
  const lastIdx = page * itemsPerPage - 1;
  const startIdx = lastIdx - ( itemsPerPage - 1);
  const items = totalItems?.slice(startIdx, lastIdx + 1);
  const totalPage = Math.ceil(totalItems?.length/itemsPerPage);

  return {
    currentPage: page,
    totalPage,
    itemsPerPage,
    items,
  };
};

export default getPagination;