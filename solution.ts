const d = (...s: any) => {
	console.log(...s)
}
//https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/typescript
export function findUniq(arr: number[]): any {
	const m = new Map<number, number>()

	arr.forEach((ai: number) => {
		let v = m.get(ai)
		m.set(ai, v ? v + 1 : 1)
	})
	for (let [k, v] of m.entries()) {
		if (v == 1) return k
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

export function chooseBestSum(
	t: number,
	k: number,
	ls: number[]
): number | null {
	const a = [...combinations(ls, k)]
	let ans = a.map((x) => {
		return x.reduce((acc, cur) => acc + cur)
	})
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
		return [...x].reduce(
			(acc: number, cur: string) => acc + parseInt(cur, 10),
			0
		)
	})
	return ds
}

//console.log(orderWeight("103 123 4444 99 2000"))

// https://www.codewars.com/kata/534d0a229345375d520006a0
export function isPowerOfTwo(n: number): boolean {
	return !(n % Math.sqrt(n))
}

export function removeChar(str: string): string {
	return str.substring(1, str.length - 1)
}

//console.log(removeChar("abcdef"))

//https://www.codewars.com/kata/58663693b359c4a6560001d6/
export function mazeRunner(maze: number[][], directions: string[]): string {
	const n = maze.length
	let s = [-1, -1]
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (maze[i][j] == 2) {
				s = [i, j]
				break
			}
		}
	}
	let d: number[][] = []

	directions.forEach((c) => {
		if (c == "N") d.push([-1, 0])
		else if (c == "E") d.push([0, 1])
		else if (c == "S") d.push([1, 0])
		else d.push([0, -1])
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
		":)",
		":-)",
		":~)",
		":D",
		":-D",
		":~D",
		";)",
		";-)",
		";~)",
		";D",
		";-D",
		";~D",
	]
	const isSmile = (s: string) => p.some((pi) => pi == s)
	return arr.filter((x) => isSmile(x)).length
}

//console.log(countSmileys([':D', ':~)', ';~D', ':)']))

export function binaryToString(binary: string) {
	const l = binary.length
	let arr = []
	for (let i = 0; i <= l - 8; i += 8) {
		arr.push(parseInt(binary.substring(i, i + 8), 2))
	}
	return String.fromCharCode(...arr)
}
//d(binaryToString("00110001001100000011000100110001"))

export function* fibonacciSequence(): Iterator<number> {
	let i1 = 1,
		i2 = 1
	yield i1
	yield i2

	//let i = 0;
	while (true) {
		let res = i1 + i2
		yield res
		i1 = i2
		i2 = res
	}
}

//const stream = fibonacciSequence();
//const actual = Array(10).fill(0).map(() => stream.next().value);
//console.log(actual);

export function rgb(r: number, g: number, b: number): string {
	const conv = (i: number) => {
		let _i = Math.min(255, Math.max(i, 0))
		return _i.toString(16).toUpperCase().padStart(2, "0")
	}
	return conv(r) + conv(g) + conv(b)
}

//d(rgb(255, 15, 88));

//https://www.codewars.com/kata/5547cc7dcad755e480000004
//TLE
export function removeNb(n: number): number[][] {
	const sum = (n * (1 + n)) / 2
	let ans = []
	for (let i = 1; i <= n; i++) {
		for (let j = 1; j <= n; j++) {
			d(i, j, sum, i * j, sum - i - j)
			if (i * j === sum - i - j) {
				ans.push([i, j])
			}
		}
	}

	return ans
}

//d(removeNb(101));
const makePrimeLst = (k: number) => {
	let p = new Array(k + 1).fill(true)
	p[0] = false
	p[1] = false
	for (let i = 2; i <= k + 1; i++) {
		if (p[i]) {
			for (let j = i * 2; j <= k + 1; j += i) {
				p[j] = false
			}
		}
	}
	let ans: number[] = []
	p.forEach((x, i) => {
		if (x) ans.push(i)
	})
	return ans
}
const getDivExp = (k: number) => {
	if (k == 1) {
		return [1, 1]
	}
	const sqrt = Math.floor(Math.sqrt(k))
	const pl = makePrimeLst(sqrt)
	let ans: number[][] = []

	pl.forEach((pi) => {
		let c = 0
		while (k % pi == 0) {
			k = Math.floor(k / pi)
			++c
		}
		if (c !== 0) ans.push([pi, c])
	})
	if (k !== 1) ans.push([k, 1])
	return ans
}
export function decomp(n: number): string {
	const m = new Map<number, number>()
	for (let i = 2; i < n + 1; i++) {
		let divAndExp: any = getDivExp(i)
		d(i, divAndExp)
		divAndExp.forEach((x: any) => {
			let v = m.get(x[0])
			m.set(x[0], v ? v + x[1] : x[1])
		})
	}
	let ans = []
	for (const [k, v] of m) {
		if (v === 1) ans.push(`${k}`)
		else ans.push(`${k} ^ ${v}`)
	}

	return ans.join(" + ")
}

