Description
-----------
A one repetition maximum (often abbreviated 1RM) identifies a weight that a weight lifter can lift only once for a given movement, such as the bench press. This value is often calculated based on strength testing where the lifter lifts a sub-maximal weight for as many repetitions as possible.

It turns out that there are a number of different ways to calculate a 1RM, as depicted on Wikipedia: https://en.wikipedia.org/wiki/One-repetition_maximum. *onerepmaxlib-js* simply compiles these formulas into a JavaScript library. In addition to the seven formulas listed in the Wikipedia entry, *onerepmaxlib-js* also provides functionality to average all of the formulas as well as return an object containing the results of all the formulas using a single set of test data.

Usage
-----
To use *onerepmaxlib-js*, use your favorite means of including the source code into your project or webpage. When the script is executed, a global object called OneRepMax will be created. It is through this object that the calculations will be performed.
  
OneRepMax contains 7 methods that are direct implementations of a specific 1RM formula (as taken from Wikipedia). The method names are based on the formulas they implement. Each of these direct formula methods take the same input:

- **weight**: a number greater than 0 that represents the weight lifted for strength testing. There is no upper bound.
- **reps**: a number greater than 0 and less than or equal to 10 that represents the number of times the weight was lifted during testing.

Here is an example of each direct formula method call:

    var orm = OneRepMax.brzycki(135, 10);
    var orm = OneRepMax.epley(135, 10);
    var orm = OneRepMax.lander(135, 10);
    var orm = OneRepMax.lombardi(135, 10);
    var orm = OneRepMax.mayhew(135, 10);
    var orm = OneRepMax.oconner(135, 10);
    var orm = OneRepMax.wathen(135, 10);

When invalid arguments are passed into these methods (see the descriptions for **weight** and **reps** above), the methods will return -1.

OneRepMax contains two additional methods that aim to make the 7 formula methods a bit more useful. These two methods are:

- **average**: returns an average of the 7 formula methods
- **all**: returns an object containing the results of the 7 formula methods and the average method.

These two methods expect the same parameters as the 7 formula methods. Likewise, when invalid arguments are passed to the average method, -1 will be returned. When invalid arguments are passed to the all method, an empty object will be returned.

Here are example calls to these two methods:

    var orm = OneRepMax.average(135, 10);
    var allOrms = OneRepMax.all(135, 10);
