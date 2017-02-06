exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    /*
    return arr.reduce(function (a, b){
      return a + b;
    }, 0)
    */
    var myTotal = 0;

    for (var i = 0, len = arr.length; i < len; i ++){
      myTotal += arr[i];
    }
    return myTotal;
  },

  remove: function(arr, item) {

    var nuevoArray = [];

    for(var i = 0, len = arr.length -1; i <= len; i ++){
      if(arr[i]!== item){
        nuevoArray.push(arr[i])
      }

    } return nuevoArray;


  },

  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {

  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
