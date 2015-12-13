(function () {
  'use strict';

  //noinspection JSUnresolvedFunction
  describe("OneRepMax", function () {
    // all()
    //noinspection JSUnresolvedFunction
    describe("all()", function () {
      //noinspection JSUnresolvedFunction
      it("When no arguments are passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all()).toEqual({});
      });

      //noinspection JSUnresolvedFunction
      it("When null for weight and no reps argument is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all(null)).toEqual({});
      });
      //noinspection JSUnresolvedFunction,JSUnresolvedFunction
      it("When undefined for weight and no reps argument is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all(undefined)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When '' for weight and no reps argument passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all('')).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When 'random string' for weight and no reps argument is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all('random string')).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When true for weight and no reps argument is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all(true)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When false for weight and no reps argument is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all(false)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When an empty object for weight and no reps argument is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all({})).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When an empty array for weight and no reps argument is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all([])).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When a populated object for weight and no reps argument is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all({weight: 135, reps: 10 })).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When a populated array for weight and no reps argument is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all([135, 10])).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When a valid weight and no reps argument is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all(135)).toEqual({});
      });

      //noinspection JSUnresolvedFunction
      it("When null for weight and reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all(null, null)).toEqual({});
      });
        //noinspection JSUnresolvedFunction,JSUnresolvedFunction
      it("When undefined for weight and reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all(undefined, undefined)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When '' for weight and reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all('', '')).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When 'random string' for weight and reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all('random string', 'random string')).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When true for weight and reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all(true, true)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When false for weight and reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all(false, false)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When an empty object for weight and reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all({}, {})).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When an empty array for weight and reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all([], [])).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When a populated object for weight and reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all({weight: 135, reps: 10 }, {weight: 135, reps: 10 })).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When a populated array for weight and reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all([135, 10], [135, 10])).toEqual({});
      });

      //noinspection JSUnresolvedFunction
      it("When null for weight is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all(null, 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction,JSUnresolvedFunction
      it("When undefined for weight is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all(undefined, 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When '' for weight is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all('', 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When 'random string' for weight is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all('random string', 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When true for weight is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all(true, 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When false for weight is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all(false, 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When an empty object for weight is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all({}, 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When an empty array for weight is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all([], 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When a populated object for weight is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all({weight: 135, reps: 10 }, 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When a populated array for weight is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all([135, 10], 10)).toEqual({});
      });

      //noinspection JSUnresolvedFunction
      it("When null for reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all(135, null)).toEqual({});
      });
      //noinspection JSUnresolvedFunction,JSUnresolvedFunction
      it("When undefined for reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all(135, undefined)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When '' for reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all(135, '')).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When 'random string' for reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all(135, 'random string')).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When true for reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all(135, true)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When false for reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all(135, false)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When an empty object for reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all(135, {})).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When an empty array for reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all(135, [])).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When a populated object for reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all(135, {weight: 135, reps: 10 })).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When a populated array for reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all(135, [135, 10])).toEqual({});
      });

      //noinspection JSUnresolvedFunction
      it("When a populated object for weight and reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all({weight: 135, reps: 10 })).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When a populated array for weight and reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(OneRepMax.all([135, 10])).toEqual({});
      });
    });
  });
}());