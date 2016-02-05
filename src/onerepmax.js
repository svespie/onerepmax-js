(function (global) {
  'use strict';

  var DECIMAL_PLACES = 2;

  function validateInput(w, r) {
    w = typeof w === 'boolean' ? -1 : Number(w);
    r = typeof r === 'boolean' ? -1 : Number(r);

    return (w > 0 && r > 0 && r <= 10);
  }

  function resolveFormula(f) {
    switch (f) {
      case 'all': return all;
      case 'average': return average;
      case 'brzycki': return brzycki;
      case 'epley': return epley;
      case 'lander': return lander;
      case 'lombardi': return lombardi;
      case 'mayhew': return mayhew;
      case 'oconner': return oconner;
      case 'wathen': return wathen;
      default: console.warn('onerepmax: formula "' + f + '" is not recognized - substituting average().'); return average;
    }
  }

  function calculate(w, r, f) {
    if (validateInput(w, r)) {
      return resolveFormula(f)(w,r);
    }

    console.warn('onerepmax: weight and or reps are invalid - { weight: ' + w + ', reps: ' + r + ' }.');
    return -1;
  }

  function brzycki(w, r) {
    return Number(((w * 36) / (37 - r)).toFixed(DECIMAL_PLACES));
  }

  function epley(w, r) {
    return Number((w * (1 + (r / 30))).toFixed(DECIMAL_PLACES));
  }

  function lander(w, r) {
    return Number(((100 * w) / (101.3 - (2.67123 * r))).toFixed(DECIMAL_PLACES));
  }

  function lombardi(w, r) {
    return Number((w * Math.pow(r, 0.10)).toFixed(DECIMAL_PLACES));
  }

  function mayhew(w, r) {
    return Number(((100 * w) / (52.2 + (41.9 * Math.pow(Math.E, (-0.055 * r))))).toFixed(DECIMAL_PLACES));
  }

  function oconner(w, r) {
    return Number((w * (1 + (0.025 * r))).toFixed(DECIMAL_PLACES));
  }

  function wathen(w, r) {
    return Number(((100 * w) / (48.8 + (53.8 * Math.pow(Math.E, (-0.075 * r))))).toFixed(DECIMAL_PLACES));
  }

  function average(w, r) {
    return Number(((brzycki(w, r) + epley(w, r) + lander(w, r) + lombardi(w, r) + mayhew(w, r) + oconner(w, r) + wathen(w, r)) / 7).toFixed(DECIMAL_PLACES));
  }

  function all(w, r) {
    return {
      average : average(w,r),
      brzycki : brzycki(w, r),
      epley: epley(w, r),
      lander: lander(w, r),
      lombardi: lombardi(w, r),
      mayhew: mayhew(w, r),
      oconner: oconner(w, r),
      wathen: wathen(w, r)
    };
  }

  global.onerepmax = global.onerepmax || {};
  global.onerepmax.calculate = function (weight, reps, formula) {
    return calculate(weight, reps, formula);
  };
}(this));