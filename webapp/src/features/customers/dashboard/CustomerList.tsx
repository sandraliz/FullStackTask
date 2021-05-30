import React, { SyntheticEvent } from "react";
import {
  Icon,
  Button,
  Segment,
  Table,
  Menu,
  Checkbox,
} from "semantic-ui-react";
import { ICustomer } from "../../../app/models/customers";

interface IProps {
  customers: ICustomer[];
  selectCustomer: (id: string) => void;
  submitting: boolean;
  target: string;
}

const CustomerList: React.FC<IProps> = ({
  customers,
  selectCustomer,
  submitting,
  target,
}) => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Age</Table.HeaderCell>
          <Table.HeaderCell>Gender</Table.HeaderCell>
          <Table.HeaderCell>Email</Table.HeaderCell>
          <Table.HeaderCell>Phone</Table.HeaderCell>
          <Table.HeaderCell>Address</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {customers.map((customer) => (
          <Table.Row key={customer.customer_id}>
            <Table.Cell>{customer.name}</Table.Cell>
            <Table.Cell>{customer.age}</Table.Cell>
            <Table.Cell>{customer.gender}</Table.Cell>
            <Table.Cell>{customer.email}</Table.Cell>
            <Table.Cell>{customer.phone}</Table.Cell>
            <Table.Cell>{customer.address}</Table.Cell>
            <Table.Cell collapsing>
              <Button
                onClick={() => selectCustomer(customer.customer_id)}
                floated="right"
                content="View"
                color="blue"
              ></Button>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default CustomerList;
