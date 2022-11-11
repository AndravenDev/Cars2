import { CarData } from "../Pages/CardsPage/mockCarData";

interface PriceAnalysis {
    isCheaperThanAverage: boolean;
    averagePrice: number;
    offsetFromAverage: number;
    maxPrice: number;
    minPrice: number;
}

export const comparePricesByBrand = (brand: string, price: number): PriceAnalysis => {
    const carsOfThatBrand = CarData.filter(x => x.brand === brand)
    const averagePrice = (carsOfThatBrand.reduce((prev, current) => prev += current.price, 0) / carsOfThatBrand.length);
    const maxPrice = carsOfThatBrand.reduce((prev, curent) =>  curent.price > prev ? prev = curent.price : prev, 0);
    const minPrice = carsOfThatBrand.reduce((prev, curent) =>  curent.price < prev ? prev = curent.price : prev, 999999);

    const isWhatPercentOf = (numA: number, numB: number) => {
        return 100 - (numA / numB) * 100;
    }

    const offset = isWhatPercentOf(price, averagePrice);

    const result: PriceAnalysis = {
        isCheaperThanAverage: offset > 0,
        averagePrice,
        offsetFromAverage: Math.abs(offset),
        maxPrice,
        minPrice
    }
    
    return result;
};