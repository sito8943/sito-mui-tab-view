/* eslint-disable eqeqeq */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/function-component-definition */
import { useState } from "react";

import PropTypes from "prop-types";

import {
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TableSortLabel,
  Typography,
  Checkbox,
  IconButton,
  Tooltip,
  Toolbar,
} from "@mui/material";

// @mui styles
import { alpha } from "@mui/material/styles";

// @mui utils
import { visuallyHidden } from "@mui/utils";

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort(array, order, orderBy) {
  const stabilizedThis = array.sort((itemA, itemB) => {
    const valueA = itemA[orderBy] === "No tiene" ? 0 : itemA[orderBy];
    const valueB = itemB[orderBy] === "No tiene" ? 0 : itemB[orderBy];
    if (valueA < valueB) {
      if (order === "asc") return -1;
      return 1;
    }
    if (valueA > valueB) {
      if (order === "asc") return 1;
      return -1;
    }
    return 0;
  });

  return stabilizedThis;
}

function ComplexTableHead(props) {
  const {
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
    columns,
    sx,
    rowSx,
    cellSx,
    disablePadding,
  } = props;

  const createSortHandler = (property) => (event) =>
    onRequestSort(event, property);

  const onSelectedAllChange = (e) => onSelectAllClick(e);

  return (
    <TableHead sx={{ ...sx }}>
      <TableRow sx={{ ...rowSx }}>
        <TableCell sx={{ ...cellSx }} padding="checkbox">
          <Checkbox
            color="primary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectedAllChange}
            onClick={onSelectedAllChange}
          />
        </TableCell>
        {columns.map((headCell) => (
          <TableCell
            sx={{ ...cellSx }}
            key={headCell.id}
            align="left"
            padding={disablePadding ? "none" : "normal"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              sx={{ width: headCell.id === "id" ? "90px" : "150px" }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

ComplexTableHead.defaultProps = {
  sx: {},
  rowSx: {},
  cellSx: {},
  disablePadding: false,
};

ComplexTableHead.propTypes = {
  disablePadding: PropTypes.bool,
  orderBy: PropTypes.string.isRequired,
  numSelected: PropTypes.number.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  rowCount: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  columns: PropTypes.array.isRequired,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
  rowSx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
  cellSx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

const ComplexTableToolbar = (props) => {
  const {
    numSelected,
    sx,
    singleSelectFunctions,
    multipleSelectFunctions,
    textForOneSelected,
    textForNSelected,
  } = props;

  return (
    <Toolbar
      sx={{
        pl: { sm: 2 },
        pr: { xs: 1, sm: 1 },
        ...sx,
        ...(numSelected > 0 && {
          bgcolor: (theme) =>
            alpha(
              theme.palette.primary.main,
              theme.palette.action.activatedOpacity
            ),
        }),
      }}
    >
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: "1 1 100%" }}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected}{" "}
          {numSelected === 1 ? textForOneSelected : textForNSelected}
        </Typography>
      ) : (
        <Typography
          sx={{ flex: "1 1 100%" }}
          variant="h6"
          id="tableTitle"
          component="div"
        />
      )}
      {numSelected === 1 && (
        <>
          {singleSelectFunctions.map((item) => (
            <Tooltip title={item.tooltip}>
              <IconButton onClick={item.func}>{item.icon}</IconButton>
            </Tooltip>
          ))}
        </>
      )}
      {numSelected > 0 && (
        <>
          {multipleSelectFunctions.map((item) => (
            <Tooltip title={item.tooltip}>
              <IconButton onClick={item.func}>{item.icon}</IconButton>
            </Tooltip>
          ))}
        </>
      )}
    </Toolbar>
  );
};

ComplexTableToolbar.defaultProps = {
  singleSelectFunctions: [],
  multipleSelectFunctions: [],
  sx: {},
};

ComplexTableToolbar.propTypes = {
  textForNSelected: PropTypes.string.isRequired,
  textForOneSelected: PropTypes.string.isRequired,
  numSelected: PropTypes.number.isRequired,
  singleSelectFunctions: PropTypes.arrayOf(
    PropTypes.shape({
      tooltip: PropTypes.string,
      func: PropTypes.func,
      icon: PropTypes.node,
    })
  ),
  multipleSelectFunctions: PropTypes.arrayOf(
    PropTypes.shape({
      tooltip: PropTypes.string,
      func: PropTypes.func,
      icon: PropTypes.node,
    })
  ),
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function ComplexTable(props) {
  const {
    columns,
    rows,
    sx,
    toolbarSx,
    tableContainerSx,
    paginationSx,
    singleSelectFunctions,
    multipleSelectFunctions,
    textForNSelected,
    textForOneSelected,
    sortFunction,
  } = props;
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  /**
   *
   * @param {boolean} all
   * @returns
   */
  const handleSelectAllClick = () => {
    if (selected.length === 0) {
      const newSelected = rows.map((n) => n.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, id) => {
    let selectedIndex = -1;
    let newSelected = [];
    let isLocalSelected = false;
    selected.forEach((item) => {
      if (item === id) {
        selectedIndex = selected.indexOf(item);
        isLocalSelected = true;
      }
    });
    if (!isLocalSelected)
      rows.forEach((item) => {
        if (item.id === id) selectedIndex = rows.indexOf(item);
      });
    if (selected.length && isLocalSelected) {
      if (selectedIndex === -1) newSelected = newSelected.concat(selected, id);
      else if (selectedIndex === 0)
        newSelected = newSelected.concat(selected.slice(1));
      else if (selectedIndex === selected.length - 1)
        newSelected = newSelected.concat(selected.slice(0, -1));
      else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1)
        );
      }
    } else {
      newSelected = [...selected];
      newSelected.push(id);
    }
    if (
      newSelected.length === 1 &&
      selected.length === 1 &&
      newSelected[0] === selected[0]
    )
      setSelected([]);
    else setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => setPage(newPage);

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const parsedSelectFunctions = (selectFunction) => {
    selectFunction.map((item) => {
      const { tooltip, func, icon } = item;
      return { tooltip, func: () => func(selected), icon };
    });
  };

  return (
    <Box sx={{ width: "100%", ...sx }}>
      <ComplexTableToolbar
        numSelected={selected.length}
        sx={{ ...toolbarSx }}
        singleSelectFunctions={parsedSelectFunctions(singleSelectFunctions)}
        multipleSelectFunctions={parsedSelectFunctions(multipleSelectFunctions)}
      />
      <TableContainer sx={{ ...tableContainerSx }}>
        <Table sx={{ minWidth: 500 }} size="medium">
          <ComplexTableHead
            columns={columns}
            numSelected={selected.length}
            order={order}
            orderBy={orderBy}
            onSelectAllClick={handleSelectAllClick}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
            textForNSelected={textForNSelected}
            textForOneSelected={textForOneSelected}
          />
          <TableBody>
            {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
            {sortFunction(rows, order, orderBy)
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                const isItemSelected = isSelected(row.id);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    hover
                    onClick={(event) => handleClick(event, row.id)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={row.name}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="primary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    {Object.keys(row).map((item) => (
                      <TableCell
                        key={item}
                        align="left"
                        component={item === "id" ? "th" : "td"}
                        id={labelId}
                        scope="row"
                        padding="none"
                        sx={{
                          span: {
                            marginLeft: item === "id" ? 0 : "20px",
                            width: item === "id" ? "90px" : "100px",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                          },
                        }}
                      >
                        <span>{row[item]}</span>
                      </TableCell>
                    ))}
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow
                style={{
                  height: 53 * emptyRows,
                }}
              >
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
        sx={{ ...paginationSx }}
      />
    </Box>
  );
}

ComplexTable.defaultProps = {
  sx: {},
  toolbarSx: {},
  tableContainerSx: {},
  paginationSx: {},
  singleSelectFunctions: [],
  multipleSelectFunctions: [],
  textForNSelected: "selected",
  textForOneSelected: "selected",
  sortFunction: stableSort,
};

ComplexTable.propTypes = {
  sortFunction: PropTypes.func,
  textForNSelected: PropTypes.string.isRequired,
  textForOneSelected: PropTypes.string.isRequired,
  columns: PropTypes.array.isRequired,
  rows: PropTypes.array.isRequired,
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
  toolbarSx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
  tableContainerSx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
  paginationSx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool])
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
  singleSelectFunctions: PropTypes.arrayOf(
    PropTypes.shape({
      tooltip: PropTypes.string,
      func: PropTypes.func,
      icon: PropTypes.node,
    })
  ),
  multipleSelectFunctions: PropTypes.arrayOf(
    PropTypes.shape({
      tooltip: PropTypes.string,
      func: PropTypes.func,
      icon: PropTypes.node,
    })
  ),
};
