const d = (...s: any) => {
	console.log(...s);
}
//https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/typescript
export function findUniq(arr: number[]): any {
	const m = new Map<number, number>()

	arr.forEach((ai: number) => {
		let v = m.get(ai)
		m.set(ai, (v ? v + 1 : 1))
	})
	for (let [k, v] of m.entries()) {
		if (v == 1) return k;
	}
}
//console.log(findUniq([1, 1, 1, 1, 2, 1]))

//https://www.codewars.com/kata/55e7280b40e1c4a06d0000aa/typescript
function* combinations<T>(iterable: Iterable<T>, r: number) {
	const pool = [...iterable]
	const n = pool.length
	if (n < r) return

	const indices = [...new Array(r)].map((_, i) => i)
	yield indices.map((i) => pool[i])
	while (true) {
		let i
		for (i = r - 1; i >= 0; i--) {
			if (indices[i] !== n - (r - i)) {
				break
			}
		}
		if (i === -1) return
		indices[i]++
		for (let j = i + 1; j < r; j++) {
			indices[j] = indices[j - 1] + 1
		}
		yield indices.map((i) => pool[i])
	}
}

export function chooseBestSum(t: number, k: number, ls: number[]): number | null {
	const a = [...combinations(ls, k)]
	let ans = a.map((x) => {
		return x.reduce(
			(acc, cur) => acc + cur);
	});
	ans.sort((f, n) => (f > n ? -1 : 1))
	const b = ans.findIndex((x) => x <= t)
	return b > -1 ? b : null

}
//console.log(chooseBestSum(163, 3, [50, 55, 56, 57, 58]))
//console.debug(chooseBestSum(163, 3, [50]))


// RETIRE
//https://www.codewars.com/kata/55c6126177c9441a570000cc/train/typescript
export function orderWeight(strng: string): number[] {
	console.log(strng)
	const ar = strng.split(" ")
	const ds = ar.map((x) => {
		return [...x].reduce((acc: number, cur: string) => acc + parseInt(cur, 10), 0)
	})
	return ds
}

//console.log(orderWeight("103 123 4444 99 2000"))


// https://www.codewars.com/kata/534d0a229345375d520006a0
export function isPowerOfTwo(n: number): boolean {
	return !(n % Math.sqrt(n));
}



export function removeChar(str: string): string {
	return str.substring(1, str.length - 1)
}

//console.log(removeChar("abcdef"))


//https://www.codewars.com/kata/58663693b359c4a6560001d6/
export function mazeRunner(maze: number[][], directions: string[]): string {
	const n = maze.length;
	let s = [-1, -1]
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (maze[i][j] == 2) {
				s = [i, j];
				break
			}
		}
	}
	let d: number[][] = [];

	directions.forEach((c) => {
		if (c == "N") d.push([-1, 0]);
		else if (c == "E") d.push([0, 1]);
		else if (c == "S") d.push([1, 0]);
		else d.push([0, -1]);
	})

	let cur = s
	let dl = directions.length
	for (let i = 0; i < dl; i++) {
		let dy = cur[0] + d[i][0]
		let dx = cur[1] + d[i][1]
		console.log(dy, dx)
		if (dy < 0 || dy >= n || dx < 0 || dx >= n) return "Dead"
		if (maze[dy][dx] == 3) return "Finish"
		else if (maze[dy][dx] == 1) return "Dead"
		cur = [dy, dx]
	}
	return "Lost"
}

//let maze = [[1, 1, 1, 1, 1, 1, 1],
//[1, 0, 0, 0, 0, 0, 3],
//[1, 0, 1, 0, 1, 0, 1],
//[0, 0, 1, 0, 0, 0, 1],
//[1, 0, 1, 0, 1, 0, 1],
//[1, 0, 0, 0, 0, 0, 1],
//[1, 2, 1, 0, 1, 0, 1]];


//const o = null

//console.log(mazeRunner(maze, ["N", "N", "N", "N", "N", "E", "E", "S", "S", "S", "S", "S", "S"]))

//[
//  "     *     ", 
//  "    ***    ", 
//  "   *****   ", 
//  "  *******  ", 
//  " ********* ", 
//  "***********"
//]

