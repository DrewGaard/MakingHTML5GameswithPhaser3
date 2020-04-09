class SceneLoad extends Phaser.Scene {
    constructor() {
        super('SceneLoad');
    }
    preload()
    {
        this.load.image("toggleBack", "images/ui/toggles/3.png");
        this.load.image("sfxOff", "images/ui/icons/sfx_off.png");
        this.load.image("sfxOn", "images/ui/icons/sfx_on.png");
        this.load.image("musicOn", "images/ui/icons/music_on.png");
        this.load.image("musicOff", "images/ui/icons/music_off.png");

        this.load.image("ship", "images/player.png");
        this.load.image("eship", "images/eship.png");
        this.load.image("ebullet", "images/ebullet.png");
        this.load.image("bullet", "images/bullet.png");

        this.load.image("background", "images/background.jpg");

        this.load.spritesheet("rocks", "images/rocks.png",{frameWidth: 125, frameHeight: 100});
        this.load.spritesheet("exp", "images/exp.png",{frameWidth: 64, frameHeight: 64});


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