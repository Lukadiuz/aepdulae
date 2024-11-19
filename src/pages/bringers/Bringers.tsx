import React, { useEffect } from "react";
import HeaderBarPage from "../../components/shared/HeaderBarPage";
import Tables from "../../components/table/Tables";
import Wrapper from "../../components/shared/Wrapper";
import { useNavigate } from "react-router-dom";
import WrapperContent from "../../components/shared/WrapperContent";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { fetchBringers } from "../../store/thunks/bringersThunks";

interface BringersProps {}

const Bringers: React.FC<BringersProps> = ({}) => {
  let navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.bringers
  );

  useEffect(() => {
    dispatch(fetchBringers(1));
  }, [dispatch]);

  const handleViewRow = (id: number) => {
    navigate(`/bringers/detail/${id}`);
  };
  return (
    <Wrapper>
      <div>
        <HeaderBarPage title={"Bringers"} showSearch showButton />
      </div>
      <WrapperContent>
        <Tables handleViewRow={handleViewRow} loading={loading} />
      </WrapperContent>
    </Wrapper>
  );
};

export default Bringers;
