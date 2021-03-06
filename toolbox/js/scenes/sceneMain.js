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
    
    }
    create() {
        emitter = new Phaser.Events.EventEmitter();
        controller = new Controller();

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


        var fireText = {color:'red', fontSize:20};
        var flatButton = new FlatButton({scene:this,key:'button1',text:'Fire!',x:200,y:100,event:'button_pressed',params:'fire_lasers',textConfig:fireText});



        emitter.on('button_pressed',this.buttonPressed,this);
    }
    buttonPressed(params)
    {
        console.log(params);
        this.scene.start("SceneOver");
    }
    update() {
        this.road.moveLines();
        this.road.moveObject();
    }
}