//https://www.codewars.com/kata/576757b1df89ecf5bd00073b/
export const towerBuilder = (nFloors: number): string[] => {
	let ans: string[] = []
	for (let i = 0; i < nFloors; i++) {
		let s = " ".repeat(nFloors - (i + 1))
		ans.push(s + "*".repeat((i + 1) * 2 - 1) + s)
	}
	return ans
}

//console.log(towerBuilder(1))


//https://www.codewars.com/kata/583203e6eb35d7980400002a
export function countSmileys(arr: string[]) {
	const p = [
		":)", ":-)", ":~)",
		":D", ":-D", ":~D",
		";)", ";-)", ";~)",
		";D", ";-D", ";~D",
	]
	const isSmile = (s: string) => p.some(pi => pi == s);
	return arr.filter(x => isSmile(x)).length;
}

//console.log(countSmileys([':D', ':~)', ';~D', ':)']))


export function binaryToString(binary: string) {
	const l = binary.length;
	let arr = []
	for (let i = 0; i <= l - 8; i += 8) {
		arr.push(parseInt(binary.substring(i, i + 8), 2));
	}
	return String.fromCharCode(...arr)
}
//d(binaryToString("00110001001100000011000100110001"))


export function* fibonacciSequence(): Iterator<number> {
	let i1 = 1, i2 = 1;
	yield i1;
	yield i2;

	//let i = 0;
	while (true) {
		let res = i1 + i2;
		yield res;
		i1 = i2;
		i2 = res;
	}
}

//const stream = fibonacciSequence();
//const actual = Array(10).fill(0).map(() => stream.next().value);
//console.log(actual);


export function rgb(r: number, g: number, b: number): string {
	const conv = (i: number) => {
		let _i = Math.min(
			255,
			Math.max(i, 0)
		);
		return _i.toString(16).toUpperCase().padStart(2, "0");
	}
	return conv(r) + conv(g) + conv(b);
}

//d(rgb(255, 15, 88));


//https://www.codewars.com/kata/5547cc7dcad755e480000004
//TLE
export function removeNb(n: number): number[][] {
	const sum = (n * (1 + n)) / 2;
	let ans = [];
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= n; j++) {
			d(i, j, sum, i * j, sum - i - j);
			if (i * j === (sum - i - j)) {
				ans.push([i, j]);
			}
		}
	}

	return ans;
}

//d(removeNb(101));
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
export function decomp(n: number): string {
	const m = new Map<number, number>();
	for (let i = 2; i < n + 1; i++) {
		let divAndExp: any = getDivExp(i);
		d(i, divAndExp);
		divAndExp.forEach((x: any) => {
			let v = m.get(x[0]);
			m.set(x[0], (v ? v + x[1] : x[1]));
		});
	}
	let ans = [];
	for (const [k, v] of m) {
		if (v === 1) ans.push(`${k}`);
		else ans.push(`${k} ^ ${v}`);
	}

	return ans.join(" + ");
}

//d(decomp(10));

export function humanReadable(sec: number): string {
	let h = `${Math.floor(sec / 3600)}`;
	sec %= 3600;
	let m = `${Math.floor(sec / 60)}`;
	sec %= 60;
	return `${h.padStart(2, "0")}:${m.padStart(2, "0")}:${sec.toString().padStart(2, "0")}`
}

//d(humanReadable(86399))

//https://www.codewars.com/kata/57a049e253ba33ac5e000212
export function factorial(n: number) {
	return new Array(n).fill(0).map((_, i) => i + 1).reduce((acc, cur) => acc * cur, 1)
}


//https://www.codewars.com/kata/5541f58a944b85ce6d00006a/
export const productFib = (prod: number): [number, number, boolean] => {
	let x1 = 1;
	let x2 = 1;
	while (prod > x1 * x2) {
		let res = x1 + x2;
		[x1, x2] = [x2, res];
	}
	return [x1, x2, (x1 * x2 === prod)]
}

//d(productFib(800));

export const gap = (g: number, m: number, n: number): number[] | null => {
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
	const p = makePrimeLst(n)
	const l = p.length
	for (let i = 1; i < l; i++) {
		if (p[i - 1] >= m && p[i] - p[i - 1] == g) {
			return [p[i - 1], p[i]]
		}
	}
	return null
}
//d(gap(2,100,110))
