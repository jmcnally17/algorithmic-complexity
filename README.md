# Algorithmic Complexity

This project contains a timing framework for measuring the efficiency of algorithms. This timing framework has been applied on in built JS functions and on custom built JS functions I've made myself to test my skills of algorithm desgin.

Each custom built function comes with its own feature test, unit test, JS file for plotting data using Chart.js and a HTML file for displaying the plotted graph. A package.json has also been made for each function in order to use esbuild to generate a script that is passed into the HTML file.

There are a number of helper functions that generate all the necessary data by passing the relevant function in as a callback:

- `generateArray(length)`
  - Creates an array which has a length equal to the parameter passed in
  - This function is called to create huge arrays which are passed into each function to test the time complexity
- `createDataPoint(input, callback, numberOfMeasurements, target)`
  - Takes an average of `numberOfMeasurements` measurements of the time taken for `callback` to act on `input`
  - Time is measured by using `performance.now()`
  - `target` is another parameter which is exclusively used for `subSequenceSum()`
- `saveData(callbackOne, num)`
  - Calls `generateArray` and `createDataPoint()` 20 times to create an array of data points for timing `callbackOne`, ready to be plotted on a graph

#### Custom Functions

- [`last(array)`](https://github.com/jmcnally17/algorithmic-complexity/blob/main/custom-algorithms/last/last.js): returns the last element from the array passed in
- [`reverse(array)`](https://github.com/jmcnally17/algorithmic-complexity/blob/main/custom-algorithms/reverse/reverse.js): reverses the order of the array passed in and returns the updated array
- [`shuffle(array)`](https://github.com/jmcnally17/algorithmic-complexity/blob/main/custom-algorithms/shuffle/shuffle.js): returns a new array which contains all the elements of the original in a random order
- [`duplicate(array)`](https://github.com/jmcnally17/algorithmic-complexity/blob/main/custom-algorithms/duplicate/duplicate.js): returns an array containing the elements that appeared more than once in the original array passed in
- [`fibonacci(n)`](https://github.com/jmcnally17/algorithmic-complexity/blob/main/custom-algorithms/fibonacci/fibonacci.js): returns an array containing the first n-terms in the fibonacci sequence
- [`subSequenceSum(array, target)`](https://github.com/jmcnally17/algorithmic-complexity/blob/main/custom-algorithms/sub-sequence-sum/subSequenceSum.js): returns true if a sub-sequence in the array passed in sums up to the target

## Graphs

### In Built JS Functions

#### reverse()

![Timing data for in built reverse()](graphs/in-built-reverse.png)

#### sort()

![Timing data for in built sort()](graphs/in-built-sort.png)

### Custom JS Functions

#### last()

![Timing data for custom last()](graphs/custom-last.png)

#### reverse()

![Timing data for custom reverse()](graphs/custom-reverse.png)

#### shuffle()

![Timing data for custom shuffle()](graphs/custom-shuffle.png)

#### duplicate()

![Timing data for custom duplicate()](graphs/custom-duplicate.png)

#### fibonacci()

![Timing data for custom fibonacci()](graphs/custom-fibonacci.png)

#### subSequenceSum()

![Timing data for custom subSequenceSum()](graphs/custom-sub-sequence-sum.png)
