/**
 * 链地址法，使用两个列表分别存储key和value
 * Initialize your data structure here.
 */
 var MyHashMap = function() {
    this.BASE = 768;
    this.keyList = new Array(this.BASE).fill(0).map(() => new Array());
    this.valueList = new Array(this.BASE).fill(0).map(() => new Array());
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
    let keys = this.keyList[index];
    let vals = this.valueList[index];
    const len = keys.length;
    for (let i = 0; i < len; i++) {
        if (keys[i] === key) {
            vals[i] = value;
            return;
        }
    }
    keys.push(key);
    vals.push(value);
};

/**
 * Returns the value to which the specified key is mapped, or -1 if this map contains no mapping for the key 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    let index = this.hash(key);
    let keys = this.keyList[index];
    let vals = this.valueList[index];
    const len = keys.length;
    for (let i = 0; i < len; i++) {
        if (keys[i] === key) {
            return vals[i];
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
    let keys = this.keyList[index];
    let vals = this.valueList[index];
    const len = keys.length;
    for (let i = 0; i < len; i++) {
        if (keys[i] === key) {
            keys.splice(i, 1);
            vals.splice(i, 1);
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