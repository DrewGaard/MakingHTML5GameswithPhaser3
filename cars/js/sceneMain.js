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
    }
    create() {
        this.road = new Road({scene:this});
        this.road.x = this.game.config.width/2;

        emitter = new Phaser.Events.EventEmitter();

        model.score = 100;
        console.log(model.score);



        this.road.makeLines();
    }
    update() {
        this.road.moveLines();
        this.road.moveObject();
    }
}