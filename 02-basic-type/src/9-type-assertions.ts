/*
 * @Author: Angelo
 * @Date: 2024-06-28 16:07:29
 * @version: 
 * @Descripttion: 
 */
//类型断言 as

//方式一：
const myCanvas = document.getElementById('main_canvs') as HTMLCanvasElement

//方式二：
const myCanvas2 = <HTMLCanvasElement>document.getElementById('main_canvas');


//对于一个确切的类型需要把它变成一个更大的类型（其实就是一个模糊的类型）
const x = ('hell0' as any) as number
const xx = ('hell0' as unknown) as number
//下面会给出提示：将类型'string'转换为类型'number'可能是错误的，因为两种类型都没有充分重叠。如果这是故意的，请先将表达式转换为'unknown'。
//const xxx = 'hell0' as number