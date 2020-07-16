import React, { useState, useEffect } from "react";
import PageDefault from "../../../components/global/pageDefault";
import ApiStepper from "../../../components/global/stepper";
import { Collapse, Drawer, Button, Fab, Badge } from "@material-ui/core";
import { formatCurrency } from "../../../utils/Formater";
import { listaAll } from "../../../services/SalesProductsService";
import MUIDataTable from "mui-datatables";
import SelectSalesItemDrawer from "../../../components/custom/salesDrawer";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const NewSale = () => {
  const [step, setStep] = useState(0);

  const [salesProducts, setSalesProducts] = useState([]);
  const [selectedSalesProducts, setSelectedSalesProducts] = useState([]);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleStepBack = () => {
    setStep(step - 1);
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  useEffect(() => {
    async function data() {
      await listaAll()
        .then((response) => {
          setSalesProducts(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    data();
  }, []);

  const steps = ["Select a Service or a Item", "Client Data", "Last infos"];

  const columns = [
    {
      name: "type",
      label: "type",
      options: {
        filter: true,
        sort: true,
        customBodyRender: (type) => type.name,
      },
    },
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
      name: "value",
      label: "Value",
      options: {
        filter: false,
        sort: false,
        customBodyRender: (value) => formatCurrency(value, "pt-BR"),
      },
    },
  ];

  const onRowsSelect = (curRowSelected, allRowsSelected) => {
    let newArray = [];
    allRowsSelected.forEach((element) => {
      newArray.push(salesProducts[element.dataIndex]);
    });
    console.log("2222", newArray);
    setSelectedSalesProducts(newArray);
  };

  const options = {
    download: false,
    filter: true,
    search: true,
    selectableRowsHeader: true,
    selectableRows: "multiple",
    selectableRowsOnClick: true,
    pagination: true,
    rowsPerPageOptions: [5, 10, 15],
    rowsPerPage: 5,
    selectToolbarPlacement: "none",
    onRowsSelect: onRowsSelect,
  };

  return (
    <PageDefault title='New sale'>
      <ApiStepper
        handleNext={handleNextStep}
        handleBack={handleStepBack}
        activeStep={step}
        steps={steps}
      >
        <div style={{ textAlign: "end" }}>
          <Fab
            color='primary'
            aria-label='add'
            size='small'
            onClick={() => setOpenDrawer(!openDrawer)}
          >
            <Badge
              badgeContent={selectedSalesProducts.length}
              color='secondary'
            >
              <ShoppingCartIcon />
            </Badge>
          </Fab>
        </div>
        <Collapse
          in={step == 0}
          style={{ transitionDelay: step === 0 ? "500ms" : "0ms" }}
        >
          <div>
            <MUIDataTable
              columns={columns}
              data={salesProducts}
              title={"  "}
              options={options}
            />
          </div>
        </Collapse>
        <SelectSalesItemDrawer
          open={openDrawer}
          items={selectedSalesProducts}
          onCloseHandler={() => setOpenDrawer(!openDrawer)}
        />
        {/* <ApiAccordions /> */}
      </ApiStepper>
    </PageDefault>
  );
};

export default NewSale;
