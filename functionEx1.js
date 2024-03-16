'use strict';
const bookings=[];
const createBooking= function(flightNum,numPassengers=100,price=200,totalPrice = price*numPassengers)
{
const booking=
{
    flightNum,
    numPassengers,
    price,
    totalPrice
};
console.log(booking);
bookings.push(booking);

};

createBooking('test100',100);
createBooking('test101',120);