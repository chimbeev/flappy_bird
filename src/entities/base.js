class Entity {
    constructor({ x, y, width, height, frames, spriteSheet, drawEngine, game }) {
        this.x = x
        this._y = y
        this.width = width
        this.height = height
        this._frames = frames //массив из фреймов с птичкой с разными крыльями и будем переключаться между ними для
        //анимации полета
        this._spriteSheet = spriteSheet
        this.falling = false //Все сущности не падают
        this._drawEngine = drawEngine
        this._game = game
        this.speed = 0
        this.frameIdx = 2 //индекс текущего фрейма птички

        console.log('constructor this._y', this._y)
    }

    draw() { //метод отрисовывает птичку. Берет область  из спрайшита
        let i = this.frameIdx
        console.log('draw() this.x', this.x)
        console.log('draw() this._y', this._y)
        console.log('draw() image', this._frames[0])
        console.log('draw() this.frameIdx', this.frameIdx)
        console.log('draw() this.width', this.width)
        console.log('draw() this.height', this.height)
        console.log('draw() this._frames', this._frames[2])

        this._drawEngine.drawImage( this._spriteSheet, this._frames[i], this.x, this._y, this.width, this.height)
            //image: this._frames[this._frameIdx],
            //image: 10,


    }

    update(delta) {

        this._frameIdx = (this._frameIdx + Math.ceil(delta)) % this._frames.length //Каждый раз при запуске метода update() индекс
        //увеличивается на единицу до достижения общего кол-ва фреймов (числа 3)
    }
}