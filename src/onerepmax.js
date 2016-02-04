var onerepmax = null;

(function () {
  'use strict';

  function validateInput(w, r) {
    w = typeof w === 'boolean' ? -1 : Number(w);
    r = typeof r === 'boolean' ? -1 : Number(r);

    return (w > 0 && r > 0 && r <= 10);
  }

  function calculate(w, r, f) {
    if (validateInput(w, r)) {
      return Number(f(w, r).toFixed(2));
    }
    return -1;
  }

  function brzycki(w, r) {
    return (w * 36) / (37 - r);
  }

  function epley(w, r) {
    return w * (1 + (r / 30));
  }

  function lander(w, r) {
    return (100 * w) / (101.3 - (2.67123 * r));
  }

  function lombardi(w, r) {
    return w * Math.pow(r, 0.10);
  }

  function mayhew(w, r) {
    return (100 * w) / (52.2 + (41.9 * Math.pow(Math.E, (-0.055 * r))));
  }

  function oconner(w, r) {
    return w * (1 + (0.025 * r));
  }

  function wathen(w, r) {
    return (100 * w) / (48.8 + (53.8 * Math.pow(Math.E, (-0.075 * r))));
  }

  function average(w, r) {
    return (brzycki(w, r) + epley(w, r) + lander(w, r) + lombardi(w, r) + mayhew(w, r) + oconner(w, r) + wathen(w, r)) / 7;
  }

  function all(w, r) {
    var allOneRepMaxes = {};

    if (validateInput(w, r)) {
      allOneRepMaxes.average = calculate(w, r, average);
      allOneRepMaxes.brzycki = calculate(w, r, brzycki);
      allOneRepMaxes.epley = calculate(w, r, epley);
      allOneRepMaxes.lander = calculate(w, r, lander);
      allOneRepMaxes.lombardi = calculate(w, r, lombardi);
      allOneRepMaxes.mayhew = calculate(w, r, mayhew);
      allOneRepMaxes.oconner = calculate(w, r, oconner);
      allOneRepMaxes.wathen = calculate(w, r, wathen);
    }

    return allOneRepMaxes;
  }

  onerepmax  = {
    all: function (weight, reps) {
      return all(weight, reps);
    },
    average: function (weight, reps) {
      return calculate(weight, reps, average);
    },
    brzycki: function (weight, reps) {
      return calculate(weight, reps, brzycki);
    },
    epley: function (weight, reps) {
      return calculate(weight, reps, epley);
    },
    lander: function (weight, reps) {
      return calculate(weight, reps, lander);
    },
    lombardi: function (weight, reps) {
      return calculate(weight, reps, lombardi);
    },
    mayhew: function (weight, reps) {
      return calculate(weight, reps, mayhew);
    },
    oconner: function (weight, reps) {
      return calculate(weight, reps, oconner);
    },
    wathen: function (weight, reps) {
      return calculate(weight, reps, wathen);
    }
  };
}());