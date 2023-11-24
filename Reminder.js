import "../index.css";
import { Col, Row } from "react-bootstrap";

const Reminder = ({ person }) => {
  return (
    <div >
      <Row className="justify-content-center">
        <Col sm="8">
          <div className="rectangle p-2">
            {person.length ? (
              person.map((item) => {
                return (
                    <div key={item.id} className="d-flex border-bottom mx-5 my-2">
                      <img
                        alt="person-img"
                        className="imgAvatar"
                        src={item.image}
                      />
                      <div className="px-3">
                        <p className="d-inline fs-5">{item.name}</p>
                        <p className=" fs-6">{item.date}</p>
                      </div>
                    </div>
                );
              })
            ) : (
              <h3 className="text-center py-5">ليس لديك مواعيد اليوم</h3>
            )}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Reminder;
