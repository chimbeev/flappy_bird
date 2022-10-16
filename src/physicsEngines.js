class PhysicsEngine {
    constructor({ gravity }) {
        this._gravity = gravity
    }

    update(entity, delta) {
        if (entity.falling) { //Если сущность падает
            entity.speed += this._gravity * delta
            entity.y +=entity.speed * delta
        }

    }
}