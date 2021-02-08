import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "components/dashboard/index.scss";

import Griddle, {
  ColumnDefinition,
  plugins,
  RowDefinition,
} from "griddle-react";
import { HIT_GETNEWS } from "redux/actions";
import { Link } from "react-router-dom";
import BootstrapFilter from "./bootstrapFilter";

const styleConfig = {
  classNames: {
    Filter: "form-control input-sm",
    Table: "table table-bordered table-hover dataTable",
    TableHeading: "",
    TableBody: "",
    PageDropDown: "form-control input-sm",
    NextButton: "paginate_button next",
    PreviousButton: "paginate_button previous",
    Pagination: "dataTables_paginate paging_simple_numbers",
  },
};

const BootstrapLayout = ({ Table, Pagination, Filter, SettingsWrapper }) => {
  return (
    <div className="dataTables_wrapper form-inline dt-bootstrap">
      <div className="row">
        <div className="col-sm-6">
          <div className="dataTables_length">
            <SettingsWrapper />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="dataTables_filter">
            <Filter />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-cm-12">
          <Table />
        </div>
      </div>
      <div className="row">
        <div className="col-sm-5"></div>
        <div className="col-sm-7">
          <Pagination />
        </div>
      </div>
    </div>
  );
};
const Index = () => {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => ({
    data: state.news.data,
  }));
  useEffect(() => {
    const initial_payload = {
      page: 1,
      offset: 10,
    };
    dispatch({ type: HIT_GETNEWS, payload: initial_payload });
  }, []);
  console.log("datas", data);
  if (data.length === 0) {
    return <div>Loading</div>;
  }
  let output = Object.keys(data).map(function (key) {
    return data[key];
  });
  const styleConfig = {
    icons: {
      TableHeadingCell: {
        sortDescendingIcon: <small>(desc)</small>,
        sortAscendingIcon: <small>(asc)</small>,
      },
    },
    classNames: {
      Cell: "griddle-cell",
      Filter: "griddle-filter text-left",
      Loading: "griddle-loadingResults",
      NextButton: "griddle-next-button",
      NoResults: "griddle-noResults",
      PageDropdown: "griddle-page-select",
      Pagination: "griddle-pagination",
      PreviousButton: "griddle-previous-button",
      Row: "griddle-row",
      RowDefinition: "griddle-row-definition",
      Settings: "griddle-settings text-left mt-4",
      SettingsToggle: "griddle-settings-toggle",
      Table: "griddle-table",
      TableBody: "griddle-table-body",
      TableHeading: "griddle-table-heading",
      TableHeadingCell: "griddle-table-heading-cell",
      TableHeadingCellAscending: "griddle-heading-ascending",
      TableHeadingCellDescending: "griddle-heading-descending",
    },
    styles: {

    },
  };
  const CustomColumn = ({ value }) => (
    <span style={{  }}>{value}</span>
  );
  const Active = ({ value }) => (
    <span style={{  }}>{value === 'Y' ? 'True' : 'False'}</span>
  );
  const Edit = ({ value }) => (
    <Link to={`dashboard/detail/${value}`}>
      {" "}
      <span style={{ color: "#0000AA" }}>Edit</span>
    </Link>
  );

  return (
    <div className="container mt-5">
      <Griddle
        data={output}
        plugins={[plugins.LocalPlugin]}
        styleConfig={styleConfig}
      >
        <RowDefinition>
          <ColumnDefinition title="ID" id="id" customComponent={CustomColumn} />
          <ColumnDefinition title="Title" id="title" />

          <ColumnDefinition
            title="Is Active"
            id="is_active"
            customComponent={Active}
          />

          <ColumnDefinition
            id="id"
            title="Action"
            customComponent={(e) => Edit(e)}
          />
        </RowDefinition>
      </Griddle>
    </div>
  );
};

export default Index;
