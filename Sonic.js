class Sonic{
    constructor(game){
        this.game = game;
        this.animator = new Animator(ASSET_MANAGER.getAsset("sonic.png"), 0, 0, 40, 40, 12, .025);
        this.speed = 1000;
        this.x = 0;
        this.y = 0;
        this.facingRight = true;
    };

    update() {
        if (this.game.keys["a"]) {
            this.x -= this.speed * this.game.clockTick;
            this.facingRight = false;
        }
        if (this.game.keys["d"]) {
            this.x += this.speed * this.game.clockTick;
            this.facingRight = true;
        }
    };

    draw(ctx) {
        ctx.save();
        if (!this.facingRight) {
            ctx.scale(-1, 1);
            this.animator.drawFrame(this.game.clockTick, ctx, -this.x - this.animator.width * 2, this.y);
        } else {
            this.animator.drawFrame(this.game.clockTick, ctx, this.x, this.y);
        }
        ctx.restore();
    };

}