const playSound = url => new Audio(url).play();
const randomRange = (min, max) => Math.floor(min + Math.random() * (max - min + 1));

const KEYS = {
    ARROW_UP: 'ArrowUp',
    ARROW_DOWN: 'ArrowDown',
    ARROW_LEFT: 'ArrowLeft',
    ARROW_RIGHT: 'ArrowRight',
    SPACE: 'Space',
}
const weeabooTypes = [
    {
        width: 90,
        height: 90,
        img: 'img/weeb1.png',
        sound: 'sounds/cheers.mp3',
    },
    {
        width: 90,
        height: 90,
        img: 'img/weeb2.png',
        sound: 'sounds/heyboss_short.mp3',
    },
    {
        width: 65,
        height: 90,
        img: 'img/weeb3.png',
        sound: 'sounds/nyeees.mp3',
    },
];


function WeeabooSlayer(canvas) {
    this.canvas = canvas;
    this.ctx = this.canvas.getContext('2d');
    this.width = canvas.width = 1024;
    this.height = canvas.height = 768;
    this.arrowRightPressed = false;
    this.arrowLeftPressed = false;
    this.score = 0;
    this.lives = 5;
    this.bg = new Image();
    this.bg.src = 'img/bg.jpg';
    this.lostBg  = new Image();
    this.lostBg.src = 'img/lostbg.png';
    this.player = new GameEntity(this.width / 2 - 150, this.height - 150, 300, 150, 'img/player.png', 10);
    this.weeaboos = [];
    this.keys = {};
    
};

WeeabooSlayer.prototype.draw = function() {
    this.ctx.drawImage(this.bg, 0, 0, this.width, this.height);
    this.weeaboos.forEach(weeb => {
        this.ctx.drawImage(weeb.img, weeb.x, weeb.y, weeb.width, weeb.height);
    });
    this.ctx.drawImage(this.player.img, this.player.x, this.player.y, this.player.width, this.player.height);

    this.ctx.font = "30px Comic Sans MS";
    this.ctx.fillStyle = '#fff';
    this.ctx.fillText(`SCORE: ${this.score}`, 0, 30);
    this.ctx.fillText(`LIVES: ${this.lives}`, this.width - 150, 30);
};


WeeabooSlayer.prototype.onKeyDown = function(e) {
    this.keys[e.code] = true;
};

WeeabooSlayer.prototype.onKeyUp = function(e) {
    this.keys[e.code] = false;
};

WeeabooSlayer.prototype.spawnWeeb = function() {
    const weebType = weeabooTypes[randomRange(0, 2)];
    const weeb = new GameEntity(randomRange(0, this.width - weebType.width), 
                                randomRange(-800, -100), 
                                weebType.width, weebType.height,
                                weebType.img, randomRange(2, 5));
    this.weeaboos.push(weeb);
    if (Math.random() > .9) playSound(weebType.sound);
};

WeeabooSlayer.prototype.loop = function() {
    this.reqAnimationFrame = requestAnimationFrame(this.loop);

    this.handleKeys();

    this.checkCollision();

    this.populateWeebs();

    this.draw();

    this.checkIfWasted();
};

WeeabooSlayer.prototype.handleKeys = function() {
    if (this.keys[KEYS.ARROW_LEFT] && this.player.x > 0) {
        this.player.move(-this.player.vel, 0);
    } else if (this.keys[KEYS.ARROW_RIGHT] && this.player.x + this.player.width < this.width) {
        this.player.move(this.player.vel, 0);
    }
}

WeeabooSlayer.prototype.populateWeebs = function() {
    if (this.weeaboos.length < 10) {
        this.spawnWeeb();
    }
};

WeeabooSlayer.prototype.checkCollision = function() {
    this.weeaboos.forEach((weeb, index) => {
        weeb.y += weeb.vel;
        if (weeb.y > this.height) {
            this.weeaboos.splice(index, 1);
            this.lives--;
        }
        if (this.player.intersects(weeb)) {
            this.weeaboos.splice(index, 1);
            this.score += 100;
            if (randomRange(1, 10) === 3)
                playSound('sounds/fuckyou.mp3');
        }
    });
};

WeeabooSlayer.prototype.checkIfWasted = function() {
    if (this.lives <= 0) {
        this.ctx.drawImage(this.lostBg, 0, 0, this.width, this.height);
        playSound('sounds/thisiscancer.mp3');
        cancelAnimationFrame(this.reqAnimationFrame);
        setTimeout(() => location.reload(), 10000);
    }
};

WeeabooSlayer.prototype.start = function() {
    this.loop = this.loop.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
    this.onKeyUp = this.onKeyUp.bind(this);

    document.addEventListener('keydown', this.onKeyDown);
    document.addEventListener('keyup', this.onKeyUp);
    this.loop();
};

function GameEntity(x, y, width, height, imgPath, vel) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.vel = vel;
    this.img = new Image();
    this.img.src = imgPath;
}

GameEntity.prototype.move = function(offsetX, offsetY) {
    this.x += offsetX;
    this.y += offsetY;

    return this;
};

GameEntity.prototype.intersects = function(gameEntity) {
    return this.x < gameEntity.x + gameEntity.width &&
           this.x + this.width > gameEntity.x &&
           this.y < gameEntity.y + gameEntity.height &&
           this.height + this.y > gameEntity.y;
};



const WS = new WeeabooSlayer(document.getElementById('canvas'));
WS.start();