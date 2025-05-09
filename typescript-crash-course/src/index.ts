// Primitive Types
let id: number = 5
let userName: string = 'Steven'
let isWorking: boolean = true
let x: any = 'Hello'

let ids: number[] = [1, 2, 3, 4, 5]
let arr: any[] = [1, true, 'Hello']

// Tuple
let person: [number, string, boolean] = [1, 'Steven', true]  // Important to follow the order of the tuple

// Tuple Array
let employees: [number, string] []
employees = [
    [1, 'Steven'],
    [2, 'John'],
    [3, 'Jane']
]

// Union
let pid: string | number 
pid = '22'
pid = 22

// Enum
enum Direction1 {
    Up = 1,
    Down,
    Left,
    Right
}

enum Direction2 {
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT'
}

// Objects
const user = {
    id: 1,
    name: 'Steven'
 }