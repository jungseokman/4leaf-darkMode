import React from "react";
import { Wrapper, Ti } from "../utils/globalComponents";
import { useSelector } from "react-redux";
import ThemeBtn from "../components/ThemeBtn";

const One = () => {
  const { theme } = useSelector((state) => state.mode);

  return (
    <Wrapper bgColor={theme ? "#fff" : "#000"}>
      <ThemeBtn />
      <Ti color={!theme ? "#fff" : "#000"}>One</Ti>
    </Wrapper>
  );
};

export default One;
