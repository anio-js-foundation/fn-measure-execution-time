export default async function fnMeasureExecutionTime(fn, ...args) {
	const start = globalThis.performance.now()

	const value = await fn(...args)

	return {
		value,
		execution_time: globalThis.performance.now() - start
	}
}
