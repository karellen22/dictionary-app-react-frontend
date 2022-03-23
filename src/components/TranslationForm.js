import { React, useState, useEffect } from "react";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import { GetTranslation } from "../services/dictionary";
// import axios from "axios";

const TranlsationForm = () => {
  const [translateFrom, setTranslateFrom] = useState("");
  const [translation, setTranslation] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [validated, setValidated] = useState(false);
  const [show, setShow] = useState(false);

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        event.stopPropagation();
        if (event.currentTarget.checkValidity() === false || translateFrom.trim() === '') {
        } else {
          console.log("translating from: ", translateFrom);
          GetTranslation(
            translateFrom,
            setTranslation,
            setErrorMessage,
            setShow
          );
        }

        setValidated(true);
        setErrorMessage("");
        setShow(false);
      }}
      noValidate
      validated={validated}
    >
      <Row>
      {show && (
        <Alert variant="danger" onClose={() => setShow(false)} dismissible >
          <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
          <p>{errorMessage}</p>
        </Alert>
      )}
        <Form.Group
          as={Col}
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Translate from</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter word or phrase to translate"
            onChange={(event) => setTranslateFrom(event.target.value)}
            required
          />
          <Form.Control.Feedback type="invalid">
            Please enter a word!
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          as={Col}
          className="mb-3"
          controlId="exampleForm.ControlTextarea1"
        >
          <Form.Label>Translation</Form.Label>
          <Form.Control as="textarea" rows={3} readOnly value={translation} />
        </Form.Group>
      </Row>
      <Row>
        <Button variant="primary" type="submit">
          Translate
        </Button>
      </Row>
    </Form>
  );
};

export default TranlsationForm;
