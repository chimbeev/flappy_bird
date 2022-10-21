class DrawEngine {
    drawImage1(spriteSheet, image, x, y, width, height) {
        console.log('class DrawImage image', image)
    }
    clear() {}
}

class CanvasDrawEngine extends DrawEngine {
    constructor({ canvas }) {
        super()
        this._canvas = canvas
        this._context = this._canvas.getContext('2d')
    }

    drawImage(spriteSheet, image, x, y, width, height) {
        spriteSheet = document.getElementById('source');
        //super.drawImage({ spriteSheet, image, x, y, width, height })

        console.log(image)
        console.log(x, y)
        console.log(width, height)

        this._context.drawImage(spriteSheet, image.x, image.y, image.h, image.w, x, y, width, height)
        //this._context.drawImage(spriteSheet, 120, 120, 120, 120, 20, 20, 220, 220)


    }

    clear() {
        super.clear();
        this._context.clearRect(0, 0, this._canvas.width, this._canvas.height)
    }
}