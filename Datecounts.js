import React from "react";
import '../index.css'
import { Col, Row } from "react-bootstrap";

const Datecounts = ({person}) => {
  return (
    <div>
      <Row className="justify-content-center my-2">
        <Col sm="8" className="font py-4"> لديك {person.length} مواعيد </Col>
      </Row>
    </div>
  );
};

export default Datecounts;
