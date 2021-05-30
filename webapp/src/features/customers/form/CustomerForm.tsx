import React, { useState, FormEvent } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { ICustomer } from "../../../app/models/customers";
import { v4 as uuid } from "uuid";

interface IProps {
  setEditMode: (editMode: boolean) => void;
  customer: ICustomer;
  createCustomer: (customer: ICustomer) => void;
  editCustomer: (customer: ICustomer) => void;
  submitting: boolean;
}

const CustomerForm: React.FC<IProps> = ({
  setEditMode,
  customer: initialFormState,
  editCustomer,
  createCustomer,
  submitting,
}) => {
  const initializeForm = () => {
    if (initialFormState) {
      return initialFormState;
    } else {
      return {
        customer_id: "",
        name: "",
        age: "",
        gender: "",
        email: "",
        phone: "",
        address: "",
      };
    }
  };

  const [customer, setCustomer] = useState<ICustomer>(initializeForm);

  const handleSubmit = () => {
      console.log(customer);
    if (customer.customer_id.length === 0) {
      let newCustomer = {
        ...customer,
        id: uuid(),
      };
      createCustomer(newCustomer);
    } else {
      editCustomer(customer);
    }
  };

  const handleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setCustomer({ ...customer, [name]: value });
  };

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit}>
        <Form.Input
          onChange={handleInputChange}
          name="name"
          placeholder="Name"
          value={customer.name}
        />
        <Form.Input
          onChange={handleInputChange}
          name="age"
          placeholder="Age"
          value={customer.age}
        />
        <Form.Input
          onChange={handleInputChange}
          name="gender"
          placeholder="Gender"
          value={customer.gender}
        />
        <Form.Input
          onChange={handleInputChange}
          name="email"
          type="email"
          placeholder="Email"
          value={customer.email}
        />
        <Form.Input
          onChange={handleInputChange}
          name="phone"
          placeholder="phone"
          value={customer.phone}
        />
        <Form.Input
          onChange={handleInputChange}
          name="address"
          placeholder="Address"
          value={customer.address}
        />
        <Button
          loading={submitting}
          size="tiny"
          floated="right"
          positive
          type="submit"
          content="Submit"
        />
        <Button
          onClick={() => setEditMode(false)}
          floated="right"
          size="tiny"
          type="button"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
};

export default CustomerForm;
