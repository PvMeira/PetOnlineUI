import React, { useEffect, useState } from "react";
import PageDefault from "../../components/global/pageDefault";
import ServicesListFilter from "./filter";
import { listAll, search } from "../../services/ServicesService";
import MUIDataTable from "mui-datatables";
import { Checkbox, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { formatCurrency } from "../../utils/Formater";
import ApiToolTip from "../../components/global/toolTip/";
import { toggleLoading } from "../../configuration/redux/reducers/application/application-actions";
import { useDispatch } from "react-redux";
import PaginationHelper from "../../components/global/pagination";
import { primaryPaths } from "../../configuration/core/route/Address";

import { useHistory } from "react-router-dom";

const ServicesList = () => {
  const [services, setServices] = useState({ content: [], totalPages: 0 });
  const [name, setName] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const searchServices = async (page, values) => {
    dispatch(toggleLoading());
    setName(values.name);
    search(page, 5, values.name)
      .then((response) => {
        setServices(response.data);
      })
      .finally(() => {
        dispatch(toggleLoading());
      });
  };

  useEffect(() => {
    async function data() {
      searchServices(1, { name });
    }
    data();
  }, []);

  const columns = [
    {
      name: "name",
      label: "Name",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "description",
      label: "Description",
      options: {
        filter: true,
        sort: true,
      },
    },
    {
      name: "isActive",
      label: "Active",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value) => (
          <Checkbox
            checked={value}
            disabled
            inputProps={{ "aria-label": "disabled checkbox" }}
          />
        ),
      },
    },
    {
      name: "value",
      label: "Value",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value) => formatCurrency(value, "pt-BR"),
      },
    },
    {
      name: "Action",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value, tableMeta) => (
          <ApiToolTip text='Edit this Service'>
            <IconButton
              onClick={() =>
                history.push(
                  `${primaryPaths.services}/${
                    services.content[tableMeta.rowIndex].id
                  }`
                )
              }
            >
              <EditIcon />
            </IconButton>
          </ApiToolTip>
        ),
      },
    },
  ];
  const options = {
    download: false,
    filter: false,
    search: false,
    selectableRowsHeader: false,
    selectableRows: "none",
    rowsPerPageOptions: [5, 10, 15],
    rowsPerPage: 5,
    pagination: false,
  };
  useEffect(() => {
    listAll().then(({ data }) => setServices(data));
  }, []);

  const handlePaginationChange = (event, value) => {
    searchServices(value, name);
  };
  return (
    <PageDefault title='Services'>
      <ServicesListFilter onSubmitFunction={searchServices} />
      <MUIDataTable
        columns={columns}
        data={services.content}
        title={"  "}
        options={options}
      />
      <PaginationHelper
        totalPages={services.totalPages}
        handlePaginationChange={handlePaginationChange}
        message
        show={services.content.length}
      />
    </PageDefault>
  );
};

export default ServicesList;
