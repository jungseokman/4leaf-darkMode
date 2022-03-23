import React from "react";
import "antd/dist/antd.css";
import Link from "next/link";
import wrapper from "../store/storeConfigure";

const AppShell = ({ Component }) => {
  return (
    <div>
      <Link href={`/1`}>
        <a style={{ padding: "10px", fontSize: `20px` }}>1</a>
      </Link>

      <Link href={`/2`}>
        <a style={{ padding: "10px", fontSize: `20px` }}>2</a>
      </Link>

      <Link href={`/3`}>
        <a style={{ padding: "10px", fontSize: `20px` }}>3</a>
      </Link>

      <Component />
    </div>
  );
};

export default wrapper.withRedux(AppShell);
