
let canvas = document.getElementById('canvas') as HTMLCanvasElement

function resizeCanvas(canvas: HTMLCanvasElement) {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

function drawCircle(ctx: CanvasRenderingContext2D, x: number, y: number, radius: number, fillStyle: string) {
    ctx.fillStyle = fillStyle
    ctx.beginPath()
    ctx.arc(x, y, radius, 0, Math.PI * 2)
    ctx.fill()
}

function timeToRadian(hour: number, minute: number) {
    let radian = 0

    radian += hour % 12 / 12 * Math.PI * 2
    radian += minute % 60 / 60 / 12 * Math.PI * 2

    radian -= 3 / 12 * Math.PI * 2

    return radian
}

function drawSlice(ctx: CanvasRenderingContext2D, originX: number, originY: number, radius: number, from: number, to: number, fillStyle: string) {
    ctx.fillStyle = fillStyle
    ctx.beginPath()
    ctx.arc(originX, originY, radius, from, to)
    ctx.lineTo(originX, originY)
    ctx.fill()
}

function drawPieChart() {
    let originX = canvas.width / 2
    let originY = canvas.height / 2
    let radius = Math.min(originX, originY) * 0.8

    let ctx = canvas.getContext('2d')

    drawCircle(ctx, originX, originY, radius, 'rgba(0, 255, 255, 1)')

    let start = timeToRadian(0, 0)
    let end = timeToRadian(2, 0)
    // console.log(start, end)
    drawSlice(ctx, originX, originY, radius, start, end, 'rgba(29, 24, 100, 1)')
}

function renderChart() {
    resizeCanvas(canvas)
    drawPieChart()
}

window.onresize = function (ev) {
    // console.log(ev)

    // console.log(canvas)
    renderChart()
}

renderChart()
console.log(canvas)