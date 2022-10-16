class Bird extends Entity {
    constructor(params) {
        super(params)
        this._flapSpeed = params.flapSpeed //скорость подьема птички
        this._physicsEngine = params.physicsEngine
        this.falling = true //Но птичка падает все время
    }

    update(delta) { //метод обновляет данные нашей птички
        super.update(delta)
        this._physicsEngine.update(this, delta) //Передаем физической модели движения птички для обновления
        if (this.y < 0) { //Если птичка уперлась в потолок, то пусть она там остается, не улетает выше потолка
            this.y = 0
        }
        if (this.y + this.height >= this._game.height) { //Если птичка опустилась ниже нижней границы игры, то это
            //означает что птичка упала на землю
            this._game.gameOver()
        }
    }


    flap() { //метод заставляет подпрыгивать птичку наверх
        this.speed = -this._flapSpeed

    }
}