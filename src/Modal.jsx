import React, { useState } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div className="modal">
          <div className="modal-content">
            {/* // Add your content here */}
            <h3>
              Many Freshers are transformed to employable resources from our
              Bootcamp Training. Industry level problem statements, design
              patterns and bestpractices are inducted in freshes with
              minimalistic approach is our approach.{" "}
            </h3>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              odit laudantium commodi suscipit, delectus omnis. Temporibus saepe
              consequatur porro qui mollitia nostrum perferendis, doloribus
              aliquam soluta similique excepturi magnam laboriosam?
            </p>
            <button onClick={closeModal}>Close Modal</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
