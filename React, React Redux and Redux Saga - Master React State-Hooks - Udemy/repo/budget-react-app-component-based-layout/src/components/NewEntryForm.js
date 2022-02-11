import React from "react";
import { Form } from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";

function MainHeader() {
  return (
    <Form unstackable>
      <Form.Group>
        <Form.Input
          icon="tags"
          placeholder="New shiny thing"
          width={12}
          label="Description"
        ></Form.Input>
        <Form.Input
          icon="dollar"
          iconPosition="left"
          placeholder="100.00"
          width={4}
          label="Value"
        ></Form.Input>
      </Form.Group>
      <ButtonSaveOrCancel />
    </Form>
  );
}

export default MainHeader;
