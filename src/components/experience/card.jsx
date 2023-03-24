import React, { useState } from "react";
import "./experience.css";
import Card from "react-bootstrap/Card";
// import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Modal } from "bootstrap";


const CardItem = ({ item }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleCardClick = (item) => {
    setSelectedItem(item);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
    setShowModal(false);
  };

  const renderCardDesc = (desc) => {
    if (desc.length > 115) {
      return desc.substring(0, 115) + " ... ";
    } else {
      return desc;
    }
  };

  return (
    <>
      {item.map((Val) => {
        return (
          <div key={Val.id} className="work__container">
            {/* <Card className={`h-100 ${!Val.skill && 'no-skill'}`} onClick={() => handleCardClick(Val)}> */}
            <Card className={`h-100`} onClick={() => handleCardClick(Val)}>

              <Card.Header>
                <img
                  src={Val.taglogo}
                  alt={Val.name}
                  className="logo__tag"
                />
                {Val.linklogo && (
                  <a href={Val.link} className="logo__link">
                    <img
                      src={Val.linklogo}
                      alt={Val.name}
                      className="logo__tag"
                    />
                  </a>
                )}
              </Card.Header>
              <Card.Body className="d-flex flex-column mt-auto">
                <Card.Title>{Val.name}</Card.Title>
                <Card.Text className="flex-grow-1 text-truncate">
                  {renderCardDesc(Val.desc)}
                </Card.Text>
              </Card.Body>
              {Val.skill && (
                <Card.Footer className="text-muted" style={{ height: "40px" }}>
                  {Val.skill}
                </Card.Footer>
              )}
              {!Val.skill && (
                <Card.Footer style={{ height: "40px" }}></Card.Footer>
              )}
            </Card>
          </div>
        );
      })}



      {/* <!-- Modal --> */}
      {selectedItem &&(
      <div class="modal fade"  id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"   aria-hidden="true" show={showModal} onClick={handleCloseModal}>
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">{selectedItem.name}</h5>
              {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleCloseModal}>Close</button> */}
            </div>
            <div class="modal-body">
              {selectedItem.desc}
            </div>
            <div class="modal-footer">
              {selectedItem.skill && (
                <span className="text-muted">{selectedItem.skill}</span>
              )}
            </div>
          </div>
        </div>
      </div>
      )}
{/* 
      {selectedItem && (
        <Modal 
          show={showModal} onHide={handleCloseModal}
      >
        <Modal.Header>
            <Modal.Title>{selectedItem.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{selectedItem.desc}</Modal.Body>
          <Modal.Footer>
            {selectedItem.skill && (
              <span className="text-muted">{selectedItem.skill}</span>
            )}
            
          </Modal.Footer>
        </Modal>
      )} */}
    </>
  );
};

export default CardItem;
