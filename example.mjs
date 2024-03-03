import fnMeasureExecutionTime from "./src/index.mjs"

function myFunction() {
	return new Promise(resolve => {
		setTimeout(resolve, 500, "hi")
	})
}

const result = await fnMeasureExecutionTime(myFunction, 100)

// prints something like { value: "hi", execution_time: 502.820208 }
console.log(result)
