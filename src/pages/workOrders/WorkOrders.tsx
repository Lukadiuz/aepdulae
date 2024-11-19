import React, { FormEvent, useEffect, useState } from "react";
import Tables from "../../components/table/Tables";
import HeaderBarPage from "../../components/shared/HeaderBarPage";
import Wrapper from "../../components/shared/Wrapper";
import { Outlet, useNavigate } from "react-router-dom";
import ModalComponent from "../../components/modal/Modal";
import { Col, Form, Input, Row } from "antd";
import InputComponent from "../../components/input/InputComponent";
import DatePickerComponent from "../../components/datepicker/DatePickerComponent";
import { useForm } from "react-hook-form";
import TimePickerComponent from "../../components/timepicker/TimePickerComponent";
import { SearchOutlined } from "@ant-design/icons";
import { FaMapMarkedAlt } from "react-icons/fa";
import WrapperContent from "../../components/shared/WrapperContent";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { fetchWorkOrders } from "../../store/thunks/workOrdersThunks";

interface WorkOrdersProps {}

const WorkOrders: React.FC<WorkOrdersProps> = ({}) => {
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.workOrder
  );

  useEffect(() => {
    dispatch(fetchWorkOrders(1));
  }, [dispatch]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  let navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

  const createWorkOrders = () => {
    navigate("/work-orders/create");
  };

  const handleViewRow = (id: number) => {
    navigate(`/work-orders/detail/${id}`);
  };

  const handleOpenDialog = (id: number) => {
    // navigate(`/work-orders/detail/${id}`);
    setIsModalOpen(true);
  };

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Search text:", event.target.value);
  };

  return (
    <Wrapper>
      <div>
        <HeaderBarPage
          title={"WorkOrders"}
          showSearch
          showDatePicker
          clicked={createWorkOrders}
          showButton
        />
      </div>
      <WrapperContent>
        <Tables
          handleViewRow={handleViewRow}
          handleOpenDialog={handleOpenDialog}
          loading={loading}
        />
      </WrapperContent>
      <ModalComponent
        title="Bringer Booking Detail"
        width={1000}
        isOpen={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
      >
        <div>
          <Form layout="vertical">
            <Row gutter={16}>
              <Col xs={24} md={8}>
                <Form.Item label="Booking Date">
                  <DatePickerComponent name="booking_date" control={control} />
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item label="Booking Time">
                  <TimePickerComponent name="booking_time" control={control} />
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item label="Bringer">
                  {/* <InputComponent
                    name="booking_id"
                    control={control}
                    icon={<SearchOutlined />}
                  /> */}
                  <Input
                    placeholder="Enter search text"
                    prefix={<SearchOutlined />}
                    allowClear
                    size="large"
                    onInput={onSearch}
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col xs={24} md={8}>
                <Form.Item label="Find Pick-up Location">
                  <InputComponent
                    name="find_pick-up_location"
                    control={control}
                    icon={<FaMapMarkedAlt />}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item label="Find Hospital">
                  <InputComponent
                    name="find_hospital"
                    control={control}
                    icon={<FaMapMarkedAlt />}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} md={8}>
                <Form.Item label="Find Drop-off Location">
                  <InputComponent
                    name="find_drop-off_location"
                    control={control}
                    icon={<FaMapMarkedAlt />}
                  />
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </ModalComponent>
    </Wrapper>
  );
};

export default WorkOrders;
