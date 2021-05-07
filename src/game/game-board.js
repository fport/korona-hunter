const Game = function () {
  this.scl = 0.1;

  this.player = document.getElementById("player");
  this.korona = document.getElementById("korona");
  this.koronaKursun = document.getElementById("koronaKursun");
  this.playerKursun = document.getElementById("playerKursun");

  this.sd = {
    w: 384 * this.scl,
    h: 512 * this.scl,
  };

  // dusman koronalarin initial bilgileri
  this.id = {
    w: 512 * this.scl,
    h: 512 * this.scl,
    rows: 3,
    cols: 10,
    gap: 10,
  };

  this.ship = {
    x: canvasWidth / 2 - this.sd.w / 2,
    y: canvasHeight - 10 - this.sd.h,
    w: this.sd.w,
    h: this.sd.h,
  };

  this.shipMissiles = new Array();
  this.shipSpeed = 4;
  this.shipMissileSpeed = 3;

  this.invaders = new Array();
  this.invadersMissiles = new Array();
  this.invaderMissileSpeed = 3;

  this.missileWidth = 3;
  this.missileHeight = 20;

  this.completed = false;
  this.invadersRange = { x: 0, w: 0 };

  this.init = function () {
    let dd = this.id;
    this.invadersRange.w = dd.cols * dd.w + dd.cols * dd.gap;
    this.invadersRange.x = canvasWidth / 2 - this.invadersRange.w / 2;
    let yoffset = 10;
    let xoffset = this.invadersRange.x;
    for (let x = 0; x < dd.cols; x++) {
      for (let y = 0; y < dd.rows; y++) {
        let invader = {
          x: x * dd.w + x * dd.gap,
          y: y * dd.h + y * dd.gap,
          w: dd.w,
          h: dd.h,
        };
        invader.x += xoffset;
        invader.y += yoffset;
        this.invaders.push(invader);
      }
    }
  };
  //image
  this.draw = function (cc) {
    for (let i = 0; i < this.invaders.length; i++) {
      let invader = this.invaders[i];
      drawImg(cc, this.korona, invader.x, invader.y, invader.w, invader.h);
    }
    drawImg(
      cc,
      this.player,
      this.ship.x,
      this.ship.y,
      this.ship.w,
      this.ship.h
    );
  };

  this.update = function (cc) {
    if (this.completed) return;
    this.updateShipMovement();
    this.draw(cc);
    this.updateMissiles(cc);
    this.updateInvadersBehaviour();
    this.checkGameCompleted();
  };

  this.updateShipMovement = function () {
    if (leftkey) {
      this.ship.x -= this.shipSpeed;
    }
    if (rightkey) {
      this.ship.x += this.shipSpeed;
    }
    if (this.ship.x < this.invadersRange.x) {
      this.ship.x = this.invadersRange.x;
    }
    if (
      this.ship.x + this.ship.w >
      this.invadersRange.x + this.invadersRange.w
    ) {
      this.ship.x = this.invadersRange.x + this.invadersRange.w - this.ship.w;
    }
  };

  this.shipShootMissile = function () {
    let missile = {
      x: this.ship.x + this.ship.w / 2 - this.missileWidth / 2,
      y: this.ship.y - this.missileHeight,
    };
    this.shipMissiles.push(missile);
  };

  this.updateMissiles = function (cc) {
    for (let i = 0; i < this.shipMissiles.length; i++) {
      let missile = this.shipMissiles[i];
      missile.y -= this.shipMissileSpeed;
      for (let j = 0; j < this.invaders.length; j++) {
        let inv = this.invaders[j];
        if (
          rectColl(
            missile.x,
            missile.y,
            this.missileWidth,
            this.missileHeight,
            inv.x,
            inv.y,
            inv.w,
            inv.h
          )
        ) {
          this.shipMissiles.splice(i, 1);
          this.invaders.splice(j, 1);
          break;
        }
      }
      drawRect(
        cc,
        missile.x,
        missile.y,
        this.missileWidth,
        this.missileHeight,
        shipMissileColor
      );
    }

    for (let i = 0; i < this.invadersMissiles.length; i++) {
      let missile = this.invadersMissiles[i];
      missile.y += this.invaderMissileSpeed;
      if (
        rectColl(
          missile.x,
          missile.y,
          this.missileWidth,
          this.missileHeight,
          this.ship.x,
          this.ship.y,
          this.ship.w,
          this.ship.h
        )
      ) {
        this.completed = true;

        route("gameover", { score: 2, username: username });
      }
      drawRect(
        cc,
        missile.x,
        missile.y,
        this.missileWidth,
        this.missileHeight,
        invaderMissileColor
      );
    }
  };

  this.updateInvadersBehaviour = function () {
    let shoot = Math.random();
    if (shoot < 0.03) {
      let invader = this.invaders[
        Math.floor(Math.random() * this.invaders.length)
      ];
      let missile = {
        x: invader.x + invader.w / 2 - this.missileWidth / 2,
        y: invader.y + invader.h,
      };
      this.invadersMissiles.push(missile);
    }
  };

  this.checkGameCompleted = function () {
    localStorage.setItem("killedKorona", this.invaders.length);
    if (this.invaders.length < 1) {
      this.completed = true;

      this.shipSpeed = 4;
      this.shipMissileSpeed = 3;
      this.ship.x = 4;
      this.ship.y = 3;
      this.invaderMissileSpeed = 3;

      route("gamesuccess", { score: 2, username: username });
    }
  };
};
