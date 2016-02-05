Description
-----------
A one repetition maximum (often abbreviated 1RM) identifies a weight that a weight lifter can lift only once for a given movement, such as the bench press. This value is often calculated based on strength testing where the lifter lifts a sub-maximal weight for as many repetitions as possible.

It turns out that there are a number of different ways to calculate a 1RM, as depicted on Wikipedia: https://en.wikipedia.org/wiki/One-repetition_maximum. *onerepmax-js* simply compiles these formulas into a JavaScript library. In addition to the seven formulas listed in the Wikipedia entry, *onerepmax-js* also provides functionality to average all of the formulas as well as return an object containing the results of all the formulas using a single set of test data.

Usage
-----
To use *onerepmax*, use your favorite means of including the source code into your project or webpage. When the script is executed, a global object called onerepmax will be created. It is through this object that the calculations will be performed.
  
*onerepmax* contains a single public method that provides access to direct implementations of a specific 1RM formula (as taken from Wikipedia). A particular formula is targeted using a string value based on the formula name, all lower case, and no punctuation. The public method is called calculate takes the following input:

- **weight**: a number greater than 0 that represents the weight lifted for strength testing. There is no upper bound.
- **reps**: a number greater than 0 and less than or equal to 10 that represents the number of times the weight was lifted during testing.
- **formula**: a string that represents the specific formula to use in the calculation. Available options are 'all', 'average', 'brzycki', 'epley', 'lander', 'lombardi', 'mayhew', 'oconner', and 'wathen'.

Here is an example of each available formula option:

    var maxes,
        max;
    
    maxes = onerepmax.calculate(135, 10, 'all');    // returns an object
    max = onerepmax.calculate(135, 10, 'average');  // returns a number
    max = onerepmax.calculate(135, 10, 'brzycki');  // returns a number
    max = onerepmax.calculate(135, 10, 'epley');    // returns a number
    max = onerepmax.calculate(135, 10, 'lander');   // returns a number
    max = onerepmax.calculate(135, 10, 'lombardi'); // returns a number
    max = onerepmax.calculate(135, 10, 'mayhew');   // returns a number
    max = onerepmax.calculate(135, 10, 'oconner');  // returns a number
    max = onerepmax.calculate(135, 10, 'wathen');   // returns a number
    

*Note: the numeric results are to two decimal places, if a calculation results in a fractional value.*

When invalid weight and rep values are passed into these methods (see the descriptions for **weight** and **reps** above), the methods will return -1. If an invalid formula is passed in, the calculation will default to the average method.

Along with the 7 formulas from the Wikipedia entry, *onerepmax* contains two special methods that aim to supplement the 7 one rep maximum formulas found on Wikipedia. These two methods are:

- **average**: returns an average of the 7 formula methods
- **all**: returns an object containing the results of the 7 formula methods and the average method.


Unit Tests
-----
Included with this repo are the unit tests written using Jasmine and the stand alone test runner. The test coverage is not perfect but it provides reasonable confidence that this library will function as needed.