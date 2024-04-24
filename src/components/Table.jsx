import React, { useMemo, useState } from "react";
import {
  useTable,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  usePagination,
} from "react-table";
import PageButton from "@/components/buttons/PageButton";

import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs';


//import Swal from "sweetalert2";
import Swal from "sweetalert2/dist/sweetalert2.js";
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal);

const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) => {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);
  return (
    <>
      <label className="flex gap-x-2 items-baseline">
        <span className="hidden md:inline-block mr-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 inline mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
          </svg>
          Search:
        </span>
        <input
          type="text"
          className="rounded-md border-2 border-neutral-300 focus:border-neutral-700 transition p-2 w-40 md:w-52 "
          value={value || ""}
          onChange={(e) => {
            setValue(e.target.value);
            onChange(e.target.value);
          }}
          placeholder={`${count} records...`}
        />
      </label>
    </>
  );
};

const handleTruncatedCellClick = (value, columnName) => {
  let syntaxLanguage = 'sql';
  if (columnName == 'response' ) {
    syntaxLanguage = 'html';
  }
  const customStyle = {
    backgroundColor: 'transparent'
  }
  return MySwal.fire({
    title: '',
    showCloseButton: true,
    showConfirmButton: false,
    html: (
      <div className="p-4 font-mono text-sm">
        <SyntaxHighlighter language={syntaxLanguage} style={monokaiSublime} wrapLongLines={true} customStyle={customStyle}>
          {value}
        </SyntaxHighlighter>
      </div>
    ),
  });
};

const Table = ({ columns, data, runtime, actionButtons, rowActionButtons }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage,
    state,
    setPageSize,
    pageOptions,
    gotoPage,
    pageCount,
    setGlobalFilter,
    preGlobalFilteredRows,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );
  return (
    <>
      <div className="flex justify-between items-center">
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        {/* runtime && (
          <p className="text-primary-dark">
            Query took:{" "}
            {<span className="font-bold">{`${runtime?.toFixed(2)} ms`}</span>}
          </p>
        )*/}
        { actionButtons }
      </div>

      {/* table */}
      <div className="overflow-auto">
        <table
          {...getTableProps()}
          className="min-w-full divide-y divide-gray-200 border-2 border-neutral-900"
        >
          <thead className="bg-indigo-900">
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    scope="col"
                    className="px-4 py-4 text-xs text-white"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    <div className="flex justify-center space-x-1">
                      <span className=" hover:text-gray-300">
                        {column.render("Header")}
                      </span>
                      <span>
                        {column.isSorted
                          ? column.isSortedDesc
                            ? " ▼"
                            : " ▲"
                          : ""}
                      </span>
                    </div>
                  </th>
                ))}
                {rowActionButtons && (
                  <th
                    scope="col"
                    className="px-4 py-4 text-xs text-white"
                  >
                    <div className="flex justify-center space-x-1">
                      <span className=" hover:text-gray-300">
                        actions
                      </span>
                    </div>
                  </th>
                )}
              </tr>
            ))}
          </thead>
          <tbody
            {...getTableBodyProps()}
            className="bg-white text-black divide-y divide-gray-200"
          >
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()} style={{ backgroundColor: i % 2 === 0 ? '#f2f2f2' : '' }}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        className="px-4 py-4 whitespace-nowrap text-sm text-gray-500"
                      >
                        { cell.value?.length > 50 ? (
                          <a onClick={()=>handleTruncatedCellClick(cell.value, cell.column.Header)} className="underline cursor-pointer">
                            {cell.value?.substring(0, 50) + '...'}
                          </a>
                        ) : cell.render("Cell")}
                      </td>
                    );
                  })}
                  {rowActionButtons && (
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                      <div className="flex flex-row space-x-2 justify-center">
                        {rowActionButtons.map((button) => button.render(row))}
                      </div>
                    </td>
                  )}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* Pagination */}
      <div className="py-3 flex items-center justify-between">
        <div className="flex-1 flex justify-between sm:hidden">
          <button
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Previous
          </button>
          <button onClick={() => nextPage()} disabled={!canNextPage}>
            Next
          </button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-row gap-x-2">
            <span className="text-sm text-gray-700">
              Page <span className="font-medium">{state.pageIndex + 1}</span> of{" "}
              <span className="font-medium">{pageOptions.length}</span>
            </span>
            <span className="text-sm text-gray-700">
              (10 records per page)
            </span>
            {/*
            <select
              className="text-black outline-none bg-white border-2 border-transparent focus:border-primary-dark rounded-md cursor-pointer"
              value={state.pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
              }}
            >
              {[5, 10, 20].map((pageSize) => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>
              */}
          </div>
          <div>
            <nav
              className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
              aria-label="Pagination"
            >
              <PageButton
                className="rounded-l-md"
                onClick={() => gotoPage(0)}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">First</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <title id="pageOne">Go to page one</title>
                  <path
                    fillRule="evenodd"
                    d="M15.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 010 1.414zm-6 0a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 011.414 1.414L5.414 10l4.293 4.293a1 1 0 010 1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </PageButton>
              <PageButton
                onClick={() => previousPage()}
                disabled={!canPreviousPage}
              >
                <span className="sr-only">Previous</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <title id="previousPage">Go to previous page</title>
                  <path
                    fillRule="evenodd"
                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </PageButton>
              <PageButton onClick={() => nextPage()} disabled={!canNextPage}>
                <span className="sr-only">Next</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <title id="nextPage">Go to next page</title>
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </PageButton>
              <PageButton
                className="rounded-r-md"
                onClick={() => gotoPage(pageCount - 1)}
                disabled={!canNextPage}
              >
                <span className="sr-only">Last</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <title id="lastPage">Go to last page</title>
                  <path
                    fillRule="evenodd"
                    d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </PageButton>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Table;