import { Avatar, Card } from "antd";
import React from "react";
import { IconType } from "react-icons";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

interface CardChartProps {
  icon: IconType;
  iconColor: string;
  text: string;
  amount: number;
  modify: number;
  isIncease?: boolean;
}

const CardChart: React.FC<CardChartProps> = ({
  amount,
  icon: Icon,
  text,
  iconColor,
  modify,
  isIncease,
}) => {
  return (
    <Card className="p-0 max-w-sm bg-white rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <div className="flex flex-col gap-4 ">
        <div className="flex flex-row justify-between items-start">
          <div className="flex flex-col gap-4">
            <span className="text-gray-700 text-sm font-medium w-40 overflow-hidden text-ellipsis whitespace-nowrap">
              {text}
            </span>
            <span className="text-gray-700 text-3xl font-bold">{amount}</span>
            <div className="flex flex-row items-center">
              {isIncease ? (
                <FaAngleUp className="text-emerald-600" />
              ) : (
                <FaAngleDown className="text-red-500" />
              )}
              <span
                className={`${
                  isIncease ? "text-emerald-600" : "text-red-500"
                } text-sm font-bold`}
              >
                {modify}%
              </span>
            </div>
          </div>
          <div>
            <Avatar className={iconColor} size={50} icon={<Icon />} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CardChart;
