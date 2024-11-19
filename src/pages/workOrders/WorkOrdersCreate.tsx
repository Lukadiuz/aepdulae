import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { FaMapMarkedAlt } from "react-icons/fa";
import { Dayjs } from "dayjs";
import {
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  Space,
  TimePicker,
} from "antd";
import HeaderBarPage from "../../components/shared/HeaderBarPage";
import { SearchOutlined } from "@ant-design/icons";
import InputComponent from "../../components/input/InputComponent";
import SelectComponent from "../../components/select/SelectComponent";
import DatePickerComponent from "../../components/datepicker/DatePickerComponent";
import TimePickerComponent from "../../components/timepicker/TimePickerComponent";
import Wrapper from "../../components/shared/Wrapper";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

interface FormData {
  // username: string;
  familyProfile: string;
  hnName: string;
  hnAge: string;
  hnNumber: string;
  healthcareRights: string;
  emergencyContactName: string;
  emergencyContactPhone: string;
  bookingDate: Dayjs;
  bookingTime: Dayjs;
  bringer: string;
  pickUpLocation: string;
  hospitalLocation: string;
  dropOffLocation: string;
}

const WorkOrdersCreate: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let navigate = useNavigate();

  const onSubmit: SubmitHandler<{}> = (data) => {
    console.log(data);
  };

  const goBack: SubmitHandler<{}> = () => {
    navigate("/work-orders", { replace: true });
  };

  return (
    <Wrapper>
      <div>
        <HeaderBarPage title={"WorkOrders"} subTitle={"Create New"} />
      </div>
      <div className="rounded-2xl bg-white p-3 dark:bg-neutral-100 min-w-64 overflow-x-auto">
        <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
          {/* <Form.Item style={{ width: "100%" }}> */}
          <h2 className="text-slate-600 font-semibold">User Detail</h2>
          <div className="flex flex-col gap-2">
            <Row gutter={16}>
              <Col xs={24} md={6}>
                <Form.Item label="Username">
                  <InputComponent
                    name="username"
                    control={control}
                    icon={<SearchOutlined />}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={6}>
                <Form.Item label="Family Profile">
                  <SelectComponent name="profile" control={control} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} md={6}>
                <Form.Item label="HN Name">
                  <InputComponent name="HN_name" control={control} />
                </Form.Item>
              </Col>
              <Col xs={24} md={6}>
                <Form.Item label="HN Age">
                  <InputComponent name="HN_age" control={control} />
                </Form.Item>
              </Col>
              <Col xs={24} md={6}>
                <Form.Item label="HN Number">
                  <InputComponent name="HN_number" control={control} />
                </Form.Item>
              </Col>
              <Col xs={24} md={6}>
                <Form.Item label="Healthcare Rights">
                  <SelectComponent name="healthcare_rights" control={control} />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} md={6}>
                <Form.Item label="Emergency Contact Name">
                  <InputComponent
                    name="emergency_contact_name"
                    control={control}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={6}>
                <Form.Item label="Emergency Contact Phone">
                  <InputComponent
                    name="emergency_contact_phone"
                    control={control}
                  />
                </Form.Item>
              </Col>
            </Row>
          </div>

          <h2 className="text-slate-600 font-semibold">Booking Detail</h2>
          <div className="flex flex-col gap-2">
            <Row gutter={16}>
              <Col xs={24} md={6}>
                <Form.Item label="Booking Date">
                  <DatePickerComponent name="booking_date" control={control} />
                </Form.Item>
              </Col>
              <Col xs={24} md={6}>
                <Form.Item label="Booking Time">
                  <TimePickerComponent name="booking_time" control={control} />
                </Form.Item>
              </Col>
              <Col xs={24} md={6}>
                <Form.Item label="Find Available Bringer">
                  <InputComponent
                    name="find_available_bringer"
                    control={control}
                    icon={<SearchOutlined />}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} md={6}>
                <Form.Item label="Find Pick-up Location">
                  <InputComponent
                    name="find_pick-up_location"
                    control={control}
                    icon={<FaMapMarkedAlt />}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={6}>
                <Form.Item label="Find Hospital">
                  <InputComponent
                    name="find_hospital"
                    control={control}
                    icon={<FaMapMarkedAlt />}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={6}>
                <Form.Item label="Find Drop-off Location">
                  <InputComponent
                    name="find_drop-off_location"
                    control={control}
                    icon={<FaMapMarkedAlt />}
                  />
                </Form.Item>
              </Col>
            </Row>
          </div>

          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                Create Work Order
              </Button>
              <Button htmlType="button" onClick={goBack}>
                Cancel
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </Wrapper>
  );
};

export default WorkOrdersCreate;
