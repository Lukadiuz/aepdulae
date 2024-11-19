import React from "react";
import Wrapper from "../../components/shared/Wrapper";
import HeaderBarPage from "../../components/shared/HeaderBarPage";
import WrapperContent from "../../components/shared/WrapperContent";
import {
  Avatar,
  Button,
  Card,
  Checkbox,
  Col,
  Flex,
  Form,
  Input,
  Rate,
  Row,
  Tabs,
  Tooltip,
} from "antd";
import { SubmitHandler, useForm } from "react-hook-form";
import InputComponent from "../../components/input/InputComponent";
import { FaMapMarkedAlt } from "react-icons/fa";
import DatePickerComponent from "../../components/datepicker/DatePickerComponent";
import { SearchOutlined } from "@ant-design/icons";
import photo from "@/assets/photo.png";
import user from "@/assets/user.png";

interface BookingDetailProps {}

const BookingDetail: React.FC<BookingDetailProps> = ({}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<{}> = (data) => {
    console.log(data); // Handle form submission here
  };
  const items = [
    {
      label: "Booking Detail",
      key: "1",
      children: (
        <div className="p-5 border-2 border-sub rounded-2xl">
          <div className="p-2">
            <Form layout="vertical">
              <Row gutter={16}>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="Booking ID">
                    <InputComponent name="booking_id" control={control} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="Booking Status">
                    <InputComponent name="booking_status" control={control} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="Booking Date">
                    <DatePickerComponent
                      name="booking_date"
                      control={control}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="Bringer ID">
                    <InputComponent name="bringer_id" control={control} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="Bringer Name">
                    <InputComponent name="bringer_name" control={control} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="Hospital Address">
                    <InputComponent name="hospital_address" control={control} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="Hospital Location">
                    <InputComponent
                      name="hospital_location"
                      control={control}
                    />
                  </Form.Item>
                </Col>
              </Row>
              <Row gutter={16}>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="Pick-up Address">
                    <InputComponent name="pickup_address" control={control} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="Pick-up Location">
                    <InputComponent name="pickup_location" control={control} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="Drop-off Address">
                    <InputComponent name="dropoff_address" control={control} />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={12} md={6}>
                  <Form.Item label="Drop-off Location">
                    <InputComponent name="dropoff_location" control={control} />
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </div>
        </div>
      ),
    },
    {
      label: "Bringer",
      key: "2",
      children: (
        <div className="p-5 border-2 border-sub rounded-2xl">
          <div className="flex flex-row justify-start items-center gap-3">
            <div className="flex flex-col justify-start items-center gap-1">
              <Avatar size={128} src={user} alt="User Avatar" />
              <Button
                className="bg-gray-200"
                // icon={<SearchOutlined />}
                type="text"
                // iconPosition={"start"}
              >
                Upload
              </Button>
            </div>
            <span>
              Rating : <Rate allowHalf defaultValue={3.5} />
            </span>
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
  ];

  return (
    <Wrapper>
      <div>
        <HeaderBarPage title={"Booking"} subTitle={"WO998899"} />
      </div>
      <WrapperContent>
        <Tabs defaultActiveKey="1" items={items} />
      </WrapperContent>
    </Wrapper>
  );
};

export default BookingDetail;
