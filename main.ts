input.onPinPressed(TouchPin.P0, function () {
    _type = 3
})
input.onButtonPressed(Button.A, function () {
    _type = 2
})
input.onButtonPressed(Button.AB, function () {
    _type = 0
})
input.onButtonPressed(Button.B, function () {
    _type = 1
})
input.onPinPressed(TouchPin.P1, function () {
    _type = 4
})
let item: number[] = []
let _type = 0
let list = [
[
0,
0,
0,
0,
1
],
[
0,
0,
0,
1,
1
],
[
0,
0,
1,
0,
1
],
[
0,
1,
0,
0,
1
],
[
1,
0,
0,
0,
1
]
]
basic.forever(function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            if (list[y][x] == 1) {
                led.plot(x, y)
            } else {
                led.unplot(x, y)
            }
        }
    }
    if (_type == 1) {
        for (let y = 0; y <= 4; y++) {
            for (let x = 0; x <= 4; x++) {
                if (list[y][x] == 1) {
                    led.plot(x, y)
                } else {
                    led.unplot(x, y)
                }
            }
        }
        for (let y = 0; y <= 4; y++) {
            item = list[y]
            item.unshift(item.pop())
        }
        basic.pause(100)
    } else if (_type == 2) {
        for (let y = 0; y <= 4; y++) {
            for (let x = 0; x <= 4; x++) {
                if (list[y][x] == 1) {
                    led.plot(x, y)
                } else {
                    led.unplot(x, y)
                }
            }
        }
        for (let y = 0; y <= 4; y++) {
            item = list[y]
            item.push(item.shift())
        }
        basic.pause(100)
    } else if (_type == 3) {
        for (let y = 0; y <= 4; y++) {
            for (let x = 0; x <= 4; x++) {
                if (list[y][x] == 1) {
                    led.plot(y, x)
                } else {
                    led.unplot(y, x)
                }
            }
        }
        for (let y = 0; y <= 4; y++) {
            item = list[y]
        }
        item.push(item.pop())
        basic.pause(100)
    } else if (_type == 4) {
        for (let y = 0; y <= 4; y++) {
            item = list[y]
        }
        item.push(item.shift())
        basic.pause(100)
    }
})
