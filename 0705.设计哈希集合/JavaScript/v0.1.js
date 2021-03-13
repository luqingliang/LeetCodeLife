/**
 * 参考官方题解链地址法
 * Initialize your data structure here.
 */
 var MyHashSet = function() {
    this.BASE = 768
    this.list = new Array(768).fill(0).map(() => new Array());
};

MyHashSet.prototype.hash = function(key) {
    return key % this.BASE;
}

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    let index = this.hash(key);
    let arr = this.list[index];
    for (let val of arr) {
        if (val === key) {
            return;
        }
    }
    arr.push(key);
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    let index = this.hash(key);
    let arr = this.list[index];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === key) {
            arr.splice(i, 1);
            return;
        }
    }
};

/**
 * Returns true if this set contains the specified element 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    let index = this.hash(key);
    let arr = this.list[index];
    for (let val of arr) {
        if (val === key) {
            return true;
        }
    }
    return false;
};

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */