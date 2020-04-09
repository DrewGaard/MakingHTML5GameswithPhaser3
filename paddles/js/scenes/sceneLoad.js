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

        this.load.spritesheet("balls", "images/balls.png", { frameWidth: 100, frameHeight: 100 });
        this.load.spritesheet("paddles", "images/paddles.png", { frameWidth: 400, frameHeight: 50 });
        this.load.image("bar", "images/bar.jpg");

        this.load.audio('lose', ['audio/lose.wav', 'audio/lose.ogg']);
        this.load.audio('flip', ['audio/flip.wav', 'audio/flip.ogg']);
        this.load.audio('hit', ['audio/hit.wav', 'audio/hit.ogg']);

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