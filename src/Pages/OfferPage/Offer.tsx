import { useLocation } from "react-router-dom";
import { CarData } from "../CardsPage/mockCarData";

export const Offer = () => {
  const { state } = useLocation();
  const currentCar = CarData.find((x) => x.id === state.id);
  return <p>{currentCar?.title}</p>;
};
