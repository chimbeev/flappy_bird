class Entity {
    constructor({ x, y, width, height, frames, spriteSheet, drawEngine, game }) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
        this.speed = 0
        this._frames = frames //массив из фреймов с птичкой с разными крыльями и будем переключаться между ними для
        //анимации полета
        this._frameIdx = 0 //индекс текущего фрейма птички
        this._spriteSheet = spriteSheet
        this.falling = false //Все сущности не падают
        this._drawEngine = drawEngine
        this._game = game
    }

    draw() { //метод отрисовывает птичку. Берет область  из спрайшита
        this._drawEngine.drawImage({
            spriteSheet: this._spriteSheet,
            image: this._frames[this._frameIdx],
            x: this.x,
            y: this.y,
            width: this.width,
            height: this.height,
        })
    }

    update(delta) {

        this._frameIdx = (this._frameIdx + Math.ceil(delta)) % this._frames.length //Каждый раз при запуске метода update() индекс
        //увеличивается на единицу до достижения общего кол-ва фреймов (числа 3)
    }
}