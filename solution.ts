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




