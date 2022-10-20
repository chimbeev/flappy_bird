class Entity {
    constructor({ x, y, width, height, frames, spriteSheet, drawEngine, game }) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this._frames = frames //массив из фреймов с птичкой с разными крыльями и будем переключаться между ними для
        //анимации полета
        this._spriteSheet = spriteSheet
        this.falling = false //Все сущности не падают
        this._drawEngine = drawEngine
        this._game = game
        this.speed = 0
        this._frameIdx = 0 //индекс текущего фрейма птички

        console.log('constructor this.y', this.y)
    }

    draw() { //метод отрисовывает птичку. Берет область  из спрайшита
        console.log('draw() this.x', this.x)
        console.log('draw() this.y', this.y)
        console.log('draw() image', this._frames[0])
        console.log('draw() this._frameIdx', this._frameIdx)
        console.log('draw() this.width', this.width)
        console.log('draw() this.height', this.height)

        this._drawEngine.drawImage({
            spriteSheet: this._spriteSheet,
            //image: this._frames[this._frameIdx],
            //image: 10,
            image: this._frames[0],
            x: this.x,
            y: this.y,
            //y: 30,
            width: this.width,
            height: this.height
        })
    }

    update(delta) {

        this._frameIdx = (this._frameIdx + Math.ceil(delta)) % this._frames.length //Каждый раз при запуске метода update() индекс
        //увеличивается на единицу до достижения общего кол-ва фреймов (числа 3)
    }
}