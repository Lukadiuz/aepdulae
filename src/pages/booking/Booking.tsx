import React, { useEffect } from "react";
import HeaderBarPage from "../../components/shared/HeaderBarPage";
import Tables from "../../components/table/Tables";
import Wrapper from "../../components/shared/Wrapper";
import { useNavigate } from "react-router-dom";
import WrapperContent from "../../components/shared/WrapperContent";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { fetchBooking } from "../../store/thunks/bookingThunks";
import { addBooking, deleteBooking } from "../../store/reducers/bookingSlice";
import ButtonComponent from "../../components/buttons/Buttons";
import AntdTable from "../../components/table/AntdTable";
import { ColumnsType } from "antd/es/table";
import { Button, Space } from "antd";
import {
  EditOutlined,
  DeleteOutlined,
  EyeOutlined,
  StarFilled,
} from "@ant-design/icons";
import { FaFileInvoiceDollar, FaPeopleArrows } from "react-icons/fa";

interface BookingProps {}

const Booking: React.FC<BookingProps> = ({}) => {
  let navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.booking
  );

  useEffect(() => {
    dispatch(fetchBooking(10));
  }, [dispatch]);

  const handleViewRow = (id: number) => {
    navigate(`/booking/detail/${id}`);
  };

  const handleAddBooking = async () => {
    // เพิ่ม booking ใหม่
    dispatch(addBooking({ ...data[0], id: data.length + 1 }));
  };

  const handleDeleteBooking = async () => {
    // เพิ่ม booking ใหม่
    dispatch(deleteBooking(2));
  };

  useEffect(() => {
    console.log("🚀 ~ Data has been updated:", data);
  }, [data]);

  const columns: ColumnsType<any> = [
    {
      title: "Name",
      dataIndex: "firstName",
      key: "firstName",
      sorter: (a, b) => a.firstName.localeCompare(b.firstName),
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
      sorter: (a, b) => a.age - b.age,
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
      sorter: (a, b) => a.role.localeCompare(b.address),
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

  const handleEdit = (record: any[]) => {
    console.log("Editing:", record);
    // Implement edit functionality here
  };

  const handleDelete = (record: any[]) => {
    console.log("Deleting:", record);
    // Implement delete functionality here
  };

  const handleChange = (record: any) => {
    handleViewRow?.(record.id);
    // Implement delete functionality here
  };

  const handleWatch = (record: any) => {
    handleViewRow?.(record.id);
  };

  return (
    <Wrapper>
      <div>
        <HeaderBarPage title={"Booking"} showSearch showButton showDatePicker />
      </div>
      <WrapperContent>
        {/* <Tables handleViewRow={handleViewRow} loading={loading} /> */}
        <AntdTable columns={columns} data={data} loading={loading} />
        <div className="flex flex-row gap-2">
          <ButtonComponent type="general" onClick={handleAddBooking}>
            Add Booking
          </ButtonComponent>
          <ButtonComponent type="theme" onClick={handleDeleteBooking}>
            Delete Booking
          </ButtonComponent>
        </div>
      </WrapperContent>
    </Wrapper>
  );
};

export default Booking;
