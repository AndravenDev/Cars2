import { createContext, PropsWithChildren, useContext, useState } from "react";
import { CarListing } from "../Pages/CardsPage/CardsPage";
import { CarData } from "../Pages/CardsPage/mockCarData";

const FilterContext = createContext({
  filters: {},
  applyFilters: (criteria: string, value: string) => {},
  filteredCars: new Array<CarListing>(),
});

export const FilterProvider = ({ children }: PropsWithChildren) => {
  const [filters, setFilters] = useState<{
    brand?: (car: CarListing) => boolean;
    coupe?: any;
  }>({});
  const [filteredCars, setFilteredCars] = useState<CarListing[]>(CarData);

  const applyFilters = (criteria: string, value: string) => {
    let result = filters;
    result = {
      ...filters,
      [criteria as keyof typeof result]: (car: CarListing) =>
        car[criteria as keyof CarListing] === value,
    };
    let finalCars = CarData;
    const lol = filters.coupe;
    for (const property in result) {
      if (result[property as keyof typeof result]) {
        const file = result[property as keyof typeof result];
        console.log("opa", file);
        finalCars = finalCars.filter(result[property as keyof typeof result]);
      }
    }
    setFilteredCars(finalCars);
    console.log(result);
    setFilters(result);
  };
  return (
    <FilterContext.Provider value={{ filteredCars, filters, applyFilters }}>
      {children}
    </FilterContext.Provider>
  );
};
export const useCarFilters = () => {
  const context = useContext(FilterContext);
  return context;
};
