const d = (s: any) => console.log(s);
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

let maze = [[1, 1, 1, 1, 1, 1, 1],
[1, 0, 0, 0, 0, 0, 3],
[1, 0, 1, 0, 1, 0, 1],
[0, 0, 1, 0, 0, 0, 1],
[1, 0, 1, 0, 1, 0, 1],
[1, 0, 0, 0, 0, 0, 1],
[1, 2, 1, 0, 1, 0, 1]];


const o = null

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
d(binaryToString("00110001001100000011000100110001"))
