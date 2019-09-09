import React from "react";
import Loading from "./Loading";

function Table(props) {
  if (props.apiResult.length !== 0) {
    return (
      <div className="middle">
        <table className="">
          <tbody>
            <tr>
              <th>Date and Time</th>
              <th>Dollar Rate</th>
            </tr>
            {props.apiResult.map(eachData => {
              return eachData.map(el => {
                return (
                  <tr key={el[0]}>
                    <td>{el[0]}</td>
                    <td>{el[1]}</td>
                  </tr>
                );
              });
            })}
          </tbody>
        </table>
      </div>
    );
  }
  return <Loading />;
}

export default Table;
