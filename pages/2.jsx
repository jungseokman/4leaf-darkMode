import React from "react";
import { Wrapper, Ti } from "../utils/globalComponents";
import { useSelector } from "react-redux";
import ThemeBtn from "../components/ThemeBtn";

const Two = () => {
  const { theme } = useSelector((state) => state.mode);

  return (
    <Wrapper bgColor={theme ? "#fff" : "#000"}>
      <ThemeBtn />
      <Ti color={!theme ? "#fff" : "#000"}>Two</Ti>
    </Wrapper>
  );
};

export default Two;
