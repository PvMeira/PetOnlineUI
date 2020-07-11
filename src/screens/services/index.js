import React, { useEffect, useState } from "react";
import PageDefault from "../../components/pageDefault";
import ServicesListFilter from "./filter";
import { listAll } from "../../services/ServicesService";
import MUIDataTable from "mui-datatables";
import { Checkbox, IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import { formatCurrency } from "../../utils/Formater";
import ApiToolTip from "../../components/global/toolTip/";

const ServicesList = () => {
  const [services, setServices] = useState([]);

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
        customBodyRender: (value, tableMeta) => () => (
          <ApiToolTip text='Edit this Service'>
            <IconButton
              onClick={() => console.log("teste", services[tableMeta.rowIndex])}
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
  };
  useEffect(() => {
    listAll().then(({ data }) => setServices(data));
  }, []);
  return (
    <PageDefault title='Services'>
      <ServicesListFilter onSubmitFunction={() => console.log("Teste")} />
      <MUIDataTable
        columns={columns}
        data={services}
        title={"  "}
        options={options}
      />
    </PageDefault>
  );
};

export default ServicesList;
