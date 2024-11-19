import { Avatar, Button, Col, Form, Rate, Row, Tabs, Tag } from "antd";
import React from "react";
import InputComponent from "../../components/input/InputComponent";
import { SubmitHandler, useForm } from "react-hook-form";
import DatePickerComponent from "../../components/datepicker/DatePickerComponent";
import Wrapper from "../../components/shared/Wrapper";
import HeaderBarPage from "../../components/shared/HeaderBarPage";
import WrapperContent from "../../components/shared/WrapperContent";
import { useParams } from "react-router-dom";
import Tables from "../../components/table/Tables";
import SelectComponent from "../../components/select/SelectComponent";
import user from "@/assets/user.png";

interface UsersDetailProps {}

const UsersDetail: React.FC<UsersDetailProps> = ({}) => {
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
      label: "User Detail",
      key: "1",
      children: (
        <div className="p-5 border-2 border-sub rounded-2xl">
          <div className="flex flex-row justify-start items-center gap-3">
            <div className="flex flex-col justify-start items-center gap-1 ">
              <Avatar size={128} src={user} alt="User Avatar" />
              {/* <Button className="bg-gray-200" type="text">
                Upload
              </Button> */}
            </div>
            <div className="flex w-full flex-row">
              <div className="flex flex-col flex-1 gap-3">
                <span>
                  STATUS : <Tag color="#108ee9">ACTIVE</Tag>
                </span>
                <span>
                  TYPE : <Tag color="#87d068">FAMILY OWNER</Tag>
                </span>
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
                  <Form.Item label="ID Card">
                    <InputComponent name="ID_card" control={control} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="Gender">
                    <InputComponent name="gender" control={control} />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      ),
    },
    {
      label: "Health Profile",
      key: "2",
      children: (
        <div className="p-5 border-2 border-sub rounded-2xl">
          <div className="flex flex-col sm:flex-row justify-start items-center gap-3">
            <h1>Health Profile Date : DD/MM/YYYY</h1>
            <SelectComponent name="Health_profile_log" control={control} />
            <h1>Ref : WO.ID</h1>
          </div>
          <div className="p-2">
            <Form layout="vertical">
              <Row gutter={16}>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="Weight (kg)">
                    <InputComponent name="weight" control={control} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="Height (cm)">
                    <InputComponent name="height" control={control} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="Blood Group">
                    <InputComponent name="blood_group" control={control} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="Date Of Birth">
                    <DatePickerComponent name="DD/MM/YYYY" control={control} />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="Cholesterol">
                    <InputComponent name="cholesterol" control={control} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="LDL">
                    <InputComponent name="ldl" control={control} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="HDL">
                    <InputComponent name="hdl" control={control} />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      ),
    },
    {
      label: "Work Orders",
      key: "3",
      children: <Tables />,
    },
  ];

  return (
    <Wrapper>
      <div>
        <HeaderBarPage title={"User"} subTitle={`UUID${id}`} showSelect />
      </div>
      <WrapperContent>
        <Tabs defaultActiveKey="1" items={items} />
      </WrapperContent>
    </Wrapper>
  );
};

export default UsersDetail;
