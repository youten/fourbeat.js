enchant();

var SCREEN_WIDTH = 640;
var SCREEN_HEIGHT = 480;

window.onload = function() {
    var game = new Core(SCREEN_WIDTH, SCREEN_HEIGHT);

    var label = new Label("");
    label.x = SCREEN_WIDTH / 2;
    label.y = 20;
    game.rootScene.addChild(label);

    // enchant.jsのSceneでFourBeatを有効にする
    FourBeat.enableFourBeatOnScene(game.rootScene, function(event, color) {
        // 以下、callbackを実装
        if (event == FourBeat.FB_EVENT_PRESS) {
            // FourBeatのボタンが押された
            switch (color) {
            case FourBeat.FB_COLOR_RED:
            label.text = 'red pressed';
                break;
            case FourBeat.FB_COLOR_BLUE:
            label.text = 'blue pressed';
                break
            case FourBeat.FB_COLOR_YELLOW:
            label.text = 'yellow pressed';
                break
            case FourBeat.FB_COLOR_GREEN:
            label.text = 'green pressed';
                break;
            default:
                break;
            }
        } else if (event == FourBeat.FB_EVENT_RELEASE) {
            // FourBeatのボタンが離された
            switch (color) {
            case FourBeat.FB_COLOR_RED:
            label.text = 'red released';
                break;
            case FourBeat.FB_COLOR_BLUE:
            label.text = 'blue released';
                break
            case FourBeat.FB_COLOR_YELLOW:
            label.text = 'yellow released';
                break
            case FourBeat.FB_COLOR_GREEN:
            label.text = 'green released';
                break;
            default:
                break;
            }
        }
    });
    game.start();
};





