/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    functions.reverse();
	return function(x) {
        let res = x;
        for(let i = 0; i < functions.length; i++){
            res = functions[i](res);
        }
        return res;
    }
};

/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */
