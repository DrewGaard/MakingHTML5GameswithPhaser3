class SceneLoad extends Phaser.Scene {
    constructor() {
        super('SceneLoad');
    }
    preload()
    {
        
    }
    onProgress(value)
    {
        console.log(value);
        this.bar.setPercent(value);
        var per = Math.floor(value*100);
        this.progText.setText(per+"%");
    }
    create()
    {
        this.scene.start("SceneTitle");
    }
}