import React, { useState, useEffect, Fragment, SyntheticEvent } from 'react';
import { Container } from 'semantic-ui-react';
import { ICustomer } from './app/models/customers'
import NavBar from './features/nav/NavBar';
import CustomerDashboard from './features/customers/dashboard/CustomerDashboard';
import agent from './app/api/agent';
import LoadingComponent from './LoadingComponent';

const App = () => {
  const [customers, setCustomers] = useState<ICustomer[]>([]);
  const [searchedCustomers, setSearchCustomers] = useState<ICustomer[] | null >([]);
  const [selectedCustomer, setSelectedCustomer] = useState<ICustomer | null>(
    null
  );
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [searching, setSearching] = useState(false);
  const [target, setTarget] = useState('');

  const handleOpenCreateForm = () => {
    setSelectedCustomer(null);
    setEditMode(true);
  }

  const handleCreateCustomer = (customer: ICustomer) => {
    setSubmitting(true);
    agent.create(customer).then(() => {
      setCustomers([...customers, customer]);
      setSelectedCustomer(customer);
      setEditMode(false);
    }).then(() => setSubmitting(false));
  }

  const handleEditCustomer = (customer: ICustomer) => {
    setSubmitting(true);
    agent.update(customer).then(() => {
      setCustomers([...customers.filter(a => a.customer_id !== customer.customer_id), customer])
      setSelectedCustomer(customer);
      setEditMode(false);
    }).then(() => setSubmitting(false));
  }

  const handleSelectCustomer = (id: string) => {
    setSelectedCustomer(customers.filter(a => a.customer_id === id)[0]);
    setEditMode(false);
  };


  useEffect(() => {
    agent.list()
      .then(response => {
        let customers: ICustomer[] = [];
        response.forEach((customer) => {
          customers.push(customer);
        })
        setCustomers(customers);
        console.log(customers);
      }).then(() => setLoading(false));
  }, []);

  if (loading) return <LoadingComponent content='Loading customers' />

  return (
    <Fragment>
      <NavBar openCreateForm={handleOpenCreateForm} />
      <Container style={{ marginTop: '7em' }}>
        <CustomerDashboard
          customers={customers}
          selectCustomer={handleSelectCustomer}
          selectedCustomer={selectedCustomer}
          editMode={editMode}
          setEditMode={setEditMode}
          setSelectedCustomer={setSelectedCustomer}
          createCustomer={handleCreateCustomer}
          editCustomer={handleEditCustomer}
          submitting={submitting}
          searching = {searching}
          setSearching={setSearching}
          target={target}
        />
      </Container>
    </Fragment>
  );
};

export default App;
