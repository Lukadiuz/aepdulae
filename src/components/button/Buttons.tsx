import { Button } from "antd";
import React from "react";
import "./buttons.css";

interface ButtonsProps {
  onClick: () => void;
}

const Buttons: React.FC<ButtonsProps> = ({ onClick }) => {
  return (
    <div>
      <Button onClick={onClick} type="primary" className="w-40 btn">
        Logout
      </Button>
    </div>
  );
};

export default Buttons;
