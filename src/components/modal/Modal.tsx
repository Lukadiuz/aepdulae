import React, { ReactNode, useState } from "react";
import { Button, Modal } from "antd";

interface ModalComponentProps {
  onSubmit?: () => void;
  onCancel?: () => void;
  isOpen: boolean;
  children?: ReactNode;
  width?: number;
  title: string;
  isNew?: boolean;
}

const ModalComponent: React.FC<ModalComponentProps> = ({
  onSubmit,
  onCancel,
  isOpen,
  children,
  width,
  title,
  isNew,
}) => {
  return (
    <>
      <Modal
        width={width}
        title={title}
        open={isOpen}
        onOk={onSubmit}
        onCancel={onCancel}
        footer={
          <div className="text-center">
            <Button type="primary">{isNew ? "Create" : "Save"}</Button>
          </div>
        }
      >
        <div>{children}</div>
      </Modal>
    </>
  );
};

export default ModalComponent;
