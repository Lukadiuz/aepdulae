import React, { useEffect } from "react";
import HeaderBarPage from "../../components/shared/HeaderBarPage";
import Tables from "../../components/table/Tables";
import Wrapper from "../../components/shared/Wrapper";
import { useNavigate } from "react-router-dom";
import WrapperContent from "../../components/shared/WrapperContent";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { fetchBooking } from "../../store/thunks/bookingThunks";

interface BookingProps {}

const Booking: React.FC<BookingProps> = ({}) => {
  let navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.booking
  );

  useEffect(() => {
    dispatch(fetchBooking(1));
  }, [dispatch]);

  const handleViewRow = (id: number) => {
    navigate(`/booking/detail/${id}`);
  };

  return (
    <Wrapper>
      <div>
        <HeaderBarPage title={"Booking"} showSearch showButton showDatePicker />
      </div>
      <WrapperContent>
        <Tables handleViewRow={handleViewRow} loading={loading} />
      </WrapperContent>
    </Wrapper>
  );
};

export default Booking;
