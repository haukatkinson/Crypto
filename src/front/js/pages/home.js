import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { CryptoList } from "../component/cryptoList";

export const Home = () => {
  const { store, actions } = useContext(Context);

  return (
    <>
      <CryptoList />
    </>
  );
};
