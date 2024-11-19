import React, { useEffect, useState } from "react";
import {
  Table,
  Switch,
  Image,
  Form,
  Row,
  Col,
  Radio,
  RadioChangeEvent,
} from "antd";
import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import type { ColumnsType, TableProps } from "antd/es/table";
import HeaderBarPage from "../../components/shared/HeaderBarPage";
import ModalComponent from "../../components/modal/Modal";
import { SubmitHandler, useForm } from "react-hook-form";
import InputComponent from "../../components/input/InputComponent";
import DatePickerComponent from "../../components/datepicker/DatePickerComponent";
import SelectComponent from "../../components/select/SelectComponent";
import photo from "@/assets/photo.png";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { fetchPromotion } from "../../store/thunks/promotionThunks";

interface DataType {
  key: number;
  cover: string;
  subject: string;
  detail: string;
  type: string;
  views: number;
  date: string;
}

const Promotion: React.FC = () => {
  const [pageSize, setPageSize] = useState(5);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCreate, setIsCreate] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.promotion
  );

  useEffect(() => {
    dispatch(fetchPromotion(1));
  }, [dispatch]);

  const tableData = Array.from({ length: 46 }).map<DataType>((_, i) => ({
    key: i + 1,
    cover: photo,
    subject: "Subject",
    detail: "Detail...",
    type: "Public",
    views: 999,
    date: "DD-MM-YYYY HH:mm:ss",
  }));

  const columns: ColumnsType<DataType> = [
    {
      title: "Cover",
      dataIndex: "cover",
      key: "cover",
      render: (text: string) => <Image width={100} src={text} alt="Cover" />,
    },
    {
      title: "Subject / Detail",
      dataIndex: "subject",
      key: "subject",
      render: (text: string, record: DataType) => (
        <div>
          <strong>{text}</strong>
          <p>{record.detail}</p>
        </div>
      ),
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Views",
      dataIndex: "views",
      key: "views",
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Actions",
      key: "actions",
      width: 1,
      render: () => (
        <div style={{ display: "flex", gap: "10px" }}>
          <Switch size="small" />
          <EditOutlined onClick={() => handleOpenDialog(false)} />
          <EyeOutlined />
        </div>
      ),
    },
  ];

  const handleOpenDialog = (isNew: boolean) => {
    setIsCreate(isNew);
    setIsModalOpen(true);
  };

  const onSubmit: SubmitHandler<{}> = (data) => {
    console.log(data); // Handle form submission here
  };

  const [value, setValue] = useState(1);
  const onChange = (e: RadioChangeEvent) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const tableProps: TableProps<DataType> = {
    loading,
  };

  return (
    <div className="flex flex-col gap-4 px-5">
      <div>
        <HeaderBarPage
          title={"Promotion"}
          showButton
          clicked={handleOpenDialog}
        />
      </div>
      <div className="rounded-2xl bg-white dark:bg-neutral-100 p-3 overflow-x-auto">
        <Table<DataType>
          {...tableProps}
          columns={columns}
          dataSource={tableData}
          pagination={{
            pageSize: pageSize,
            pageSizeOptions: [5, 10],
            showSizeChanger: true,
            position: ["bottomCenter"],
            onShowSizeChange: (_, size) => setPageSize(size),
          }}
          size="small"
          scroll={{ x: "max-content" }}
        />
      </div>
      <ModalComponent
        title={isCreate ? "Create Promotion" : "Update Promotion"}
        width={1000}
        isOpen={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        isNew={isCreate}
      >
        <div className="p-5">
          <Form onFinish={handleSubmit(onSubmit)} layout="vertical">
            <Row gutter={18}>
              <Col xs={24} sm={12} md={12} lg={12}>
                <Form.Item label="Name">
                  <InputComponent name="name" control={control} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={12} lg={12}>
                <Form.Item label="Short Description">
                  <InputComponent name="short_desc" control={control} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={12} lg={12}>
                <Form.Item label="Discount Type">
                  <SelectComponent name="discount_type" control={control} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={12} lg={12}>
                <Form.Item label="Amount">
                  <InputComponent name="amount" control={control} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={12} lg={12}>
                <Form.Item label="Start Date">
                  <DatePickerComponent name="start_date" control={control} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={12} lg={12}>
                <Form.Item label="End Date">
                  <DatePickerComponent name="end_date" control={control} />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={12} lg={12}>
                <Form.Item label="Limit">
                  <div className="flex flex-row justify-between items-center">
                    <Radio.Group onChange={onChange} value={value}>
                      <Radio value={1}>No Limits</Radio>
                      <Radio value={2}>Limits</Radio>
                    </Radio.Group>
                    <span>:</span>
                    <InputComponent
                      className="w-48 sm:w-64"
                      name="limit_amount"
                      control={control}
                    />
                  </div>
                </Form.Item>
              </Col>
              <Col xs={24} sm={12} md={12} lg={12}>
                <Form.Item label="Active">
                  <div>
                    {/* <label>Active: </label> */}
                    <Switch defaultChecked />
                  </div>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </div>
      </ModalComponent>
    </div>
  );
};

export default Promotion;
