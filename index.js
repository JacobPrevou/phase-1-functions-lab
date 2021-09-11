function distanceFromHqInBlocks(start) {
    const end = 42;
    return Math.abs(start - end);
}
distanceFromHqInBlocks(43);

function distanceFromHqInFeet(start) {
    const end = 42;
    return Math.abs(start - end) * 264;
}
distanceFromHqInFeet(43);

function distanceTravelledInFeet(start, end) {
    return Math.abs(start - end) * 264;
}
distanceTravelledInFeet(43,48);

function calculatesFarePrice(start, destination) {
    const totalFeetTravelled = Math.abs(start - destination) * 264;
    if (totalFeetTravelled <= 400) {
        return 0;
    } else if (totalFeetTravelled >400 && totalFeetTravelled <= 2000) {
      return (totalFeetTravelled - 400) * 0.02;
    } else if (totalFeetTravelled > 2000 && totalFeetTravelled < 2500) {
      return 25;
    } else if (totalFeetTravelled > 2500) {
      return 'cannot travel that far';
    }
}
