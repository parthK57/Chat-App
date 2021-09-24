import React from "react";
import Footer from "../components/footer/index.jsx";
import {
  Form,
  Button,
  Label,
  Input,
  Container,
  FormContainer,
  Text,
} from "../styles/root";
import { FaAngleRight } from "react-icons/fa";
import { RiGroup2Fill } from "react-icons/ri";

function login() {
  return (
    <>
      <Container>
        <Text>
          The <br />
          Social
          <RiGroup2Fill
            style={{ position: "relative", top: "10px", color: "#4285f4" }}
          />
        </Text>
        <FormContainer>
          <h2 style={{ position: "relative", top: "-60px" }}>Sign In</h2>
          <Form action="" method="get">
            <Label htmlFor="">Username:</Label>
            <Input type="text" />
            <Label htmlFor="" style={{ marginTop: "20px" }}>
              Password:
            </Label>
            <Input type="text" />
            <Button type="submit">
              Submit <FaAngleRight />
            </Button>
            <p style={{ position: "relative", top: "35px" }}>
              Forgot password?
            </p>
          </Form>
        </FormContainer>
      </Container>
      <Footer />
    </>
  );
}

export default login;
