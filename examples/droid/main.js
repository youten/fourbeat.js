enchant();

var SCREEN_WIDTH = 640;
var SCREEN_HEIGHT = 480;

var DROID_X = 120;
var DROID_Y = 300;
var IMG_DROID = 'droid.png';

var label;
var droid;

window.onload = function() {
    var game = new Core(SCREEN_WIDTH, SCREEN_HEIGHT);
    game.preload(IMG_DROID);

    // label
    var label = new Label("");
    label.x = SCREEN_WIDTH / 2;
    label.y = 20;
    game.rootScene.addChild(label);
    
    // Spriteの配置
    game.onload = function() {
        // droid
        droid = new Sprite(96, 96); // a.k.a. drawable-xhdpi/ic_launcher.png
        droid.image = game.assets[IMG_DROID];
        droid.x = DROID_X;
        droid.y = DROID_Y;
        droid.dx = 0.0;
        droid.dy = 0.0;
        game.rootScene.addChild(droid);        
        
        // フレーム毎の処理
        game.addEventListener(Event.ENTER_FRAME, function() {
            // dy
            droid.y += droid.dy;
            droid.dy += 1.0;
            if (droid.y >= DROID_Y) {
                droid.y = DROID_Y;
                droid.dy = 0.0;
            }
        
            // dx
            droid.x += droid.dx;
            droid.dx *= 0.9;
            if ( (-1.0 < droid.dx) && (droid.dx < 1.0) ) {
                droid.dx = 0.0;
            }
        });
    }

    // for FourBeat
    FourBeat.enableFourBeatOnScene(game.rootScene, function(event, color) {
        if (event == FourBeat.FB_EVENT_PRESS) {
            switch (color) {
            case FourBeat.FB_COLOR_RED:
                label.text = 'red pressed';
                if (droid.dy >= 0.0) {
                    droid.dy -= 20.0;
                }
                break;
            case FourBeat.FB_COLOR_BLUE:
                droid.dx -= 10.0;
                label.text = 'blue pressed';
                break
            case FourBeat.FB_COLOR_YELLOW:
                droid.dx += 10.0;
                label.text = 'yellow pressed';
                break
            case FourBeat.FB_COLOR_GREEN:
                label.text = 'green pressed';
                break;
            default:
                break;
            }
        } else if (event == FourBeat.FB_EVENT_RELEASE) {
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
