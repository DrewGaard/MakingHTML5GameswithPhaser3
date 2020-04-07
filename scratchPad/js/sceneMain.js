class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
        this.load.image("mario", "images/mario.png");
        this.load.image("apple", "images/apple.png");

        this.load.image("ground", "images/ground.png");

        
        this.load.spritesheet("bob", 'images/bob.png', { frameWidth: 128, frameHeight: 222 });

        this.load.audio('cat', ['audio/meow.mp3', 'audio/meow.ogg']);
    }
    create() {
        console.log(game);
        this.apple = this.physics.add.sprite(240,300,'apple');

        this.apple.setGravityY(200);
        this.apple.setBounce(0,.5);

        this.ground = this.physics.add.sprite(240,600,'ground');
        this.ground.setImmovable();


        this.physics.add.collider(this.apple, this.ground);

        this.input.on('pointerdown',this.moveApple,this);

        // this.mario = this.add.image(200, 200, "mario");
        // this.mario.alpha = .5;
        // this.mario.displayWidth = 30;
        // this.mario.scaleY = this.mario.scaleX;

        // this.mario.setOrigin(0,0);

        // this.mario.x = game.config.width/2;
        // this.mario.y = game.config.height/2;

        // this.char=this.add.sprite(game.config.width/2, game.config.height/2,"bob")

        // var frameNames= this.anims.generateFrameNumbers('bob');

        // this.anims.create({
        //     key: 'walk',
        //     frames: frameNames,
        //     frameRate: 8,
        //     repeat: -1
        // });

        // this.char.play('walk');

        // this.doWalk();

        // this.text1 = this.add.text(200,300,"HELLO!",{fontFamily:'Anton', color:'#ff0000', fontSize:'40px'});

        // this.char.setInteractive();
        // this.char.on('pointerdown', this.onDown, this);
        // this.char.on('pointerup', this.onUp, this);


        // this.graphics=this.add.graphics();
        // this.graphics.lineStyle(4, 0xff0000);
        // this.graphics.moveTo(100,100);
        // this.graphics.lineTo(100,300);

        // this.graphics.strokeRect(100,200,50,50);

        // this.catSound = this.sound.add('cat');
        // this.catSound.play();
    }
    moveApple()
    {
        this.apple.setVelocity(0,-100);
    }
    // onDown() 
    // {
    //     this.char.alpha=.5;
    // }
    // onUp() 
    // {
    //     this.char.alpha=1;
    // }
    // doWalk() 
    // {
    //     this.tweens.add({targets: this.char,duration: 5000,x:game.config.width,y:0,alpha:0 ,onComplete:this.onCompleteHandler, onCompleteParams:[this]});
    // }
    // onCompleteHandler (tween, targets, scope)
    // {
    //     console.log("complete!")
    //     var char = targets[0];
    //     char.x = 0;
    //     char.y = game.config.height/2;
    //     char.alpha = 1;
    //     scope.doWalk()
    
    // }
    // update() {
        
    //     this.char.x++;
    //     if(this.char.x > game.config.width) {
    //         this.char.x=0;
    //     }
    // }
}