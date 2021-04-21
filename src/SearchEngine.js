import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./SearchEngine.css";

export default function Search() {
  return (
    <div className="Search">
      <form>
        <div className="row">
          <div className="col-8">
            <input
              type="text"
              placeholder="Search City..."
              autoFocus="on"
              className="form-control"
            />
          </div>

          <div className="col-4">
            <input
              type="submit"
              value="Search"
              className="btn btn-outline-success shadow-sm"
            />
          </div>

          <div className="col-4">
            <input
              className="current-location btn btn-success shadow-sm"
              type="submit"
              value=" 📍  "
            />
          </div>
        </div>
      </form>
    </div>
  );
}
