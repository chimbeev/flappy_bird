const game = new Game()
game.prepare().then(() => {
    game.start(10)
})