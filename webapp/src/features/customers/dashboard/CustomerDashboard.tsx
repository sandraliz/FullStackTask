import React, { SyntheticEvent } from "react";
import { Grid, GridRow, GridColumn } from "semantic-ui-react";
import { ICustomer } from "../../../app/models/customers";
import CustomerList from "./CustomerList";
import CustomerDetails from "../details/CustomerDetails";
import CustomerForm from "../form/CustomerForm";
import SerachComponent from "./SearchComponent";

interface IProps {
  customers: ICustomer[];
  selectCustomer: (id: string) => void;
  selectedCustomer: ICustomer | null;
  editMode: boolean;
  setEditMode: (editMode: boolean) => void;
  setSearching: (searching: boolean) => void;
  setSelectedCustomer: (customer: ICustomer | null) => void;
  createCustomer: (customer: ICustomer) => void;
  editCustomer: (customer: ICustomer) => void;
  submitting: boolean;
  target: string;
  searching: boolean;
}

const CustomerDashboard: React.FC<IProps> = ({
  customers,
  selectCustomer,
  selectedCustomer,
  editMode,
  setEditMode,
  setSelectedCustomer,
  createCustomer,
  editCustomer,
  submitting,
  target,
  setSearching,
  searching,
}) => {
  return (
    <Grid>
      <GridRow>
        <Grid.Column width={12}>
          <SerachComponent
            customers={customers}
            selectCustomer={selectCustomer}
            submitting={submitting}
            target={target}
            searching={searching}
            setSearching={setSearching}
          />
        </Grid.Column>
      </GridRow>
      <Grid.Column width={12}>
        {!searching && (
          <CustomerList
            customers={customers}
            selectCustomer={selectCustomer}
            submitting={submitting}
            target={target}
          />
        )}
      </Grid.Column>
      <Grid.Column width={4}>
        {selectedCustomer && !editMode && (
          <CustomerDetails
            customer={selectedCustomer}
            setEditMode={setEditMode}
            setSelectedCustomer={setSelectedCustomer}
          />
        )}
        {editMode && (
          <CustomerForm
            key={(selectedCustomer && selectedCustomer.customer_id) || 0}
            setEditMode={setEditMode}
            customer={selectedCustomer!}
            createCustomer={createCustomer}
            editCustomer={editCustomer}
            submitting={submitting}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};

export default CustomerDashboard;
