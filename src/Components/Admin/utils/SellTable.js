import React from "react";
import { useTable } from "react-table";
import styled from "styled-components";

const TableContainer = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
  }

  th {
    background-color: #13395e;
    color: #ffffff;
    padding: 8px;
    text-align: left;
  }

  td,
  th {
    border: 1px solid #dddddd;
    padding: 8px;
  }
`;

function SellTable({ sellData }) {
  const data = React.useMemo(() => sellData, [sellData]);

  const columns = React.useMemo(
    () => [
      { Header: "Email", accessor: "email" },
      { Header: "City", accessor: "city" },
      { Header: "Type", accessor: "type" },
      { Header: "Bathroom", accessor: "bathroom" },
      { Header: "Bedroom", accessor: "bedroom" },
      { Header: "Phone Number", accessor: "number" },
      { Header: "Area", accessor: "area" },
      { Header: "Description", accessor: "description" },
      { Header: "Price", accessor: "price" },
      { Header: "Title", accessor: "title" },
      { Header: "Actions", accessor: "actions" },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <TableContainer>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </TableContainer>
  );
}

export default SellTable;
