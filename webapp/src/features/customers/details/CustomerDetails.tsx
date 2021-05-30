import React from "react";
import { Card, Label, Button } from "semantic-ui-react";
import { ICustomer } from "../../../app/models/customers";

interface IProps {
  customer: ICustomer;
  setEditMode: (editMode: boolean) => void;
  setSelectedCustomer: (customer: ICustomer | null) => void;
}

const ActivityDetails: React.FC<IProps> = ({
  customer,
  setEditMode,
  setSelectedCustomer,
}) => {
  return (
    <Card fluid>
      <Card.Content>
        <Card.Header>Name : {customer.name}</Card.Header>        
        <Card.Content>Age :{customer.age}</Card.Content>
        <Card.Content>Genger :{customer.gender}</Card.Content>
        <Card.Content>Email :{customer.email}</Card.Content>
        <Card.Content>Phone :{customer.phone}</Card.Content>
        <Card.Content>Address :{customer.address}</Card.Content>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button
            onClick={() => setEditMode(true)}
            basic
            color="blue"
            content="Edit"
          />
          <Button
            onClick={() => setSelectedCustomer(null)}
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};

export default ActivityDetails;
