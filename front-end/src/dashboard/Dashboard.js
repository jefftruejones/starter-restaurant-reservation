import React from "react";
import { useHistory } from "react-router-dom";
import { previous, next, today } from "../utils/date-time";
import ErrorAlert from "../layout/ErrorAlert";
import ReservationRow from "./ReservationRow";
import TableRow from "./TableRow";
import "./Dashboard.css";

/**
 * Defines the dashboard page.
 */
function Dashboard({
  date,
  reservations,
  reservationsError,
  tables,
  tablesError,
  loadDashboard,
}) {
  const history = useHistory();

  const reservationsJSX = () => {
    return reservations.map((reservation) => (
      <ReservationRow
        key={reservation.reservation_id}
        reservation={reservation}
        loadDashboard={loadDashboard}
      />
    ));
  };

  const tablesJSX = () => {
    return tables.map((table) => (
      <TableRow
        key={table.table_id}
        table={table}
        loadDashboard={loadDashboard}
      />
    ));
  };

  /**
   * Allows the user to go forward/backward days on the calendar.
   */
  function handleClick({ target }) {
    let newDate;
    let useDate;

    if (!date) {
      useDate = today();
    } else {
      useDate = date;
    }

    if (target.name === "previous") {
      newDate = previous(useDate);
    } else if (target.name === "next") {
      newDate = next(useDate);
    } else {
      newDate = today();
    }

    history.push(`/dashboard?date=${newDate}`);
  }

  return (
    <main className="main">
      <h1>Dashboard</h1>

      <h4>Reservations for {date}</h4>

      <div className="buttons">
        <button
          className="buttonDash"
          type="button"
          name="previous"
          onClick={handleClick}
        >
          Previous
        </button>
        <button
          className="buttonDash"
          type="button"
          name="today"
          onClick={handleClick}
        >
          Today
        </button>
        <button
          className="buttonDash"
          type="button"
          name="next"
          onClick={handleClick}
        >
          Next
        </button>
      </div>

      <ErrorAlert error={reservationsError} />

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Mobile Number</th>
            <th>Date</th>
            <th>Time</th>
            <th>People</th>
            <th>Status</th>
            <th>Edit</th>
            <th>Cancel</th>
            <th>Seat</th>
          </tr>
        </thead>

        <tbody>{reservationsJSX()}</tbody>
      </table>

      <br />
      <br />

      <h4>Tables</h4>

      <ErrorAlert error={tablesError} />

      <table>
        <thead>
          <tr>
            <th>Table ID</th>
            <th>Table Name</th>
            <th>Capacity</th>
            <th>Status</th>
            <th>Reservation ID</th>
            <th>Finish</th>
          </tr>
        </thead>

        <tbody>{tablesJSX()}</tbody>
      </table>
    </main>
  );
}

export default Dashboard;
