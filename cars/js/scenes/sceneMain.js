class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        this.load.image("road", "images/road.jpg");
        this.load.spritesheet("cars", "images/cars.png", { frameWidth: 60, frameHeight: 126 });
        this.load.image("line", "images/line.png");
        this.load.image("pcar1", "images/pcar1.png");
        this.load.image("pcar2", "images/pcar2.png");
        this.load.image("cone", "images/cone.png");
        this.load.image("barrier", "images/barrier.png");

        this.load.image("button1", "images/ui/buttons/1/1.png");

        this.load.audio('cat',["audio/meow.mp3","audio/meow.ogg"]);

        this.load.audio('backgroundMusic',["audio/background.mp3","audio/background.ogg"]);


        this.load.image("toggleBack","images/ui/toggles/1.png");
        this.load.image("toggleBack","images/ui/icons/sfx_off.png");
        this.load.image("toggleBack","images/ui/icons/sfx_on.png");
        this.load.image("toggleBack","images/ui/icons/music_on.png");
        this.load.image("toggleBack","images/ui/icons/music_off.png");

    
    }
    create() {
        emitter = new Phaser.Events.EventEmitter();
        controller = new Controller();

        var mediaManager = new MediaManager({scene:this});

        mediaManager.setBackgroundMusic('backgroundMusic');

        this.road = new Road({scene:this});
        this.road.x = this.game.config.width/2;

    


        this.sb = new ScoreBox({scene:this});
        this.sb.x = game.config.width-50;
        this.sb.y = 50;

        model.score = 100;
        console.log(model.score);

        this.road.makeLines();

        var gridConfig = {rows:5,cols:5,scene:this};
        this.alignGrid = new AlignGrid(gridConfig);
        this.alignGrid.showNumbers();

        this.alignGrid.placeAtIndex(4,this.sb);

        emitter.on('button_pressed',this.buttonPressed,this);
    }
    buttonPressed(params)
    {
        console.log(params);
        emitter.emit(G.PLAY_SOUND, 'cat');
        this.scene.start("SceneOver");
    }
    update() {
        this.road.moveLines();
        this.road.moveObject();
    }
}