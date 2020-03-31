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

        controller = new Controller();


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

    }
    update() {
        this.road.moveLines();
        this.road.moveObject();
    }
}