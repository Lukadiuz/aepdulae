import React, { useEffect, useState } from "react";
import { Table, Switch, Button, Input, Image } from "antd";
import { EditOutlined, EyeOutlined } from "@ant-design/icons";
import type { ColumnsType, TableProps } from "antd/es/table";
import HeaderBarPage from "../../components/shared/HeaderBarPage";
import ModalComponent from "../../components/modal/Modal";
import InputComponent from "../../components/input/InputComponent";
import { useForm } from "react-hook-form";
import SelectComponent from "../../components/select/SelectComponent";
import photo from "@/assets/photo.png";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { fetchNews } from "../../store/thunks/newsThunks";

interface DataType {
  key: number;
  cover: string;
  subject: string;
  detail: string;
  type: string;
  views: number;
  date: string;
}

const News: React.FC = () => {
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
    (state: RootState) => state.news
  );

  useEffect(() => {
    dispatch(fetchNews(1));
  }, [dispatch]);

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

  const tablesData = Array.from({ length: 46 }).map<DataType>((_, i) => ({
    key: i + 1,
    cover: photo,
    subject: "Subject",
    detail: "Detail...",
    type: "Public",
    views: 999,
    date: "DD-MM-YYYY HH:mm:ss",
  }));

  const handleOpenDialog = (isNew: boolean) => {
    setIsCreate(isNew);
    setIsModalOpen(true);
  };

  const tableProps: TableProps<DataType> = {
    loading,
  };

  return (
    <div className="flex flex-col gap-4 px-5">
      <div>
        <HeaderBarPage title={"News"} showButton clicked={handleOpenDialog} />
      </div>
      <div className="rounded-2xl bg-white dark:bg-neutral-100 p-3 overflow-x-auto">
        <Table<DataType>
          {...tableProps}
          columns={columns}
          dataSource={tablesData}
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
        title={isCreate ? "Create News" : "Update News"}
        width={1000}
        isOpen={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        isNew={isCreate}
      >
        <div className="flex flex-col gap-3 p-5">
          <div className="flex flex-row gap-3">
            <div>
              <Image width={150} src={photo} />
            </div>

            <div className="flex flex-col gap-3 w-full  justify-center">
              <InputComponent
                className="w-56 sm:w-full"
                name="subject"
                control={control}
              />
              <div className="flex flex-row items-center gap-3 w-56 sm:w-full">
                <SelectComponent name="type" control={control} />
                <div>
                  <label>active : </label>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>
          </div>
          <Button type="primary">TEXT / HTML EDITOR TOOL</Button>
          <Input.TextArea placeholder="Detail...." rows={4} />
        </div>
      </ModalComponent>
    </div>
  );
};

export default News;
