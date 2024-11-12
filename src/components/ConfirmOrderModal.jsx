import React from "react";
import Modal from "react-bootstrap/Modal";
import { IoCheckmarkCircle } from "react-icons/io5";
import { TbBrandXFilled } from "react-icons/tb";
import { useContext } from "react";
import { CartContext } from "../context";

const ConfirmOrderModal = ({ showModal, setShowModal, itemsOrdered }) => {
  const { cart, totalPrice, startNewOrder } = useContext(CartContext);
  return (
    <div>
      <Modal centered show={showModal}>
        <Modal.Body>
          <div className="d-flex justify-content-between my-4">
            <IoCheckmarkCircle />
            <TbBrandXFilled />
          </div>
          <h1>Order Confirmed</h1>
          <p> We hope you enjoy your order</p>

          {cart.map((cartItem) => {
            return (
              <div
                key={cartItem.id}
                className=" d-flex justify-content-between align-items-center"
              >
                <div className="d-flex gap-2 align-items-center">
                  <img src={cartItem.image} alt="" width={"95px"} />
                  <div>
                    <p>{cartItem.title} </p>
                    <span>{cartItem.quantity}x </span>
                    <span>{cartItem.price} </span>
                  </div>
                </div>
                <div>
                  <h4>N{cartItem.price * cartItem.quantity} </h4>
                </div>
              </div>
            );
          })}

          <div className="d-flex align-items-center justify-content-between my-3">
            <p className="text-secondary fs-6">Delivery</p>
            <h3 className="fs-5"> 2000</h3>
          </div>

          <div className="d-flex justify-content-between my-3 align-items-center">
            <p className="fs-6">Order Total</p>
            <h3 className="fs-5"> N{totalPrice + 2000} </h3>
          </div>
          <button
            className="main-color-bg border-0 p-2 rounded-3  my-2 text-white fs-5 fw-bold w-100"
            style={{ height: "50px" }}
            onClick={startNewOrder}
          >
            Start New Order
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default ConfirmOrderModal;
