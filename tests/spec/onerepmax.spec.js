(function () {
  'use strict';

  //noinspection JSUnresolvedFunction
  describe('onerepmax.calculate(weight, reps, formula)', function () {
      // weight validation
      //noinspection JSUnresolvedFunction
      describe('validation: weight', function () {
          //noinspection JSUnresolvedFunction
          it('should return a valid value when the weight is 1.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(1, 10, 'average')).toEqual(1.31);
          });

          //noinspection JSUnresolvedFunction
          it('should return -1 when the weight is 0.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(0, 10, 'average')).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it('should return -1 when the weight is less than 0.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(-1, 10, 'average')).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it('should return a valid value when the weight is a string that can be cast to a number.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate('135', 10, 'average')).toEqual(onerepmax.calculate(135, 10, 'average'));
          });

          //noinspection JSUnresolvedFunction
          it('should return -1 when the weight is a string that cannot be cast to a number.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate('weight', 10, 'average')).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it('should return -1 when the weight is null.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(null, 10, 'average')).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it('should return -1 when the weight is undefined.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(undefined, 10, 'average')).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it('should return -1 when the weight is an empty string.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate('', 10, 'average')).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it('should return -1 when the weight is an empty object.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate({}, 10, 'average')).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it('should return -1 when the weight is a populated object.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate({weight: 135}, 10, 'average')).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it('should return -1 when the weight is an empty array.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate([], 10, 'average')).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it('should return -1 when the weight is a populated array that cannot be cast as a number. [number, number]', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate([135, 10], 10, 'average')).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it('should return a valid value when the weight is a populated array that can be cast as a number. ([number])', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate([135], 10, 'average')).toEqual(onerepmax.calculate(135, 10, 'average'));
          });

          //noinspection JSUnresolvedFunction
          it('should return a valid value when the weight is a populated array that can be cast as a number. (["number"])', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(['135'], 10, 'average')).toEqual(onerepmax.calculate(135, 10, 'average'));
          });
      });

      // reps validation
      //noinspection JSUnresolvedFunction
      describe('validation: reps', function () {
          //noinspection JSUnresolvedFunction
          it('should return a valid value when the reps value is 1.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 1, 'average')).toEqual(138.36);
          });

          //noinspection JSUnresolvedFunction
          it('should return -1 when the rep value is 0.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 0, 'average')).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it('should return -1 when the rep value is less than 0.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, -1, 'average')).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it('should return a valid value when the rep value is 10.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, 'average')).toEqual(176.91);
          });

          it('should return -1 when the rep value is greater than 10.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 11, 'average')).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it('should return a valid value when the rep value is a string that can be cast to a number.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, '10', 'average')).toEqual(onerepmax.calculate(135, 10, 'average'));
          });

          //noinspection JSUnresolvedFunction
          it('should return -1 when the weight is a string that cannot be cast to a number.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 'rep', 'average')).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it('should return -1 when the rep value is null.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, null, 'average')).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it('should return -1 when the rep value is undefined.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, undefined, 'average')).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it('should return -1 when the rep value is an empty string.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, '', 'average')).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it('should return -1 when the rep value is an empty object.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, {}, 'average')).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it('should return -1 when the rep value is a populated object.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, {rep: 10}, 'average')).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it('should return -1 when the rep value is an empty array.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, [], 'average')).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it('should return -1 when the rep value is a populated array that cannot be cast as a number. [number, number]', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, [135, 10], 'average')).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it('should return a valid value when the rep value is a populated array that can be cast as a number. ([number])', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, [10], 'average')).toEqual(onerepmax.calculate(135, 10, 'average'));
          });

          //noinspection JSUnresolvedFunction
          it('should return a valid value when the rep value is a populated array that can be cast as a number. (["number"])', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, ['10'], 'average')).toEqual(onerepmax.calculate(135, 10, 'average'));
          });

      });

      // weight and reps validation
      //noinspection JSUnresolvedFunction
      describe('validation: weight and reps [ to make sure having both numbers invalid does not cancel out the validation ]', function () {
          //noinspection JSUnresolvedFunction
          it('should return -1 when both the weight and rep value are out of range.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(0, 11)).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it('should return -1 when both the weight is out of range and the rep value cannot be cast to a number.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(0, 'reps')).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it('should return -1 when both the weight and rep value are null.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(null, null, 'average')).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it('should return -1 when both the weight and rep value are explicitly undefined.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(undefined, undefined, 'average')).toEqual(-1);
          });

          //noinspection JSUnresolvedFunction
          it('should return -1 when both the weight and rep value are implicitly undefined.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate()).toEqual(-1);
          });
      });

      // formula validation
      //noinspection JSUnresolvedFunction
      describe('validation: formula', function () {
          //noinspection JSUnresolvedFunction
          it('should return the average() value when no formula is passed in.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10)).toEqual(onerepmax.calculate(135, 10, 'average'));
          });

          //noinspection JSUnresolvedFunction
          it('should return the average() value when the formula value is null.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, null)).toEqual(onerepmax.calculate(135, 10, 'average'));
          });

          //noinspection JSUnresolvedFunction
          it('should return the average() value when the formula value is undefined.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, undefined)).toEqual(onerepmax.calculate(135, 10, 'average'));
          });

          //noinspection JSUnresolvedFunction
          it('should return the average() value when the formula value is an empty string.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, '')).toEqual(onerepmax.calculate(135, 10, 'average'));
          });

          //noinspection JSUnresolvedFunction
          it('should return the average() value when the formula value is an empty object.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, {})).toEqual(onerepmax.calculate(135, 10, 'average'));
          });

          //noinspection JSUnresolvedFunction
          it('should return the average() value when the formula value is an populated object.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, {formula: 'average'})).toEqual(onerepmax.calculate(135, 10, 'average'));
          });

          //noinspection JSUnresolvedFunction
          it('should return the average() value when the formula value is an empty array.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, [])).toEqual(onerepmax.calculate(135, 10, 'average'));
          });

          //noinspection JSUnresolvedFunction
          it('should return the average() value when the formula value is a populated array.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, ['brzycki'])).toEqual(onerepmax.calculate(135, 10, 'average'));
          });
      });

      // formula: all
      //noinspection JSUnresolvedFunction
      describe('formula: all', function () {
          //noinspection JSUnresolvedFunction
          it('should return a populated object with 8 properties when 135 and 10 are passed in.', function () {
              //noinspection JSUnresolvedFunction
              expect(Object.keys(onerepmax.calculate(135, 10, 'all')).length).toEqual(8);
          });
          //noinspection JSUnresolvedFunction
          it('should return a populated object with an average property when valid values are passed in.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, 'all').hasOwnProperty('average')).toEqual(true);
          });
          //noinspection JSUnresolvedFunction
          it('should return a populated object with an brzycki property when valid values are passed in.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, 'all').hasOwnProperty('brzycki')).toEqual(true);
          });
          //noinspection JSUnresolvedFunction
          it('should return a populated object with an epley property when valid values are passed in.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, 'all').hasOwnProperty('epley')).toEqual(true);
          });
          //noinspection JSUnresolvedFunction
          it('should return a populated object with an lander property when valid values are passed in.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, 'all').hasOwnProperty('lander')).toEqual(true);
          });
          //noinspection JSUnresolvedFunction
          it('should return a populated object with an lombardi property when valid values are passed in.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, 'all').hasOwnProperty('lombardi')).toEqual(true);
          });
          //noinspection JSUnresolvedFunction
          it('should return a populated object with an mayhew property when valid values are passed in.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, 'all').hasOwnProperty('mayhew')).toEqual(true);
          });
          //noinspection JSUnresolvedFunction
          it('should return a populated object with an oconner property when valid values are passed in.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, 'all').hasOwnProperty('oconner')).toEqual(true);
          });
          //noinspection JSUnresolvedFunction
          it('should return a populated object with an wathen property when valid values are passed in.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, 'all').hasOwnProperty('wathen')).toEqual(true);
          });
          //noinspection JSUnresolvedFunction
          it('should return a populated object with an average property containing the value 176.91 when 135 and 10 are passed in.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, 'all').average).toEqual(176.91);
          });
          //noinspection JSUnresolvedFunction
          it('should return a populated object with an brzycki property contaning the value 176.91 when 135 and 10 are passed in.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, 'all').brzycki).toEqual(180);
          });
          //noinspection JSUnresolvedFunction
          it('should return a populated object with an epley property containing the value 176.91 when 135 and 10 are passed in.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, 'all').epley).toEqual(180);
          });
          //noinspection JSUnresolvedFunction
          it('should return a populated object with an lander property containing the value 176.91 when 135 and 10 are passed in.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, 'all').lander).toEqual(180.99);
          });
          //noinspection JSUnresolvedFunction
          it('should return a populated object with an lombardi property containing the value 176.91 when 135 and 10 are passed in.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, 'all').lombardi).toEqual(169.95);
          });
          //noinspection JSUnresolvedFunction
          it('should return a populated object with an mayhew property containing the value 176.91 when 135 and 10 are passed in.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, 'all').mayhew).toEqual(176.76);
          });
          //noinspection JSUnresolvedFunction
          it('should return a populated object with an oconner property containing the value 176.91 when 135 and 10 are passed in.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, 'all').oconner).toEqual(168.75);
          });
          //noinspection JSUnresolvedFunction
          it('should return a populated object with an wathen property containing the value 176.91 when 135 and 10 are passed in.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, 'all').wathen).toEqual(181.91);
          });
      });

      // formula: average
      //noinspection JSUnresolvedFunction
      describe('formula: average', function () {
          //noinspection JSUnresolvedFunction
          it('should return the value 176.91 when 135 and 10 are passed in.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, 'average')).toEqual(176.91);
          });
      });

      // formula: brzycki
      //noinspection JSUnresolvedFunction
      describe('formula: brzycki', function () {
          //noinspection JSUnresolvedFunction
          it('should return the value 180 when 135 and 10 are passed in.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, 'brzycki')).toEqual(180);
          });
      });

      // formula: epley
      //noinspection JSUnresolvedFunction
      describe('formula: epley', function () {
          //noinspection JSUnresolvedFunction
          it('should return the value 180 when 135 and 10 are passed in.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, 'epley')).toEqual(180);
          });
      });

      // formula: lander
      //noinspection JSUnresolvedFunction
      describe('formula: lander', function () {
          //noinspection JSUnresolvedFunction
          it('should return the value 180.99 when 135 and 10 are passed in.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, 'lander')).toEqual(180.99);
          });
      });

      // formula: lombardi
      //noinspection JSUnresolvedFunction
      describe('formula: lombardi', function () {
          //noinspection JSUnresolvedFunction
          it('should return the value 169.95 when 135 and 10 are passed in.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, 'lombardi')).toEqual(169.95);
          });
      });

      // formula: mayhew
      //noinspection JSUnresolvedFunction
      describe('formula: mayhew', function () {
          //noinspection JSUnresolvedFunction
          it('should return the value 176.76 when 135 and 10 are passed in.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, 'mayhew')).toEqual(176.76);
          });
      });

      // formula: oconner
      //noinspection JSUnresolvedFunction
      describe('formula: oconner', function () {
          //noinspection JSUnresolvedFunction
          it('should return the value 168.75 when 135 and 10 are passed in.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, 'oconner')).toEqual(168.75);
          });
      });

      // formula: wathen
      //noinspection JSUnresolvedFunction
      describe('formula: wathen', function () {
          //noinspection JSUnresolvedFunction
          it('should return the value 181.91 when 135 and 10 are passed in.', function () {
              //noinspection JSUnresolvedFunction
              expect(onerepmax.calculate(135, 10, 'wathen')).toEqual(181.91);
          });
      });
  });
}());