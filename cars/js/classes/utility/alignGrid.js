class AlignGrid
{
    constructor(config)
    {
        this.config = config;
        if(!config.scene)
        {
            console.log("missing scene");
            return;
        }
        if(!config.rows)
        {
            config.rows = 5;
        }
        if(!config.cols)
        {
            config.cols = 5;
        }
        if(!config.height)
        {
            config.height = game.config.height;
        }
        if(!config.width)
        {
            config.width = game.config.width;
        }

        this.scene = config.scene;

        this.cw = config.width/config.cols;
        this.ch = config.width/config.cols;
    }

    show()
    {
        this.graphics = this.scene.add.graphics();
        this.graphics.lineStyle(2,0xff0000);

        for(var i = 0; i < this.config.width; i+=this.cw)
        {
            this.graphics.moveTo(i,0);
            this.graphics.lineTo(i,this.config.height);
        }

        for(var i = 0; i < this.config.height; i+=this.ch)
        {
            this.graphics.moveTo(0,i);
            this.graphics.lineTo(this.config.width,i);
        }

        this.graphics.strokePath();
    }
}