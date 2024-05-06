import {Movie} from "./movie";
import {Rental} from "./rental";

export interface Customer {
    addRental(arg: Rental): void
    statement(): string
    getName(): string
}

export class ApiCustomer implements Customer {
    public getAmountOwed = (): number => 19

    private name: string;
    private rentals: Rental[] = [];

    public constructor(name: string){
        this.name = name;
    }

    public addRental(arg: Rental) {
        this.rentals.push(arg);
    }

    public getName(): string {
        return this.name;
    }

    public statement(): string {
        let totalAmount: number = 0;
        let frequentRenterPoints: number = 0;
        let result = "Rental Record for " + this.getName() + "\n";

        for (const each of this.rentals) {
            const thisAmount = moviePriceComputation(each);

            // add frequent renter points
            frequentRenterPoints++;
            // add bonus for a two day new release rental
            if ((each.getMovie().getPriceCode() === Movie.NEW_RELEASE) && each.getDaysRented() > 1)
                frequentRenterPoints++;

            // show figures for this rental
            result += "\t" + each.getMovie().getTitle() + "\t" + thisAmount.toFixed(1) + "\n";
            totalAmount += thisAmount;
        }

        // add footer lines
        result += "Amount owed is " + totalAmount.toFixed(1) + "\n";
        result += "You earned " + frequentRenterPoints + " frequent renter points";

        return result;
    }
}
function moviePriceComputation(each: Rental): number {
    switch (each.getMovie().getPriceCode()) {
        case Movie.REGULAR:
            return regularMoviePriceComputation(each);
        case Movie.NEW_RELEASE:
            return newReleaseMoviePriceComputation(each);
        case Movie.CHILDRENS:
            return childrenMoviePriceComputation(each);
    }
}

function childrenMoviePriceComputation(each: Rental) {
    let thisAmount = 1.5;
    if (each.getDaysRented() > 3) {
        thisAmount += (each.getDaysRented() - 3) * 1.5;
    }
    return thisAmount;
}

function newReleaseMoviePriceComputation(each: Rental) {
    return each.getDaysRented() * 3;
}

function regularMoviePriceComputation(each: Rental) {
    let thisAmount = 2;
    if (each.getDaysRented() > 2) {
        thisAmount += (each.getDaysRented() - 2) * 1.5;
    }
    return thisAmount;
}

