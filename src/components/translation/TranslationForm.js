import { React, useState } from "react";
import { Row, Col, Form, Button, Alert } from "react-bootstrap";
import { GetTranslation } from "../../services/dictionary";

const TranlsationForm = () => {
  const [translateFrom, setTranslateFrom] = useState("");
  const [translation, setTranslation] = useState("");
  const [validated, setValidated] = useState(false);
  // M: States used for the alert component.
  const [show, setShow] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleErrorMessageHiding = () => {
    setErrorMessage("");
    setShow(false);
  };

  return (
    <Form
      onSubmit={(event) => {
        event.preventDefault();
        if (
          event.currentTarget.checkValidity() === false ||
          translateFrom.trim() === ""
        ) {
        } else {
          console.log("translating from: ", translateFrom);
          GetTranslation(
            translateFrom,
            setTranslation,
            setErrorMessage,
            setShow
          );
          setValidated(true);
        }
        handleErrorMessageHiding();
      }}
      noValidate
      validated={validated}
    >
      <Row>
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
        <Button style={{'marginBottom': '10px'}} variant="primary" type="submit">
          Translate
        </Button>
      </Row>
      <Row>
      {show && (
          <Alert variant="danger" onClose={() => handleErrorMessageHiding()} dismissible>
            <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
            <p>{errorMessage}</p>
          </Alert>
        )}
      </Row>
    </Form>
  );
};

export default TranlsationForm;
