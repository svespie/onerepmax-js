(function () {
  'use strict';

  //noinspection JSUnresolvedFunction
  describe("OneRepMax", function () {
    //noinspection JSUnresolvedFunction
    describe("Invalid Weight Input - Valid Rep Input", function () {
      // all()
      //noinspection JSUnresolvedFunction
      it("When null for weight is passed into all(), an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all(null, 10)).toEqual({});
      });
        //noinspection JSUnresolvedFunction,JSUnresolvedFunction
      it("When undefined for weight is passed into all(), an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all(undefined, 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When '' for weight is passed into all(), an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all('', 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When 'random string' for weight is passed into all(), an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all('random string', 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When true for weight is passed into all(), an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all(true, 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When false for weight is passed into all(), an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all(true, 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When an empty object for weight is passed into all(), an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all({}, 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When an empty array for weight is passed into all(), an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all([], 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When a populated object for weight is passed into all(), an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all({weight: 135, reps: 10 }, 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When a populated array for weight is passed into all(), an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all([135, 10], 10)).toEqual({});
      });

      // average()
      //noinspection JSUnresolvedFunction
      it("When null for weight is passed into average(), -1 should be returned.", function () {
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
        expect(OneRepMax.average(null, 10)).toEqual(-1);
      });
      //noinspection JSUnresolvedFunction
      it("When undefined for weight is passed into average(), -1 should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.average(undefined, 10)).toEqual(-1);
      });
      //noinspection JSUnresolvedFunction
      it("When '' for weight is passed into average(), -1 should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.average('', 10)).toEqual(-1);
      });
      //noinspection JSUnresolvedFunction
      it("When 'random string' for weight is passed into average(), -1 should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.average('random string', 10)).toEqual(-1);
      });
      //noinspection JSUnresolvedFunction
      it("When true for weight is passed into average(), -1 should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.average(true, 10)).toEqual(-1);
      });
      //noinspection JSUnresolvedFunction
      it("When false for weight is passed into average(), -1 should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.average(true, 10)).toEqual(-1);
      });
      //noinspection JSUnresolvedFunction
      it("When an empty object for weight is passed into average(), -1 should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.average({}, 10)).toEqual(-1);
      });
      //noinspection JSUnresolvedFunction
      it("When an empty array for weight is passed into average(), -1 should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.average([], 10)).toEqual(-1);
      });
      //noinspection JSUnresolvedFunction
      it("When a populated object for weight is passed into average(), -1 should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.average({weight: 135, reps: 10 }, 10)).toEqual(-1);
      });
      //noinspection JSUnresolvedFunction
      it("When a populated array for weight is passed into average(), -1 should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.average([135, 10], 10)).toEqual(-1);
      });

      // brzycki()
      //noinspection JSUnresolvedFunction
      it("When null for weight is passed into brzycki(), -1 should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.brzycki(null, 10)).toEqual(-1);
      });
      //noinspection JSUnresolvedFunction
      it("When undefined for weight is passed into brzycki(), -1 should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.brzycki(undefined, 10)).toEqual(-1);
      });
      //noinspection JSUnresolvedFunction
      it("When '' for weight is passed into brzycki(), -1 should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.brzycki('', 10)).toEqual(-1);
      });
      //noinspection JSUnresolvedFunction
      it("When 'random string' for weight is passed into brzycki(), -1 should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.brzycki('random string', 10)).toEqual(-1);
      });
      //noinspection JSUnresolvedFunction
      it("When true for weight is passed into brzycki(), -1 should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.brzycki(true, 10)).toEqual(-1);
      });
      //noinspection JSUnresolvedFunction
      it("When false for weight is passed into brzycki(), -1 should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.brzycki(true, 10)).toEqual(-1);
      });
      //noinspection JSUnresolvedFunction
      it("When an empty object for weight is passed into brzycki(), -1 should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.brzycki({}, 10)).toEqual(-1);
      });
      //noinspection JSUnresolvedFunction
      it("When an empty array for weight is passed into brzycki(), -1 should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.brzycki([], 10)).toEqual(-1);
      });
      //noinspection JSUnresolvedFunction
      it("When a populated object for weight is passed into brzycki(), -1 should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.brzycki({weight: 135, reps: 10 }, 10)).toEqual(-1);
      });
      //noinspection JSUnresolvedFunction
      it("When a populated array for weight is passed into brzycki(), -1 should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.brzycki([135, 10], 10)).toEqual(-1);
      });
    });
  });
}());