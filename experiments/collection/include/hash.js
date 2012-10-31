/**
 *   Array convenience method to clear membership.
 *
 *   @param object element
 *   @returns void
 */
Array.prototype.clear = function () {
    this.length = 0;
};


/*
 * Return true if the given object is in the array
 *
 *   @param object element
 *   @returns boolean
 */
Array.prototype.inArray = function (obj) {
	var i;
	for (i=0; i < this.length; i++) {
		if (this[i] === obj) {
			return true;
		}
	}
	return false;
};

/**
 *   Array convenience method to remove element.
 *
 *   @param object element
 *   @returns boolean
 */
Array.prototype.remove = function (element) {
	var result = false;
	var array = [];
	for (var i = 0; i < this.length; i++) {
		if (this[i] == element) {
			result = true;
		} else {
			array.push(this[i]);
		}
	}
	this.clear();
	for (var i = 0; i < array.length; i++) {
		this.push(array[i]);
	}
	array = null;
	return result;
};

function Hash(){
    arguments=[]
    this.initialize(arguments);
} 
 
Hash.prototype = {

    /*
     * Constructor
     */
    initialize: function(arguments) {
		this._length = 0;
		this._items = new Array();
		this._keys = new Array();
		for (var i = 0; i < arguments.length; i += 2) {
			if (typeof(arguments[i + 1]) != 'undefined') {
				this._items[arguments[i]] = arguments[i + 1];
				this._keys.push(arguments[i]);
				this._length++;
			}
		}
	},

    /*
     * Return the length of the hash
     */
	length: function() {
		return this._keys.length;
	},

    /*
     * Return the first item in the hash
     */
	first: function() {
		var result;
		if (this._keys.length > 0) {
		 	result = this._items[this._keys[0]];
		}
		return result;
	},

    /*
     * Return an array of keys for this hash
     */
	keys: function() {
		return this._keys;
	},

    /*
     * Run a function on each element in the hash
     */
	invoke: function(fn) {
		var args = [];
		for (var i = 1; i < arguments.length; i++) {
			args.push(arguments[i]);
		}
		
		for (var i = 0; i < this._keys.length; i++) {
			fn.apply(this._items[this._keys[i]], args);
		}
	},

    /*
     * Run a function on each element in the hash
     */
	each: function(fn) {
		var args = [];
		for (var i = 1; i < arguments.length; i++) {
			args.push(arguments[i]);
		}
		
		for (var i = 0; i < this._keys.length; i++) {
			fn(this._items[this._keys[i]], args);
		}
	},

    /*
     * Remove an item from the hash
     */
	remove: function(key) {
		var tmp_value;
		if (typeof(this._items[key]) != 'undefined') {
			this._length--;
			var tmp_value = this._items[key];
			delete this._items[key];
			this._keys.remove(key);
		}	   
		return tmp_value;
	},

    /*
     * Get an item from the hash
     */
	item: function(key) {
		return this._items[key];
	},

    /*
     * Get an item from the hash
     */
	itemByIndex: function(index) {
		return this._items[this._keys[index]];
	},

    /*
     * Set an item in the hash
     */
	set: function(in_key, in_value) {
		if (typeof(in_value) != 'undefined') {
			if (typeof(this._items[in_key]) == 'undefined') {
				this._length++;
			}
			this._items[in_key] = in_value;
			if (! this._keys.inArray(in_key)) {
				this._keys.push(in_key);
			}
		}	   
		return in_value;
	},

    /*
     * Return true if the item is in the hash
     */
	hasKey: function(key) {
		return typeof(this._items[key]) != 'undefined';
	}
}

//exports.Hash = Hash