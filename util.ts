function combinations(array: number[], n: number): number[][] {
	let lists = [], M = 1 << array.length;
	for (let i = 1; i < M; ++i) {
		var sublist = array.filter((c, k) => i >> k & 1);
		lists.push(sublist);
	}
	return lists.filter(x => x.length === n);
}

/*
console.log(combinations([1, 2, 3, 4], 2));
=>
[ [ 1, 2 ], [ 1, 3 ], [ 2, 3 ], [ 1, 4 ], [ 2, 4 ]
, [ 3, 4 ] ]
*/
