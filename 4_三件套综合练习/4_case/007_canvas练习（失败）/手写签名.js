<script>
const cvs = document.getElementById('cvs')
const ctx = cvs.getContext('2d')
{/* let isDrawing = false
cvs.addEventListener('mousedown', e => {
    isDrawing = true
    ctx.moveTo(e.pageX, e.pageY)
})
cvs.addEventListener('mousedown', e => {
    if(isDrawing) {
        ctx.lineTo(e.pageX, e.pageY)
        ctx.stroke()
    }
})
cvs.addEventListener('mousedown', e => {
    isDrawing = false
}) */}

    window.onload=function(){
        //获取canvas对象
        /** @type {HTMLCanvasElement} */
        var canvas = document.getElementById('canvas');
        //获取2d上下文对象
        var context = canvas.getContext('2d');
        //设置绘图样式
        context.fillStyle='red';
        context.strokeStyle='blue';
        //设置线宽
        context.lineWidth=0;
        //绘制矩形
        context.fillRect(100,100,150,150);
        context.strokeRect(300,300,50,50);
    }
</script>