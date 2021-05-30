import React from "react";
import { Menu, Container, Button, Icon } from "semantic-ui-react";

interface IProps {
  openCreateForm: () => void;
}

const NavBar: React.FC<IProps> = ({ openCreateForm }) => {
  return (
    <Menu fixed="top" inverted>
      <Container>
        <Menu.Item header>Dashboard</Menu.Item>
        <Menu.Item name="Customers" />
        <Menu.Item>
          <Button onClick={openCreateForm} positive >
            <Icon name="user" /> Add Customer
          </Button>
        </Menu.Item>
      </Container>
    </Menu>
  );
};

export default NavBar;
