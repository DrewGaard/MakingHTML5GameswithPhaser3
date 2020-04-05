class SceneTitle extends Phaser.Scene {
    constructor() {
        super('SceneTitle');
    }
    preload()
    {
        this.load.image("title", "images/title.png");
        this.load.image("button1", "images/ui/buttons/2/1.png");

        this.load.image("toggleBack","images/ui/toggles/1.png");
        this.load.image("sfxOff","images/ui/icons/sfx_off.png");
        this.load.image("sfxOn","images/ui/icons/sfx_on.png");
        this.load.image("musicOn","images/ui/icons/music_on.png");
        this.load.image("MusicOff","images/ui/icons/music_off.png");
    }
    create() {
        emitter = new Phaser.Events.EventEmitter();
        controller = new Controller();

        this.alignGrid = new AlignGrid({rows:11,cols:11,scene:this});
        //this.alignGrid.showNumbers();

        var title = this.add.image(0,0,'title');
        Align.scaleToGameW(title,.8);
        this.alignGrid.placeAtIndex(38,title);

        var btnStart = new FlatButton({scene:this,key:'button1',text:'start',event:'start_game'});
        this.alignGrid.placeAtIndex(93,btnStart);

        var sb = new SoundButtons({scene:this})


        emitter.on('start_game',this.startGame,this);
    }
    startGame()
    {
        this.scene.start('SceneMain');
    }
    update() {

    }
}