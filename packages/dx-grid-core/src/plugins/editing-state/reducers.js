export const startEditRows = (prevEditingRowIds, { rowIds }) =>
  [...prevEditingRowIds, ...rowIds];

export const stopEditRows = (prevEditingRowIds, { rowIds }) => {
  const rowIdSet = new Set(rowIds);
  return prevEditingRowIds.filter(id => !rowIdSet.has(id));
};

export const addRow = (addedRows, { row } = { row: {} }) => [...addedRows, row];

export const changeAddedRow = (addedRows, { rowId, change }) => {
  const result = addedRows.slice();
  result[rowId] = { ...result[rowId], ...change };
  return result;
};

export const cancelAddedRows = (addedRows, { rowIds }) => {
  const result = [];
  const indexSet = new Set(rowIds);
  addedRows.forEach((row, index) => {
    if (!indexSet.has(index)) {
      result.push(row);
    }
  });
  return result;
};

export const changeRow = (prevRowChanges, { rowId, change }) => {
  const prevChange = prevRowChanges[rowId] || {};
  return {
    ...prevRowChanges,
    [rowId]: {
      ...prevChange,
      ...change,
    },
  };
};

export const cancelChanges = (prevRowChanges, { rowIds }) => {
  const result = { ...prevRowChanges };
  rowIds.forEach((rowId) => {
    delete result[rowId];
  });
  return result;
};

export const deleteRows = (deletedRowIds, { rowIds }) => [...deletedRowIds, ...rowIds];

export const cancelDeletedRows = (deletedRowIds, { rowIds }) => {
  const rowIdSet = new Set(rowIds);
  return deletedRowIds.filter(rowId => !rowIdSet.has(rowId));
};
