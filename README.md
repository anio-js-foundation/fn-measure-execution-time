# @anio-js-foundation/fn-measure-execution-time

Measure execution time of a function.

```js
import fnMeasureExecutionTime from "@anio-js-foundation/fn-measure-execution-time"

function myFunction() {
	return new Promise(resolve => {
		setTimeout(resolve, 500, "hi")
	})
}

const result = await fnMeasureExecutionTime(myFunction, 100)

// prints something like { value: "hi", execution_time: 502.820208 }
console.log(result)
```
