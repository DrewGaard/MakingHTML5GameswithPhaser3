class SceneMain extends Phaser.Scene {
    constructor() {
        super('SceneMain');
    }
    preload()
    {
    
    }
    create() {
        emitter = new Phaser.Events.EventEmitter();
        controller = new Controller();

        var mediaManager = new MediaManager({scene:this});

        var sb = new SoundButtons({scene:this});

        this.centerX = game.config.width/2;
        this.centerY = game.config.height/2;

        this.background = this.add.image(0,0,'background');
        this.background.setOrigin(0,0);

        this.ship = this.physics.add.sprite(this.centerX,this.centerY,'ship');

        Align.scaleToGameW(this.ship,.125);

        this.background.scaleX = this.ship.scaleX;
        this.background.scaleY = this.ship.scaleY;
        this.physics.world.setBounds(0,0,this.background.displayWidth,this.background.displayHeight);

        this.background.setInteractive();
        this.background.on('pointerup',this.backgroundClicked,this);

        this.background.on('pointerdown',this.onDown,this);

        this.cameras.main.setBounds(0,0,this.background.displayWidth, this.background.displayHeight);
        this.cameras.main.startFollow(this.ship, true);

        this.bulletGroup = this.physics.add.group();
        this.rockGroup = this.physics.add.group({
            key: 'rocks',
            frame: [0,1,2],
            frameQuantity: 4,
            bounceX: 1,
            bounceY: 1,
            angularVelocity: 1,
            collideWorldBounds: true
        });

        this.rockGroup.children.iterate(function(child){
            var xx = Math.floor(Math.random() * this.background.displayWidth);
            var yy = Math.floor(Math.random() * this.background.displayHeight);
            child.x = xx;
            child.y = yy;

            Align.scaleToGameW(child,.1);

            var vx = Math.floor((Math.random()*2)-1);
            var vy = Math.floor((Math.random()*2)-1);

            if(vx == 0 && vy == 0)
            {
                vx = 1;
                vy = 1;
            }

            var speed = Math.floor(Math.random()*200)+10;
            child.body.setVelocity(vx*speed,vy*speed);

        }.bind(this));

        this.physics.add.collider(this.rockGroup);
        this.physics.add.collider(this.bulletGroup,this.rockGroup,this.destroyRock,null,this);

        var frameNames = this.anims.generateFrameNumbers('exp');

        var f2 = frameNames.slice();
        f2.reverse();
        var f3 = f2.concat(frameNames);

        this.anims.create({
            key: 'boom',
            frames: f3,
            frameRate: 48,
            repeat: false
        });

        this.eship = this.physics.add.sprite(this.centerX,0,'eship');
        Align.scaleToGameW(this.eship,.25);
        
    }
    destroyRock(bullet, rock)
    {
        bullet.destroy();
        var explosion = this.add.sprite(rock.x,rock.y,'exp');
        explosion.play('boom');
        rock.destroy();
    }
    getTimer()
    {
        var d = new Date();
        return d.getTime();
    }
    onDown()
    {
        this.downTime = this.getTimer();

    }
    backgroundClicked()
    {
        var elapsed = Math.abs(this.downTime-this.getTimer());
        console.log(elapsed);
        if(elapsed < 300)
        {
            var tx = this.background.input.localX * this.background.scaleX;
            var ty = this.background.input.localY * this.background.scaleY;
            this.tx = tx;
            this.ty = ty;
            var angle = this.physics.moveTo(this.ship, tx, ty, 100);
            angle = this.toDegrees(angle);
            this.ship.angle = angle;
        }
        else
        {
            this.makeBullet();
        }

        var angle2 = this.physics.moveTo(this.eship, this.ship.x, this.ship.y, 60);
        angle2 = this.toDegrees(angle2);
        this.eship.angle = angle2;
    }
    makeBullet()
    {
        var dirObj = this.getDirFromAngle(this.ship.angle);
        console.log(dirObj);
        var bullet = this.physics.add.sprite(this.ship.x + dirObj.tx * 30,this.ship.y + dirObj.ty * 30, 'bullet');
        this.bulletGroup.add(bullet);
        bullet.angle = this.ship.angle;
        bullet.body.setVelocity(dirObj.tx*200,dirObj.ty*200);
    }
    getDirFromAngle(angle) {
        var rads = angle * Math.PI / 180;
        var tx = Math.cos(rads);
        var ty = Math.sin(rads);
        return {
            tx,
            ty
        }
    }
    toDegrees(angle)
    {
        return angle * (180 / Math.PI);
    }
    update() {
        var distX = Math.abs(this.ship.x - this.tx);
        var distY = Math.abs(this.ship.y - this.ty);
        if(distX < 10 && distY < 10)
        {
            this.ship.body.setVelocity(0,0);
        }

        var distX2 = Math.abs(this.ship.x - this.eship.x);
        var distY2 = Math.abs(this.ship.y - this.eship.y);
        if(distX2 < game.config.width / 5 && distY2 < game.config.height / 5)
        {
            this.eship.alpha = .5;
        }
        else
        {
            this.eship.alpha = 1;
        }
    }
}