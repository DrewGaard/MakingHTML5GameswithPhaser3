class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        // this.load.image("road", "images/road.jpg");
        this.load.spritesheet("balls", "images/balls.png", { frameWidth: 100, frameHeight: 100 });
        this.load.spritesheet("paddles", "images/paddles.png", { frameWidth: 400, frameHeight: 50 });
        // this.load.image("line", "images/line.png");
        // this.load.image("pcar1", "images/pcar1.png");
        // this.load.image("pcar2", "images/pcar2.png");
        // this.load.image("cone", "images/cone.png");
        // this.load.image("barrier", "images/barrier.png");

        // this.load.image("button1", "images/ui/buttons/1/1.png");
    
    }
    create() {
        emitter = new Phaser.Events.EventEmitter();
        controller = new Controller();

        var mediaManager = new MediaManager({scene:this});

        var sb = new SoundButtons({scene:this});

    }
    buttonPressed(params)
    {
        console.log(params);
        this.scene.start("SceneOver");
    }
    update() {
        
    }
}