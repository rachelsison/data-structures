var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing
  this.count = 0;
  this.storage = {};
};


  // Implement the methods below
  Stack.prototype.push = function(value){
    this.storage[this.count++] = value;
    return this.count;
  };

  Stack.prototype.pop = function(){
    if(this.count > 0){
      var temp = this.storage[this.count - 1];
      delete this.storage[--this.count];
      return temp;
    }else{
      return;
    }
  };

  Stack.prototype.size = function(){
    return this.count;
  };





