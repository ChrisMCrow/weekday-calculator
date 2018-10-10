
import { thisDate, dateToDay } from './../src/date.js';

describe('thisDate', function() {
    it('should validate return integer date of today', function() {

        let day = thisDate();
        expect(day).toEqual(3)
    });
});

describe('thisDate', function() {
    it('should validate return integer date of today', function() {

        let today = new Date(2018, 9, 10);
        expect(dateToDay(today)).toEqual("Wednesday")
    });
});

