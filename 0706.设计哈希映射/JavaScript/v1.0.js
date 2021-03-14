/**
 * 优化空间使用
 * Initialize your data structure here.
 */
 var MyHashMap = function() {
    this.BASE = 768;
    this.data = new Array(this.BASE).fill(0).map(() => new Array());
};

MyHashMap.prototype.hash = function(key) {
    return key % this.BASE;
}

/**
 * value will always be non-negative. 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    let index = this.hash(key);
    let list = this.data[index];
    for (let element of list) {
        if (element[0] === key) {
            element[1] = value;
            return;
        }
    }
    list.push([key, value]);
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    let index = this.hash(key);
    let list = this.data[index];
    for (let element of list) {
        if (element[0] === key) {
            return element[1];
        }
    }
    return -1;
};

/**
 * Removes the mapping of the specified value key if this map contains a mapping for the key 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    let index = this.hash(key);
    let list = this.data[index];
    const len = list.length;
    for (let i = 0; i < len; i++) {
        if (list[i][0] === key) {
            list.splice(i, 1);
            return;
        }
    }
};

/**
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */