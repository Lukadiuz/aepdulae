import React from "react";
import Wrapper from "../../components/shared/Wrapper";
import WrapperContent from "../../components/shared/WrapperContent";
import CardChart from "../../components/charts/CardChart";
import { FaListUl, FaRegCalendarCheck } from "react-icons/fa";
import { Col, Row } from "antd";
import ButtonComponent from "../../components/buttons/Buttons";

interface DashboardProps {}

const Dashboard: React.FC<DashboardProps> = ({}) => {
  return (
    <Wrapper>
      <WrapperContent>
        <Row gutter={16} className="gap-3 sm:gap-0">
          <Col xs={24} sm={12} md={6}>
            <CardChart
              text="Open Work Order"
              icon={FaListUl}
              iconColor="bg-red-500"
              amount={24}
              modify={12}
              isIncease
            />
          </Col>
          <Col xs={24} sm={12} md={6}>
            <CardChart
              text="Today Booking"
              icon={FaRegCalendarCheck}
              iconColor="bg-emerald-500"
              amount={8}
              modify={2}
            />
          </Col>
          <Col xs={24} sm={12} md={6}>
            <CardChart
              text="Completed Work Order"
              icon={FaListUl}
              iconColor="bg-orange-400"
              amount={168}
              modify={3}
            />
          </Col>
          <Col xs={24} sm={12} md={6}>
            <CardChart
              text="Open Work Order"
              icon={FaListUl}
              iconColor="bg-indigo-500"
              amount={15}
              modify={5}
              isIncease
            />
          </Col>
        </Row>
        <div className="flex flex-row m-2 gap-2">
          <ButtonComponent type="theme">Login</ButtonComponent>
          <ButtonComponent type="general">Create Work Order</ButtonComponent>
          <ButtonComponent type="primary">Submit</ButtonComponent>
          <ButtonComponent type="danger">Cancel</ButtonComponent>
        </div>
      </WrapperContent>
    </Wrapper>
  );
};

export default Dashboard;
