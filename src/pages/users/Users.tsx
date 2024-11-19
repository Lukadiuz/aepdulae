import React, { useEffect, useState } from "react";
import HeaderBarPage from "../../components/shared/HeaderBarPage";
import Tables from "../../components/table/Tables";
import Wrapper from "../../components/shared/Wrapper";
import { useNavigate } from "react-router-dom";
import WrapperContent from "../../components/shared/WrapperContent";

import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../store/store";
import { fetchUser } from "../../store/thunks/userThunks";

const Users: React.FC<{}> = ({}) => {
  let navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { data, loading, error } = useSelector(
    (state: RootState) => state.user
  );

  useEffect(() => {
    dispatch(fetchUser(1));
  }, [dispatch]);

  const handleViewRow = (id: number) => {
    navigate(`/users/detail/${id}`);
  };

  return (
    <>
      <Wrapper>
        <div>
          <HeaderBarPage title={"Users"} showButton showSearch />
        </div>
        <WrapperContent>
          <Tables handleViewRow={handleViewRow} loading={loading} />
        </WrapperContent>
      </Wrapper>
    </>
  );
};

export default Users;
