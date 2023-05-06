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

const makePrimeLst = (k: number) => {
	let p = new Array(k + 1).fill(true);
	p[0] = false;
	p[1] = false;
	for (let i = 2; i <= k + 1; i++) {
		if (p[i]) {
			for (let j = i * 2; j <= k + 1; j += i) {
				p[j] = false;
			}
		}
	}
	let ans: number[] = [];
	p.forEach((x, i) => {
		if (x) ans.push(i);
	})
	return ans;
}
/*
	* makePrimeLst(20)
* => [2,3,5,7,11,13,17,19]
*/

const getDivExp = (k: number) => {
	if (k == 1) {
		return [1, 1];
	}
	const sqrt = Math.floor(Math.sqrt(k));
	const pl = makePrimeLst(sqrt);
	let ans: number[][] = [];

	pl.forEach((pi) => {
		let c = 0;
		while (k % pi == 0) {
			k = Math.floor(k / pi);
			++c;
		}
		if (c !== 0) ans.push([pi, c]);
	})
	if (k !== 1) ans.push([k, 1]);
	return ans;
}
/*
	* getDivExp(18)
* => [[2,1], [3,2]]
*/


const chatToInt = (s: string) => s.charCodeAt(0) - 65
/*
	* charToInt("A")
* => 0
*/

const factorial = (n: number) => {
	Array(n)
		.fill(0)
		.map((_, i) => i + 1)
		.reduce((acc, cur) => acc + cur, 1)
}
/*
	* factorial(4)
* => 24
*/


const comp = (a: number[], b: number[]): number => {
	if (a[0] < b[0]) {
		return -1
	} else if (a[0] > b[0]) {
		return 1
	} else {
		if (a[1] < b[1]) {
			return -1
		} else if (a[1] > b[1]) {
			return 1
		} else {
			return 0
		}
	}
}
/*
	* let arr = [[1,3], [1,1], [2,3]]
	* arr.sort((a,b)=>comp(a,b))
	* => [[1,1], [1,3], [2,3]]
	* 
	*/
