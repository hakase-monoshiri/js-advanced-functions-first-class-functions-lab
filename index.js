// Code your solution in this file!
const returnFirstTwoDrivers = (arrayofDrivers) =>
 arrayofDrivers.slice(0,2)
;

const returnLastTwoDrivers = (arrayofDrivers) => arrayofDrivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(integer) {
    return function (fare) {
        return fare * integer;
    }
};

const fareDoubler = (fare) => createFareMultiplier(2)(fare);

const fareTripler = (fare) => createFareMultiplier(3)(fare);

function selectDifferentDrivers (driverArry, driverSelectionFn) {
    return driverSelectionFn(driverArry);
};