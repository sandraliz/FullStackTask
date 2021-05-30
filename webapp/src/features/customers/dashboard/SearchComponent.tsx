import React, { useState, FormEvent, SyntheticEvent } from "react";
import { Segment, Form, Button, Table, Menu, Icon, Search } from "semantic-ui-react";
import { ICustomer } from "../../../app/models/customers";
import { v4 as uuid } from "uuid";

interface IProps {
  customers: ICustomer[];
  selectCustomer: (id: string) => void;
  setSearching: (searching: boolean) => void;
  submitting: boolean;
  searching: boolean;
  target: string;
}

const SearchList: React.FC<IProps> = ({
  customers,
  selectCustomer,
  submitting,
  searching,
  target,
  setSearching,
}) => {
  const [searchedCustomers, setSearchCustomers] = useState<ICustomer[] | null>(
    []
  );

  const handleSearchCustomer = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSearchCustomers(searchedCustomers);
    setSearching(true);
  };

  const handleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    const c = customers && customers.filter((a) => a.name == value);
    if (c) {
      setSearchCustomers(c);
      setSearching(true);
    }
  };
  const handleCancelSearch = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setSearching(false);
  };

  return (
    <Segment clearing> 
      <Form>
        <Form.Input
          onChange={handleInputChange}
          name="name"
          placeholder="Name"
        />
        <Button
          onClick={handleSearchCustomer}
          loading={submitting}
          size="tiny"
          floated="right"
          positive
          type="button"
          content="Search"
        />
        <Button
          onClick={handleCancelSearch}
          size="tiny"
          floated="right"
          type="button"
          content="Cancel"
        />
      </Form>
      {searching && (
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
            {searchedCustomers &&
              searchedCustomers.map((customer) => (
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
      )}
    </Segment>
  );
};

export default SearchList;
