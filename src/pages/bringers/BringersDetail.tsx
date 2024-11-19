import { Avatar, Button, Col, Form, Rate, Row, Tabs } from "antd";
import React from "react";
import InputComponent from "../../components/input/InputComponent";
import { SubmitHandler, useForm } from "react-hook-form";
import DatePickerComponent from "../../components/datepicker/DatePickerComponent";
import Wrapper from "../../components/shared/Wrapper";
import HeaderBarPage from "../../components/shared/HeaderBarPage";
import WrapperContent from "../../components/shared/WrapperContent";
import { useParams } from "react-router-dom";
import Tables from "../../components/table/Tables";
import user from "@/assets/user.png";

interface BringersDetailProps {}

const BringersDetail: React.FC<BringersDetailProps> = ({}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<{}> = (data) => {
    console.log(data); // Handle form submission here
  };

  let { id } = useParams();

  const items = [
    {
      label: "Bringer Detail",
      key: "1",
      children: (
        <div className="p-5 border-2 border-sub rounded-2xl">
          <div className="flex flex-row justify-start items-center gap-3">
            <div className="flex flex-col justify-start items-center gap-1 ">
              <Avatar size={128} src={user} alt="User Avatar" />
              <Button className="bg-gray-200" type="text">
                Upload
              </Button>
            </div>
            <div className="flex w-full flex-col sm:flex-row sm:items-center sm:justify-between">
              <span className="flex-1 mb-2 sm:mb-0">
                Rating : <Rate allowHalf defaultValue={3.5} />
              </span>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-2">
                <Button className="bg-gray-200" type="text">
                  Reset OTP
                </Button>
                <Button className="bg-gray-200" type="text">
                  Save
                </Button>
              </div>
            </div>
          </div>
          <div className="p-2">
            <Form layout="vertical">
              <Row gutter={16}>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="Name">
                    <InputComponent name="name" control={control} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="Surname">
                    <InputComponent name="surname" control={control} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="Nickname">
                    <InputComponent name="nickname" control={control} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="Date Of Birth">
                    <DatePickerComponent name="DOB" control={control} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="Mobile No">
                    <InputComponent name="mobile_no" control={control} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="Plate No">
                    <InputComponent name="plate_no" control={control} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="Plate Province">
                    <InputComponent name="plate_province" control={control} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="ID Card">
                    <InputComponent name="ID_card" control={control} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="Gender">
                    <InputComponent name="gender" control={control} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="Vehicle Brand">
                    <InputComponent name="vihicle_brand" control={control} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="Vehicle Model">
                    <InputComponent name="vihicle_model" control={control} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="Vehicle Color">
                    <InputComponent name="vihicle_color" control={control} />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      ),
    },
    {
      label: "Booking",
      key: "2",
      children: <Tables />,
    },
  ];

  return (
    <Wrapper>
      <div>
        <HeaderBarPage title={"Bringer"} subTitle={`BRG0000${id}`} />
      </div>
      <WrapperContent>
        <Tabs defaultActiveKey="1" items={items} />
      </WrapperContent>
    </Wrapper>
  );
};

export default BringersDetail;
