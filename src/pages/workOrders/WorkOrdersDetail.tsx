import {
  Button,
  Card,
  Carousel,
  Checkbox,
  Col,
  Divider,
  Form,
  Input,
  Rate,
  Row,
  Tabs,
} from "antd";
import React from "react";
import { FaMapMarkedAlt } from "react-icons/fa";
import HeaderBarPage from "../../components/shared/HeaderBarPage";
import { useParams } from "react-router-dom";
import Wrapper from "../../components/shared/Wrapper";
import WrapperContent from "../../components/shared/WrapperContent";
import InputComponent from "../../components/input/InputComponent";
import { SubmitHandler, useForm } from "react-hook-form";
import DatePickerComponent from "../../components/datepicker/DatePickerComponent";
import photo from "@/assets/photo.png";

interface WorkOrdersDetailProps {}

const WorkOrdersDetail: React.FC<WorkOrdersDetailProps> = ({}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let { id } = useParams();

  const onSubmit: SubmitHandler<{}> = (data) => {
    console.log(data); // Handle form submission here
  };

  const images = [
    `https://rickandmortyapi.com/api/character/avatar/${1}.jpeg`,
    `https://rickandmortyapi.com/api/character/avatar/${2}.jpeg`,
    `https://rickandmortyapi.com/api/character/avatar/${3}.jpeg`,
  ];

  const items = [
    {
      label: "Work Order Detail",
      key: "1",
      children: (
        <div className="p-5 border-2 border-sub rounded-2xl">
          <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
            <Row gutter={16}>
              <Col xs={24} sm={24} md={16}>
                <Row gutter={16}>
                  <Col xs={24} sm={12}>
                    <Form.Item label="Work Order ID">
                      <InputComponent name="work_order_id" control={control} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item label="Status">
                      <InputComponent name="status" control={control} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item label="HN Name">
                      <InputComponent name="HN_name" control={control} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item label="HN Age">
                      <InputComponent name="HN_age" control={control} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item label="HN No.">
                      <InputComponent name="HN_number" control={control} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item label="Healthcare Rights">
                      <InputComponent
                        name="healthcare_rights"
                        control={control}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item label="Emergency Contact Name">
                      <InputComponent
                        name="emergency_contact_name"
                        control={control}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12}>
                    <Form.Item label="Emergency Contact Phone">
                      <InputComponent
                        name="emergency_contact_phone"
                        control={control}
                      />
                    </Form.Item>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={8}>
                <div className="flex flex-col">
                  <div className="flex flex-row justify-end items-start p-2">
                    <Button type="primary" htmlType="submit">
                      Update Detail
                    </Button>
                  </div>
                  <Card className="flex justify-center items-center bg-sub h-[300px]">
                    <FaMapMarkedAlt style={{ fontSize: "80px" }} />
                  </Card>
                </div>
              </Col>
            </Row>
          </Form>
        </div>
      ),
    },
    {
      label: "Checklist",
      key: "2",
      children: (
        <div className="p-5 border-2 border-sub rounded-2xl">
          <Row gutter={16}>
            <Col xs={24} md={12}>
              <div className="flex flex-col gap-6">
                <div className="h-2"></div>
                <Checkbox className="pb-2 border-b border-gray-400">
                  <div>
                    <h4>ไปรับ</h4>
                    <span>
                      DD/MM/YYYY HH:mm:ss @ Location: Lat xxxx, Long yyyy
                    </span>
                  </div>
                </Checkbox>
                <Checkbox className="pb-2 border-b border-gray-400">
                  <div>
                    <h4>ถึงโรงพยาบาล</h4>
                    <span>DD/MM/YYYY HH:mm:ss</span>
                  </div>
                </Checkbox>
                <Checkbox className="pb-2 border-b border-gray-400">
                  <div>
                    <h4>พบแพทย์</h4>
                    <span>DD/MM/YYYY HH:mm:ss</span>
                  </div>
                </Checkbox>
                <Checkbox className="pb-2 border-b border-gray-400">
                  <div>
                    <h4>ชำระเงิน</h4>
                    <span>DD/MM/YYYY HH:mm:ss</span>
                  </div>
                </Checkbox>
                <Checkbox className="pb-2 border-b border-gray-400">
                  <div>
                    <h4>รับยา</h4>
                    <span>DD/MM/YYYY HH:mm:ss</span>
                  </div>
                </Checkbox>
                <Checkbox className="pb-2 border-b border-gray-400">
                  <div>
                    <h4>ถึงจุดหมาย</h4>
                    <span>
                      DD/MM/YYYY HH:mm:ss @ Location: Lat xxxx, Long yyyy
                    </span>
                  </div>
                </Checkbox>
              </div>
            </Col>

            <Col xs={24} md={12}>
              <div>
                <div className="h-10">
                  <h1>ผลการพบแพทย์</h1>
                </div>
                <Form layout="vertical">
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item label="Symptom">
                        <InputComponent name="symptom" control={control} />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item label="Specific Physical Examination Result">
                        <InputComponent
                          name="specific_physical_examination_result"
                          control={control}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item label="Doctor Diagnosis">
                        <InputComponent
                          name="doctor_diagnosis"
                          control={control}
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item label="Doctor Identify Disease">
                        <InputComponent
                          name="doctor_identify_disease"
                          control={control}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item label="Treatment Methods">
                        <InputComponent
                          name="treatment_methods"
                          control={control}
                        />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Form.Item label="Doctor Advice">
                    <Input.TextArea placeholder="Add text" rows={4} />
                  </Form.Item>
                </Form>
              </div>
            </Col>
          </Row>
        </div>
      ),
    },
    {
      label: "Payment",
      key: "3",
      children: (
        <div className="p-5 border-2 border-sub rounded-2xl">
          <Form layout="vertical">
            {[1, 2].map((_, index) => (
              <div
                key={index}
                className="border-2 border-sub rounded-2xl p-2 mb-3"
              >
                <Row gutter={16}>
                  <Col xs={24} sm={12} md={6}>
                    <Form.Item label="Payment ID">
                      <InputComponent name="payment_id" control={control} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={6}>
                    <Form.Item label="Transaction ID">
                      <InputComponent name="transaction_id" control={control} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={6}>
                    <Form.Item label="Payment Method">
                      <InputComponent name="payment_method" control={control} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={6}>
                    <Form.Item label="Payment Amount">
                      <InputComponent name="payment_amount" control={control} />
                    </Form.Item>
                  </Col>
                </Row>
                <Row gutter={16}>
                  <Col xs={24} sm={12} md={6}>
                    <Form.Item label="Payment Date">
                      <DatePickerComponent
                        name="payment_date"
                        control={control}
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={6}>
                    <Form.Item label="Status">
                      <InputComponent name="status" control={control} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={6}>
                    <Form.Item label="Fee">
                      <InputComponent name="fee" control={control} />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={12} md={6}>
                    <Form.Item label="Discount [Promo Code : xxxx]">
                      <InputComponent name="discount" control={control} />
                    </Form.Item>
                  </Col>
                </Row>
              </div>
            ))}
          </Form>
        </div>
      ),
    },
    {
      label: "Booking",
      key: "4",
      children: (
        <div className="p-5 border-2 border-sub rounded-2xl">
          <div className="p-2 mb-3">
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
      label: "Review",
      key: "5",
      children: (
        <div className="p-5 border-2 border-sub rounded-2xl">
          <div className="flex flex-col justify-center items-center gap-4">
            <div className="w-full max-w-4xl mx-auto">
              <Carousel
                arrows
                autoplay
                // dots={false} // Remove dots if desired
                infinite
              >
                {[1, 2, 3].map((img, index) => (
                  <div key={index}>
                    <div className="h-[300px] flex flex-row justify-center items-center bg-gray-200">
                      <img
                        src={photo}
                        alt={`carousel-img-${index}`}
                        className="w-64 rounded-lg"
                      />
                    </div>
                  </div>
                ))}
              </Carousel>
            </div>
            <div>
              <Input.TextArea
                className="w-[300px] sm:w-[400px]"
                placeholder="Comment..........."
                rows={3}
              />
            </div>
            <span>
              Rating : <Rate allowHalf defaultValue={2.5} />
            </span>
            <span>Date : DDMMYYYY</span>
          </div>
        </div>
      ),
    },
  ];

  return (
    <Wrapper>
      <div>
        <HeaderBarPage title={"WorkOrders"} subTitle={"WO998899"} />
      </div>
      <WrapperContent>
        <Tabs defaultActiveKey="1" items={items} />
      </WrapperContent>
    </Wrapper>
  );
};

export default WorkOrdersDetail;
