import React from "react";
import { Wrapper, Ti } from "../utils/globalComponents";
import { useSelector } from "react-redux";
import ThemeBtn from "../components/ThemeBtn";

const Three = () => {
  const { theme } = useSelector((state) => state.mode);

  return (
    <Wrapper bgColor={theme ? "#fff" : "#000"}>
      <ThemeBtn />
      <Ti color={!theme ? "#fff" : "#000"}>Three</Ti>
    </Wrapper>
  );
};

export default Three;
