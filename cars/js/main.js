var game;
var model;
var emitter;
var G;
window.onload=function()
{
    var config = {
        type: Phaser.AUTO,
        width: 480,
        height: 640,
        parent: 'div-tag-name',
        scene: [SceneMain]
    };

    g = new Constants();
    model = new Model();
    game = new Phaser.Game(config);
}