//d(decomp(10));

export function humanReadable(sec: number): string {
	let h = `${Math.floor(sec / 3600)}`
	sec %= 3600
	let m = `${Math.floor(sec / 60)}`
	sec %= 60
	return `${h.padStart(2, "0")}:${m.padStart(2, "0")}:${sec
		.toString()
		.padStart(2, "0")}`
}

//d(humanReadable(86399))

//https://www.codewars.com/kata/57a049e253ba33ac5e000212
export function factorial(n: number) {
	return new Array(n)
		.fill(0)
		.map((_, i) => i + 1)
		.reduce((acc, cur) => acc * cur, 1)
}

//https://www.codewars.com/kata/5541f58a944b85ce6d00006a/
export const productFib = (prod: number): [number, number, boolean] => {
	let x1 = 1
	let x2 = 1
	while (prod > x1 * x2) {
		let res = x1 + x2
			;[x1, x2] = [x2, res]
	}
	return [x1, x2, x1 * x2 === prod]
}

//d(productFib(800));

export const gap = (g: number, m: number, n: number): number[] | null => {
	const makePrimeLst_0 = (k: number) => {
		let p = new Array(k + 1).fill(true)
		p[0] = false
		p[1] = false
		for (let i = 2; i <= k + 1; i++) {
			if (p[i]) {
				for (let j = i * 2; j <= k + 1; j += i) {
					p[j] = false
				}
			}
		}
		let ans: number[] = []
		p.forEach((x, i) => {
			if (x) ans.push(i)
		})
		return ans
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

export const getPages = (
	length: number,
	currentPage: number,
	size: number
): number[] => {
	let ans = [1]
	if (length == 1) return []
	if (length <= 2 * size + 3)
		return new Array(length).fill(0).map((_, i) => i + 1)

	if (currentPage - size < 2) {
		for (let i = 2; i <= 2 * size + 2; i++) {
			ans.push(i)
		}
	} else if (currentPage - size > length - 1) {
		for (let i = length - 2 * size - 1; i < length; i++) {
			ans.push(i)
		}
	} else {
		for (let i = currentPage - size; i <= currentPage + size; i++) {
			ans.push(i)
		}
	}
	ans.push(length)
	return ans
}

//d(getPages(20, 9, 3))
//d(getPages(21, 14, 2))
//d(getPages(25, 21, 3))
//d(getPages(13, 10, 3))

export function multiplicationTable(size: number): number[][] {
	return Array(size)
		.fill(
			Array(size)
				.fill(-1)
				.map((_, i) => i + 1)
		)
		.map((x, j) => x.map((xx: number) => xx * (j + 1)))
}

//d(multiplicationTable(2))
//d(multiplicationTable(3))
export function computeDepth(n: number): number {
	let mul = 0
	let dig = new Array(10).fill(0)
	while (dig.includes(0)) {
		++mul
		const t = [...(n * mul).toString()]
		t.forEach((x: string) => {
			++dig[parseInt(x)]
		})
		d(dig)
	}
	return mul
}

//(d(computeDepth(1)));

export const likes = (a: string[]): string => {
	switch (a.length) {
		case 0:
			return "no one likes this"
		case 1:
			return `${a[0]} liles this`
		case 2:
			return `${a[0]} and ${a[1]} likes this`
		case 3:
			return `${a[0]}, ${a[1]} and ${a[2]} likes this`
		default:
			return `${a[0]}, and ${a.length} people like this`
	}
}

export const doors = (n: number): number => {
	let c = new Array(n + 1).fill(0)
	for (let i = 1; i <= n; i++) {
		++c[i]
		for (let j = 2 * i; j <= n; j += i) {
			++c[j]
		}
	}
	return c.filter((x) => x % 2 == 1).length
}

//d(doors(100));

export function isValidWalk(walk: string[]) {
	let m = new Map<string, number>()
	if (walk.length !== 10) {
		return false
	}
	walk.forEach((w: string) => {
		let v = m.get(w)
		m.set(w, v ? v + 1 : 1)
	})
	return m.get("n") === m.get("s") && m.get("w") === m.get("e")
}
//d(isValidWalk(['n', 's', 'n', 's', 'n', 's', 'n', 's', 'n', 's']));
//d(isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']));

export function order(words: string): string {
	const s = words.split(" ")
	d(s)
	let ans = new Array(s.length).fill("")
	const regex: RegExp = /\d+/
	s.forEach((w: string) => {
		ans[parseInt(w.match(regex)?.[0] ?? "", 10) - 1] = w
	})
	d(ans)
	return ans.join(" ")
}

//d(order("is2 Thi1s T4est 3a"));

export function triangle(row: string): string {
	let prev = [...row].map((c) => c.charCodeAt(0) - 96)
	let cur: number[] = []
	while (prev.length > 1) {
		d(prev, cur)
		const sl = prev.length
		for (let i = 0; i < sl - 1; i++) {
			cur.push((prev[i] + prev[i + 1]) % 26)
		}
		;[prev, cur] = [cur, []]
	}
	return String.fromCharCode((prev[0] % 26 ? prev[0] + 26 : prev[0]) + 96)
}
//d(triangle("codewars"))

const cmb = (n: number, r: number) => {
	if (r * 2 > n) r = n - r
	let devided = 1
	let devisor = 1
	for (let i = 1; i <= r; i++) {
		devided *= n - i + 1
		devisor *= i
	}
	return devided / devisor
}

export function estSubsets<T>(list: T[]): number {
	const l = new Set(list).size
	let ans = 0
	return Math.ceil(
		new Array(l)
			.fill(0)
			.map((_, i) => i + 1)
			.reduce((acc, cur) => acc + cmb(l, cur), 0)
	)
}
//d(estSubsets([1,2,3,4]))

// Cant solve
// https://www.codewars.com/kata/55a29405bc7d2efaff00007c/train/typescript
export function going(n: number): number {
	let accm = [1]

	Array(n - 1)
		.fill(0)
		.map((_, i) => i + 2)
		.forEach((c) => {
			accm.push(c * accm[c - 2])
		})

	const res = accm.slice(0, n).reduce((acc, cur) => acc + cur) / accm[n - 1]
	d(accm)
	d(res)
	return parseFloat(res.toString().substring(0, 8))
}
//d(going(200))

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
export function sumOfIntervals(pos: [number, number][]) {
	pos.sort((a, b) => comp(a, b))
	const sz = pos.length
	const mn = pos[0][0]
	const mx = pos.reduce((mx, cur) => (mx < cur[1] ? cur[1] : mx), mn - 1)
	let total = mx - mn
	let m = mn - 1
	d(pos)

	for (let i = 1; i < sz; i++) {
		m = Math.max(pos[i - 1][1], m)
		let rg = pos[i][0] - m
		if (rg > 0) {
			total -= rg
			d(total, rg)
		}
	}

	return total
}
// 940
//d(sumOfIntervals([[-138, 379], [-20, 257], [-262, 435], [-340, 321], [-389, 410], [-46, -35], [-47, 425], [-471, -101], [-485, -425], [-55, 249], [152, 312], [338, 443], [4, 313], [426, 455], [89, 243]]))
//d(sumOfIntervals([[0, 20], [-1e8, 10], [30, 40]]))

export function narcissistic(value: number): boolean {
	const d = Math.floor(Math.log10(value)) + 1
	return (
		value ===
		[...String(value)].reduce((acc, cur) => acc + Math.pow(parseInt(cur), d), 0)
	)
}

//d(narcissistic(7))
//d(narcissistic(153))

let reachable = new Map([
	[0, [1, 3, 4, 5, 7]],
	[1, [0, 2, 3, 4, 5, 6, 8]],
	[2, [1, 3, 4, 5, 7]],
	[3, [0, 1, 2, 4, 6, 7, 8]],
	[4, [0, 1, 2, 3, 5, 6, 7, 8]],
	[5, [0, 1, 2, 4, 6, 7, 8]],
	[6, [1, 3, 4, 5, 7]],
	[7, [0, 2, 3, 4, 5, 6, 8]],
	[8, [1, 3, 4, 5, 7]],
])

const range = () =>
	Array(9)
		.fill(0)
		.map((_, i) => i)

const f = (cur: number, cost: number, lim: number, done: boolean[]) => {
	if (cost === lim) return 1

	let ans = 0

	for (const cand of range()) {
		if (cand === cur) continue

		const r = reachable.get(cur) ?? []
		if (
			(r.includes(cand) && !done[cand]) ||
			(done[(cand + cur) / 2] && !done[cand])
		) {
			done[cand] = true
			ans += f(cand, cost + 1, lim, done)
			done[cand] = false
		}
	}
	return ans
}

export function calculateCombinations(s: string, n: number): number {
	const si = s.charCodeAt(0) - 65
	let done = Array(9).fill(false)
	done[si] = true
	if (n > 9 || n < 1) return 0
	return f(si, 1, n, done)
}

//d(calculateCombinations("E", 4))

export function solequa(n: number): [number, number][] {
	const getDiv = (x: number) => {
		const rt = Math.floor(Math.sqrt(x))
		return Array(rt)
			.fill(0)
			.map((_, i) => i + 1)
			.filter((i) => x % i == 0)
	}
	const div: number[] = getDiv(n)
	d(div)
	let ans: [number, number][] = []
	for (const a of div) {
		const b = n / a
		const y = (b - a) / 4
		const x = 2 * y + a
		if (Number.isInteger(y) && x > 0) ans.push([x, y])
	}

	return ans
}

//d(solequa(13))

export function cantor(s: number): string {
	/** s = n(n+1)/2
	 * => n^2 + n - 2 S = 0
	 * => n = (-1 + sqrt(1^2 - 4 * 1 * (-2 * s)))/2
	 * ans = s - (1 + 2 + .... Math.ceil(n-1)-1)
	 */
	const n: number = (-1 + Math.sqrt(1 + 8 * s)) / 2
	const _n = Math.ceil(n + 1) - 1
	const t: number = [...Array(_n).keys()].reduce(
		(acc: number, cur: number) => acc + cur,
		1
	)
	const diff = s - t
	d(s, _n, t, diff)
	if (_n % 2 == 0) {
		return `${diff + 1}/${_n - diff}`
	} else {
		return `${_n - diff}/${diff + 1}`
	}
}
//for (let i = 1; i < 24; i++) {
//  d(cantor(i))
//}

export const primeFactors = (n: number): string => {
	let ans: [number, number][] = []
	let ss = ""
	let pf: number[] = []
	const rt = Math.ceil(Math.sqrt(n))

	for (let i = 2; i < rt; i++) {
		if (n % i !== 0) continue
		let exp = 0
		while (n % i == 0) {
			++exp
			n /= i
		}
		ans.push([i, exp])
	}
	if (n != 1) ans.push([n, 1])

	for (const a of ans) {
		ss += `(${a[0]}`
		if (a[1] > 1) {
			ss += `**${a[1]}`
		}
		ss += `)`
	}
	if (ss == "") ss = `(${n})`

	return ss
}

//d(primeFactors(86240))

export const listSquared = (m: number, n: number): number[][] => {
	const rt = Math.ceil(Math.sqrt(n))
	let ans = [1, n]
	for (let i = 2; i < rt; i++) {
		if (n % i !== 0) continue
		ans.push(i)
		while (n % i == 0) {
			n /= i
		}
		ans.push(n)
	}
	if (Number.isInteger(rt)) ans.push(rt)
	if (n != 1) ans.push(n)
	d(ans)
	return []
}

//listSquared(1, 246)

export function sumFracts(l: number[][]): string | null {
	console.log(l)
	if (l.length === 0) return null
	let s = l.reduce((acc, cur) => acc * cur[1], 1)
	let divided = l
		.map((x) => (s / x[1]) * x[0])
		.reduce((acc, cur) => acc + cur, 0)
	const rt = Math.sqrt(Math.min(s, divided))

	for (let i = 2; i < rt + 1; i++) {
		if (s % i !== 0 || divided % i != 0) continue
		while (s % i == 0 && divided % i == 0) {
			s /= i
			divided /= i
		}
	}

	return s === 1 ? `${divided}` : `[${divided}, ${s}]`
}
/**
d(
	sumFracts([
		[52, 26],
		[49, 2],
	])
)
*/
export function longestRepetition(t: string): [string, number] {
	const tt = t.match(/(\w)\1*/g) || [""]
	d(tt)
	return tt.reduce(
		(acc, cur) => (cur.length > acc[1] ? [cur[0], cur.length] : acc),
		["", -1]
	)
}

//d(longestRepetition("ab"))

export function playPass(s: string, n: number): string {
	const alphabet = Array(26)
		.fill(0)
		.map((_, i) => String.fromCharCode(65 + i))
		.join("")

	let m = new Map<String, String>()
	const shifted = alphabet.substring(n) + alphabet.substring(0, n)
	for (let i = 0; i < 26; i++) {
		m.set(alphabet[i], shifted[i])
	}
	d(m)
	let ans = ""
	const l = s.length
	for (let i = l - 1; -1 < i; i--) {
		if ("A" <= s[i] && s[i] <= "Z") {
			if (i % 2 == 0) {
				ans += m.get(s[i])
			} else {
				ans += (m.get(s[i]) || "").toLowerCase()
			}
		} else if ("0" <= s[i] && s[i] <= "9") {
			ans += `${9 - parseInt(s[i])}`
		} else {
			ans += s[i]
		}
	}
	return ans
}

d(playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2))
