import React, { useState } from "react";
import { Table, Button, Space } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  StarFilled,
} from "@ant-design/icons";
import type { ColumnsType, TableProps } from "antd/es/table";
import "./tables.css";
import { FaFileInvoiceDollar, FaPeopleArrows } from "react-icons/fa";

// Define a type for the table data
interface DataType {
  key: number;
  name: string;
  age: number;
  address: string;
}

interface FormType {
  handleViewRow?: (id: number) => void;
  handleOpenDialog?: (id: number) => void;
  loading?: boolean;
}

const Tables: React.FC<FormType> = ({
  handleViewRow,
  handleOpenDialog,
  loading,
}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const dataSource = Array.from({ length: 46 }).map<DataType>((_, i) => ({
    key: i + 1,
    name: `John Doe ${i + 1}`,
    age: 32,
    address: `New York. ${i + 1}`,
  }));

  const columns: ColumnsType<DataType> = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      sorter: (a, b) => a.name.localeCompare(b.name),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      sorter: (a, b) => a.address.localeCompare(b.address),
    },
    {
      title: "Action",
      key: "action",
      width: 1,
      render: (_, record) => {
        return record.key % 2 === 0 ? (
          <Space size={1}>
            <Button
              onClick={() => handleEdit(record)}
              icon={<EditOutlined />}
              type="text"
            ></Button>
            <Button
              onClick={() => handleChange(record)}
              icon={<FaPeopleArrows />}
              type="text"
            ></Button>
            <Button
              onClick={() => handleWatch(record)}
              icon={<EyeOutlined />}
              type="text"
            ></Button>
          </Space>
        ) : (
          <Space size={1}>
            <Button
              onClick={() => handleEdit(record)}
              icon={<StarFilled />}
              type="text"
            ></Button>
            <Button
              onClick={() => handleDelete(record)}
              icon={<FaFileInvoiceDollar />}
              type="text"
            ></Button>
            <Button
              onClick={() => handleWatch(record)}
              icon={<EyeOutlined />}
              type="text"
            ></Button>
          </Space>
        );
      },
    },
  ];

  const handleEdit = (record: DataType) => {
    console.log("Editing:", record);
    // Implement edit functionality here
  };

  const handleDelete = (record: DataType) => {
    console.log("Deleting:", record);
    // Implement delete functionality here
  };

  const handleChange = (record: DataType) => {
    handleOpenDialog?.(record.key);
    // Implement delete functionality here
  };

  const handleWatch = (record: any) => {
    handleViewRow?.(record.key);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: (newSelectedRowKeys: React.Key[]) => {
      setSelectedRowKeys(newSelectedRowKeys);
    },
  };

  const [pageSize, setPageSize] = useState(5);

  const tableProps: TableProps<DataType> = {
    loading,
  };

  return (
    <div>
      <Table<DataType>
        {...tableProps}
        rowClassName={(record, index) =>
          index % 2 === 0 ? "table-row-light" : "table-row-dark"
        }
        dataSource={dataSource}
        columns={columns}
        rowSelection={rowSelection}
        pagination={{
          pageSize: pageSize,
          pageSizeOptions: [5, 10],
          showSizeChanger: true,
          position: ["bottomCenter"],
          onShowSizeChange: (_, size) => setPageSize(size),
        }}
        size="small"
      />
    </div>
  );
};

export default Tables;
