var mergeSort = require("../mergeSort.js");

describe('Merge', function() {
  it('should merge two arrays of size 1', function() {
     expect(mergeSort.merge([1],[2])).toEqual([1,2]);
  });
  it('should merge two arrays of size 1', function() {
     expect(mergeSort.merge([1,4,7],[8])).toEqual([1,4,7,8]);
  });
  it('should merge two arrays of size 1', function() {
     expect(mergeSort.merge([1,2,3],[6,7,8])).toEqual([1,2,3,6,7,8]);
  });
  it('should merge two arrays of size 1', function() {
     expect(mergeSort.merge([4,6,8],[1,3,5])).toEqual([1,3,4,5,6,8]);
  });

});

describe('Merge Sort', function() {
  it('should sort an arrays', function() {
     expect(mergeSort.merge([2],[1])).toEqual([1,2]);
  });
  it('should sort an arrays', function() {
     expect(mergeSort.merge([2,4,6],[1])).toEqual([1,2,4,6]);
  });
  it('should sort an arrays', function() {
     expect(mergeSort.merge([5,7],[1,3])).toEqual([1,3, 5,7]);
  });
  it('should sort an arrays', function() {
     expect(mergeSort.merge([4,6],[8,9])).toEqual([4,6,8,9]);
  });

});

