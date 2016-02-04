(function () {
  'use strict';

  //noinspection JSUnresolvedFunction
  describe("onerepmax", function () {
    // all()
    //noinspection JSUnresolvedFunction
    describe("all()", function () {
        //noinspection JSUnresolvedFunction
        it("should return a populated object with 8 properties when 135 and 10 are passed in.", function () {
            //noinspection JSUnresolvedFunction
            expect(Object.keys(onerepmax.all(135, 10)).length).toEqual(8);
        });
        //noinspection JSUnresolvedFunction
        it("should return a populated object with an average property when 135 and 10 are passed in.", function () {
            //noinspection JSUnresolvedFunction
            expect(onerepmax.all(135, 10).hasOwnProperty('average')).toEqual(true);
        });
        //noinspection JSUnresolvedFunction
        it("should return a populated object with an brzycki property when 135 and 10 are passed in.", function () {
            //noinspection JSUnresolvedFunction
            expect(onerepmax.all(135, 10).hasOwnProperty('brzycki')).toEqual(true);
        });
        //noinspection JSUnresolvedFunction
        it("should return a populated object with an epley property when 135 and 10 are passed in.", function () {
            //noinspection JSUnresolvedFunction
            expect(onerepmax.all(135, 10).hasOwnProperty('epley')).toEqual(true);
        });
        //noinspection JSUnresolvedFunction
        it("should return a populated object with an lander property when 135 and 10 are passed in.", function () {
            //noinspection JSUnresolvedFunction
            expect(onerepmax.all(135, 10).hasOwnProperty('lander')).toEqual(true);
        });
        //noinspection JSUnresolvedFunction
        it("should return a populated object with an lombardi property when 135 and 10 are passed in.", function () {
            //noinspection JSUnresolvedFunction
            expect(onerepmax.all(135, 10).hasOwnProperty('lombardi')).toEqual(true);
        });
        //noinspection JSUnresolvedFunction
        it("should return a populated object with an mayhew property when 135 and 10 are passed in.", function () {
            //noinspection JSUnresolvedFunction
            expect(onerepmax.all(135, 10).hasOwnProperty('mayhew')).toEqual(true);
        });
        //noinspection JSUnresolvedFunction
        it("should return a populated object with an oconner property when 135 and 10 are passed in.", function () {
            //noinspection JSUnresolvedFunction
            expect(onerepmax.all(135, 10).hasOwnProperty('oconner')).toEqual(true);
        });
        //noinspection JSUnresolvedFunction
        it("should return a populated object with an wathen property when 135 and 10 are passed in.", function () {
            //noinspection JSUnresolvedFunction
            expect(onerepmax.all(135, 10).hasOwnProperty('wathen')).toEqual(true);
        });
        //noinspection JSUnresolvedFunction
        it("should return a populated object with an average property containing the value 176.91 when 135 and 10 are passed in.", function () {
            //noinspection JSUnresolvedFunction
            expect(onerepmax.all(135, 10).average).toEqual(176.91);
        });
        //noinspection JSUnresolvedFunction
        it("should return a populated object with an brzycki property contaning the value 176.91 when 135 and 10 are passed in.", function () {
            //noinspection JSUnresolvedFunction
            expect(onerepmax.all(135, 10).brzycki).toEqual(180);
        });
        //noinspection JSUnresolvedFunction
        it("should return a populated object with an epley property containing the value 176.91 when 135 and 10 are passed in.", function () {
            //noinspection JSUnresolvedFunction
            expect(onerepmax.all(135, 10).epley).toEqual(180);
        });
        //noinspection JSUnresolvedFunction
        it("should return a populated object with an lander property containing the value 176.91 when 135 and 10 are passed in.", function () {
            //noinspection JSUnresolvedFunction
            expect(onerepmax.all(135, 10).lander).toEqual(180.99);
        });
        //noinspection JSUnresolvedFunction
        it("should return a populated object with an lombardi property containing the value 176.91 when 135 and 10 are passed in.", function () {
            //noinspection JSUnresolvedFunction
            expect(onerepmax.all(135, 10).lombardi).toEqual(169.95);
        });
        //noinspection JSUnresolvedFunction
        it("should return a populated object with an mayhew property containing the value 176.91 when 135 and 10 are passed in.", function () {
            //noinspection JSUnresolvedFunction
            expect(onerepmax.all(135, 10).mayhew).toEqual(176.76);
        });
        //noinspection JSUnresolvedFunction
        it("should return a populated object with an oconner property containing the value 176.91 when 135 and 10 are passed in.", function () {
            //noinspection JSUnresolvedFunction
            expect(onerepmax.all(135, 10).oconner).toEqual(168.75);
        });
        //noinspection JSUnresolvedFunction
        it("should return a populated object with an wathen property containing the value 176.91 when 135 and 10 are passed in.", function () {
            //noinspection JSUnresolvedFunction
            expect(onerepmax.all(135, 10).wathen).toEqual(181.91);
        });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when no arguments are passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all()).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when null for weight and no reps argument is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(null)).toEqual({});
      });
      //noinspection JSUnresolvedFunction,JSUnresolvedFunction
      it("should return an empty object when undefined for weight and no reps argument is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(undefined)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when '' for weight and no reps argument passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all('')).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when 'random string' for weight and no reps argument is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all('random string')).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when true for weight and no reps argument is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(true)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when false for weight and no reps argument is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(false)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when an empty object for weight and no reps argument is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all({})).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when an empty array for weight and no reps argument is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all([])).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when a populated object for weight and no reps argument is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all({weight: 135, reps: 10 })).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when a populated array for weight and no reps argument is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all([135, 10])).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when a valid weight and no reps argument is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(135)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when null for weight and reps is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(null, null)).toEqual({});
      });
        //noinspection JSUnresolvedFunction,JSUnresolvedFunction
      it("should return an empty object when undefined for weight and reps is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(undefined, undefined)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when '' for weight and reps is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all('', '')).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when 'random string' for weight and reps is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all('random string', 'random string')).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when true for weight and reps is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(true, true)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when false for weight and reps is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(false, false)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when an empty object for weight and reps is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all({}, {})).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when an empty array for weight and reps is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all([], [])).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when a populated object for weight and reps is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all({weight: 135, reps: 10 }, {weight: 135, reps: 10 })).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when a populated array for weight and reps is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all([135, 10], [135, 10])).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when null for weight is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(null, 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction,JSUnresolvedFunction
      it("should return an empty object when undefined for weight is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(undefined, 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when '' for weight is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all('', 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when 'random string' for weight is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all('random string', 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when true for weight is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(true, 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when false for weight is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(false, 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when an empty object for weight is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all({}, 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when an empty array for weight is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all([], 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when a populated object for weight is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all({weight: 135, reps: 10 }, 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when a populated array for weight is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all([135, 10], 10)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when null for reps is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(135, null)).toEqual({});
      });
      //noinspection JSUnresolvedFunction,JSUnresolvedFunction
      it("should return an empty object when undefined for reps is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(135, undefined)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when '' for reps is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(135, '')).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when 'random string' for reps is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(135, 'random string')).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when true for reps is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(135, true)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when false for reps is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(135, false)).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when an empty object for reps is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(135, {})).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when an empty array for reps is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(135, [])).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when a populated object for reps is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(135, {weight: 135, reps: 10 })).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when a populated array for reps is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all(135, [135, 10])).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when a populated object for weight and reps is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all({weight: 135, reps: 10 })).toEqual({});
      });
      //noinspection JSUnresolvedFunction
      it("should return an empty object when a populated array for weight and reps is passed in.", function () {
        //noinspection JSUnresolvedFunction
        expect(onerepmax.all([135, 10])).toEqual({});
      });
    });

      // average()
      //noinspection JSUnresolvedFunction
      describe("average()", function () {
          //noinspection JSUnresolvedFunction
          it("should return 176.91 when 135 and 10 are passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(135, 10)).toEqual(176.91);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when no arguments are passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average()).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(null)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(undefined)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average('')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average('random string')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(true)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(false)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average({})).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average([])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average({weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average([135, 10])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a valid weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(135)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(null, null)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(undefined, undefined)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average('', '')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average('random string', 'random string')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(true, true)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(false, false)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average({}, {})).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average([], [])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average({weight: 135, reps: 10 }, {weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average([135, 10], [135, 10])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(null, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(undefined, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average('', 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average('random string', 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(true, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(false, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average({}, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average([], 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average({weight: 135, reps: 10 }, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average([135, 10], 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null value for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(135, null)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined rep value is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(135, undefined)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(135, '')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(135, 'random string')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(135, true)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(135, false)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(135, {})).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(135, [])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(135, {weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average(135, [135, 10])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average({weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.average([135, 10])).toEqual(-1);
          });
      });

      // brzycki()
      //noinspection JSUnresolvedFunction
      describe("brzycki()", function () {
          //noinspection JSUnresolvedFunction
          it("should return 180.00 when 135 and 10 are passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki(135, 10)).toEqual(180.00);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when no arguments are passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki()).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki(null)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki(undefined)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki('')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki('random string')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki(true)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki(false)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki({})).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki([])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki({weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki([135, 10])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a valid weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki(135)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki(null, null)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki(undefined, undefined)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki('', '')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki('random string', 'random string')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki(true, true)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki(false, false)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki({}, {})).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki([], [])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki({weight: 135, reps: 10 }, {weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki([135, 10], [135, 10])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki(null, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki(undefined, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki('', 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki('random string', 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki(true, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki(false, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki({}, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki([], 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki({weight: 135, reps: 10 }, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki([135, 10], 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null value for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki(135, null)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined rep value is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki(135, undefined)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki(135, '')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki(135, 'random string')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki(135, true)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki(135, false)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki(135, {})).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki(135, [])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki(135, {weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki(135, [135, 10])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki({weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.brzycki([135, 10])).toEqual(-1);
          });
      });

      // epley()
      //noinspection JSUnresolvedFunction
      describe("epley()", function () {
          //noinspection JSUnresolvedFunction
          it("should return 180.00 when 135 and 10 are passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley(135, 10)).toEqual(180.00);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when no arguments are passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley()).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley(null)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley(undefined)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley('')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley('random string')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley(true)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley(false)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley({})).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley([])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley({weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley([135, 10])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a valid weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley(135)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley(null, null)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley(undefined, undefined)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley('', '')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley('random string', 'random string')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley(true, true)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley(false, false)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley({}, {})).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley([], [])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley({weight: 135, reps: 10 }, {weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley([135, 10], [135, 10])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley(null, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley(undefined, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley('', 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley('random string', 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley(true, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley(false, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley({}, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley([], 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley({weight: 135, reps: 10 }, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley([135, 10], 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null value for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley(135, null)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined rep value is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley(135, undefined)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley(135, '')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley(135, 'random string')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley(135, true)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley(135, false)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley(135, {})).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley(135, [])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley(135, {weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley(135, [135, 10])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley({weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.epley([135, 10])).toEqual(-1);
          });
      });

      // lander()
      //noinspection JSUnresolvedFunction
      describe("lander()", function () {
          //noinspection JSUnresolvedFunction
          it("should return 180.99 when 135 and 10 are passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander(135, 10)).toEqual(180.99);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when no arguments are passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander()).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander(null)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander(undefined)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander('')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander('random string')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander(true)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander(false)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander({})).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander([])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander({weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander([135, 10])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a valid weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander(135)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander(null, null)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander(undefined, undefined)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander('', '')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander('random string', 'random string')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander(true, true)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander(false, false)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander({}, {})).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander([], [])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander({weight: 135, reps: 10 }, {weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander([135, 10], [135, 10])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander(null, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander(undefined, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander('', 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander('random string', 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander(true, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander(false, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander({}, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander([], 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander({weight: 135, reps: 10 }, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander([135, 10], 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null value for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander(135, null)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined rep value is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander(135, undefined)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander(135, '')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander(135, 'random string')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander(135, true)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander(135, false)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander(135, {})).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander(135, [])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander(135, {weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander(135, [135, 10])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander({weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lander([135, 10])).toEqual(-1);
          });
      });

      // lombardi()
      //noinspection JSUnresolvedFunction
      describe("lombardi()", function () {
          //noinspection JSUnresolvedFunction
          it("should return 169.95 when 135 and 10 are passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi(135, 10)).toEqual(169.95);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when no arguments are passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi()).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi(null)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi(undefined)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi('')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi('random string')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi(true)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi(false)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi({})).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi([])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi({weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi([135, 10])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a valid weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi(135)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi(null, null)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi(undefined, undefined)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi('', '')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi('random string', 'random string')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi(true, true)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi(false, false)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi({}, {})).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi([], [])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi({weight: 135, reps: 10 }, {weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi([135, 10], [135, 10])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi(null, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi(undefined, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi('', 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi('random string', 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi(true, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi(false, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi({}, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi([], 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi({weight: 135, reps: 10 }, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi([135, 10], 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null value for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi(135, null)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined rep value is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi(135, undefined)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi(135, '')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi(135, 'random string')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi(135, true)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi(135, false)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi(135, {})).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi(135, [])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi(135, {weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi(135, [135, 10])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi({weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.lombardi([135, 10])).toEqual(-1);
          });
      });

      // oconner()
      //noinspection JSUnresolvedFunction
      describe("mayhew()", function () {
          //noinspection JSUnresolvedFunction
          it("should return 176.76 when 135 and 10 are passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew(135, 10)).toEqual(176.76);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when no arguments are passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew()).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew(null)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew(undefined)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew('')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew('random string')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew(true)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew(false)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew({})).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew([])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew({weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew([135, 10])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a valid weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew(135)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew(null, null)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew(undefined, undefined)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew('', '')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew('random string', 'random string')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew(true, true)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew(false, false)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew({}, {})).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew([], [])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew({weight: 135, reps: 10 }, {weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew([135, 10], [135, 10])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew(null, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew(undefined, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew('', 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew('random string', 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew(true, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew(false, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew({}, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew([], 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew({weight: 135, reps: 10 }, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew([135, 10], 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null value for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew(135, null)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined rep value is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew(135, undefined)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew(135, '')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew(135, 'random string')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew(135, true)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew(135, false)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew(135, {})).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew(135, [])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew(135, {weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew(135, [135, 10])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew({weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.mayhew([135, 10])).toEqual(-1);
          });
      });

      // oconner()
      //noinspection JSUnresolvedFunction
      describe("oconner()", function () {
          //noinspection JSUnresolvedFunction
          it("should return 168.75 when 135 and 10 are passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner(135, 10)).toEqual(168.75);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when no arguments are passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner()).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner(null)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner(undefined)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner('')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner('random string')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner(true)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner(false)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner({})).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner([])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner({weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner([135, 10])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a valid weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner(135)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner(null, null)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner(undefined, undefined)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner('', '')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner('random string', 'random string')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner(true, true)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner(false, false)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner({}, {})).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner([], [])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner({weight: 135, reps: 10 }, {weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner([135, 10], [135, 10])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner(null, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner(undefined, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner('', 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner('random string', 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner(true, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner(false, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner({}, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner([], 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner({weight: 135, reps: 10 }, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner([135, 10], 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null value for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner(135, null)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined rep value is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner(135, undefined)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner(135, '')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner(135, 'random string')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner(135, true)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner(135, false)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner(135, {})).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner(135, [])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner(135, {weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner(135, [135, 10])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner({weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.oconner([135, 10])).toEqual(-1);
          });
      });

      // wathen()
      //noinspection JSUnresolvedFunction
      describe("wathen()", function () {
          //noinspection JSUnresolvedFunction
          it("should return 181.91 when 135 and 10 are passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen(135, 10)).toEqual(181.91);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when no arguments are passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen()).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen(null)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen(undefined)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen('')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen('random string')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen(true)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen(false)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen({})).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen([])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen({weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen([135, 10])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a valid weight and no reps argument is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen(135)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen(null, null)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen(undefined, undefined)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen('', '')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen('random string', 'random string')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen(true, true)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen(false, false)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen({}, {})).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen([], [])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen({weight: 135, reps: 10 }, {weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen([135, 10], [135, 10])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen(null, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen(undefined, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen('', 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen('random string', 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen(true, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen(false, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen({}, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen([], 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen({weight: 135, reps: 10 }, 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen([135, 10], 10)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when null value for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen(135, null)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction,JSUnresolvedFunction
          it("should return -1 when undefined rep value is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen(135, undefined)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when '' for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen(135, '')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when 'random string' for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen(135, 'random string')).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when true for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen(135, true)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when false for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen(135, false)).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty object for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen(135, {})).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when an empty array for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen(135, [])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen(135, {weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen(135, [135, 10])).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated object for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen({weight: 135, reps: 10 })).toEqual(-1);
          });
          //noinspection JSUnresolvedFunction
          it("should return -1 when a populated array for weight and reps is passed in.", function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.wathen([135, 10])).toEqual(-1);
          });
      });
  });
}());