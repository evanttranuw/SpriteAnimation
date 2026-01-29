class Animator {
    constructor( spritSheet, xstart, yStart, width, height, frameCount, frameDuration) {
        Object.assign(this, {spritSheet, xstart, yStart, width, height, frameCount, frameDuration});
        this.elaspedTime = 0;
        this.totalTime = frameCount * frameDuration;
    };

    drawFrame(tick, ctx, x, y) {
        this.elaspedTime += tick;
        if(this.elaspedTime > this.totalTime) this.elaspedTime -= this.totalTime;
        const frame = this.currentFrame();

        ctx.drawImage(this.spritSheet,
                                    this.xstart + this.width*frame, this.yStart,
                                    this.width, this.height, 
                                    x, y, 
                                    this.width*2, this.height*2);
    };

    currentFrame() {
        return Math.floor(this.elaspedTime / this.frameDuration);

    };

    isDone() {
        return (this.elaspedTime >= this.totalTime);
    }

}