if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        var i = 0, 
            sum = 0;
        for ( ; i < arr.length;i++){
            sum+=arr[i];
        }
        return sum;
    },

    remove : function(arr, item) {
        var i = 0;
        for ( ; i < arr.length;i++){
            if(arr[i] === item){
                arr.splice(i,1);
            }
        }
        return arr;
    },
    
    removeWithoutCopy : function(arr,item) {
        var i = 0,
            length = arr.length;

        for ( ; i < length;i++) {
            if(arr[i] === item){
                arr.splice(i,1);
                i-=1;
                length-=1;
            }
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
         arr.pop();
         return arr;
    },

    concat : function(arr1, arr2) {
        return arr1.concat(arr2) ;
    },

    insert : function(arr, item, index) {
        arr.splice(index,0,item);
        return arr;
    },

    count : function(arr, item) {
        var i =0,
            length = arr.length,
            count = 0;
        for( ; i < length; i++){
            if (arr[i] === item)
            {
                count += 1;
            }
        }
        return count;
    },

    duplicates : function(arr) {
        var i =0,
            length = arr.length,
            dupes = [];
        for( ; i < length; i++)
        {
            if(this.count(arr,arr[i]) > 1)
            {
                dupes.push(arr[i]);
                this.removeWithoutCopy(arr,arr[i]);
            }
        }
        return dupes;
    },

    square : function(arr) {
        var i = 0,
            sq = 0,
            length = arr.length;
        for( ; i<length;i++){
            sq = arr[i]*arr[i];
            arr[i] = sq;
        }
        console.log(arr);
        return arr;
    },

    findAllOccurrences : function(arr, target) {
        var i = 0,
        length = arr.length,
        found = [];
        for( ; i<length;i++){
            if(arr[i] === target) {
                found.push(i);
            }
        } 
        return found;
    }
  };
});
