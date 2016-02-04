(function () {
  'use strict';

  //noinspection JSUnresolvedFunction
  describe("onerepmax", function () {
    // all()
    //noinspection JSUnresolvedFunction
    describe("all()", function () {
      //noinspection JSUnresolvedFunction
      it("When no arguments are passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all()).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When null for weight and no reps argument is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(null)).toEqual({});
      });
      //noinspection JSUnresolvedFunction,JSUnresolvedFunction
      it("When undefined for weight and no reps argument is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(undefined)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When '' for weight and no reps argument passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all('')).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When 'random string' for weight and no reps argument is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all('random string')).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When true for weight and no reps argument is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(true)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When false for weight and no reps argument is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(false)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When an empty object for weight and no reps argument is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all({})).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When an empty array for weight and no reps argument is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all([])).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When a populated object for weight and no reps argument is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all({weight: 135, reps: 10 })).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When a populated array for weight and no reps argument is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all([135, 10])).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When a valid weight and no reps argument is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(135)).toEqual({});
      });

      //noinspection JSUnresolvedFunction
      it("When null for weight and reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(null, null)).toEqual({});
      });
        //noinspection JSUnresolvedFunction,JSUnresolvedFunction
      it("When undefined for weight and reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(undefined, undefined)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When '' for weight and reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all('', '')).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When 'random string' for weight and reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all('random string', 'random string')).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When true for weight and reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(true, true)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When false for weight and reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(false, false)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When an empty object for weight and reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all({}, {})).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When an empty array for weight and reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all([], [])).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When a populated object for weight and reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all({weight: 135, reps: 10 }, {weight: 135, reps: 10 })).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When a populated array for weight and reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all([135, 10], [135, 10])).toEqual({});
      });

      //noinspection JSUnresolvedFunction
      it("When null for weight is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(null, 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction,JSUnresolvedFunction
      it("When undefined for weight is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(undefined, 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When '' for weight is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all('', 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When 'random string' for weight is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all('random string', 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When true for weight is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(true, 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When false for weight is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(false, 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When an empty object for weight is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all({}, 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When an empty array for weight is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all([], 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When a populated object for weight is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all({weight: 135, reps: 10 }, 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When a populated array for weight is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all([135, 10], 10)).toEqual({});
      });

      //noinspection JSUnresolvedFunction
      it("When null for reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(135, null)).toEqual({});
      });
      //noinspection JSUnresolvedFunction,JSUnresolvedFunction
      it("When undefined for reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(135, undefined)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When '' for reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(135, '')).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When 'random string' for reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(135, 'random string')).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When true for reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(135, true)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When false for reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(135, false)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When an empty object for reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(135, {})).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When an empty array for reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(135, [])).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When a populated object for reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(135, {weight: 135, reps: 10 })).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When a populated array for reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(135, [135, 10])).toEqual({});
      });

      //noinspection JSUnresolvedFunction
      it("When a populated object for weight and reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all({weight: 135, reps: 10 })).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("When a populated array for weight and reps is passed in, an empty object should be returned.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all([135, 10])).toEqual({});
      });
    });

      // average()
      //noinspection JSUnresolvedFunction
      describe("average()", function () {
          //noinspection JSUnresolvedFunction
          it("When no arguments are passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average()).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it("When null for weight and no reps argument is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(null)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("When undefined for weight and no reps argument is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(undefined)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When '' for weight and no reps argument passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average('')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When 'random string' for weight and no reps argument is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average('random string')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When true for weight and no reps argument is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(true)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When false for weight and no reps argument is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(false)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When an empty object for weight and no reps argument is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average({})).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When an empty array for weight and no reps argument is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average([])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When a populated object for weight and no reps argument is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average({weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When a populated array for weight and no reps argument is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average([135, 10])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When a valid weight and no reps argument is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(135)).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it("When null for weight and reps is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(null, null)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("When undefined for weight and reps is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(undefined, undefined)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When '' for weight and reps is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average('', '')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When 'random string' for weight and reps is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average('random string', 'random string')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When true for weight and reps is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(true, true)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When false for weight and reps is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(false, false)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When an empty object for weight and reps is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average({}, {})).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When an empty array for weight and reps is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average([], [])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When a populated object for weight and reps is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average({weight: 135, reps: 10 }, {weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When a populated array for weight and reps is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average([135, 10], [135, 10])).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it("When null for weight is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(null, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("When undefined for weight is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(undefined, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When '' for weight is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average('', 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When 'random string' for weight is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average('random string', 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When true for weight is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(true, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When false for weight is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(false, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When an empty object for weight is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average({}, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When an empty array for weight is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average([], 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When a populated object for weight is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average({weight: 135, reps: 10 }, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When a populated array for weight is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average([135, 10], 10)).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it("When null for reps is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(135, null)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("When undefined for reps is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(135, undefined)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When '' for reps is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(135, '')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When 'random string' for reps is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(135, 'random string')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When true for reps is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(135, true)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When false for reps is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(135, false)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When an empty object for reps is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(135, {})).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When an empty array for reps is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(135, [])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When a populated object for reps is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(135, {weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When a populated array for reps is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(135, [135, 10])).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it("When a populated object for weight and reps is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average({weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("When a populated array for weight and reps is passed in, -1 should be returned.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average([135, 10])).toEqual(-1);
          });
      });
  });
}());