class SoundButtons extends Phaser.GameObjects.Container
{
    constructor(config)
    {
        super(config.scene);
        this.scene = config.scene;
        var sfxButton = new ToggleButton({scene:this.scene,backKey:'toggleBack',onIcon:'sfxOn',offIcon:'sfxOff',event:G.TOGGLE_SOUND,x:240,y:450});
        var musicButton = new ToggleButton({scene:this.scene,backKey:'toggleBack',onIcon:'musicOn',offIcon:'musicOff',event:G.TOGGLE_MUSIC});


        this.musicButton.y = this.musicButton.height/2;
        this.musicButton.x = this.musicButton.width/2;

        this.sfxButton.x = game.config.width - this.sfxButton.width/2;
        this.sfxButton.y = this.musicButton.y;
    }
}