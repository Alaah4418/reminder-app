import React from 'react'
import "../index.css";
import { Col, Row } from "react-bootstrap";
const Nextaction = ({deleteData , viewData}) => {
    return (
        <div>
        <Row className="justify-content-center">
        <Col sm="8" className="d-flex justify-content-between">
          <button onClick={deleteData} className="btnStyle p-2" > مسح الكل</button>
          <button onClick={viewData} className="btnStyle p-2"> عرض البيانات</button>
        </Col>
      </Row>
        </div>
    )
}

export default Nextaction
