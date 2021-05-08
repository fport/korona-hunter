const Game = function () {
  // boyut kucultmek icin kullaniyoruz
  this.scl = 0.1;

  // karakterlerimiz
  this.player = document.getElementById("player");
  this.korona = document.getElementById("korona");
  this.koronaKursun = document.getElementById("koronaKursun");
  this.playerKursun = document.getElementById("playerKursun");

  this.scaled = {
    width: 384 * this.scl,
    height: 512 * this.scl,
  };

  // dusman koronalarin initial bilgileri
  this.id = {
    width: 512 * this.scl,
    height: 512 * this.scl,
    rows: 3,
    cols: 10,
    gap: 10,
  };

  this.ship = {
    x: canvasWidth / 2 - this.scaled.width / 2,
    y: canvasHeight - 10 - this.scaled.height,
    width: this.scaled.width,
    height: this.scaled.height,
  };

  this.shipMissiles = new Array();
  this.shipSpeed = 4;
  this.shipMissileSpeed = 3;

  this.invaders = new Array();
  this.invadersMissiles = new Array();
  this.invaderMissileSpeed = 3;

  this.missileWidth = 20;
  this.missileHeight = 20;

  this.completed = false;
  this.invadersRange = { x: 0, width: 0 };

  this.init = function () {
    let propertyKorona = this.id;
    this.invadersRange.width =
      propertyKorona.cols * propertyKorona.width +
      propertyKorona.cols * propertyKorona.gap;

    this.invadersRange.x = canvasWidth / 2 - this.invadersRange.width / 2;

    let yoffset = 10;
    let xoffset = this.invadersRange.x;

    for (let x = 0; x < propertyKorona.cols; x++) {
      for (let y = 0; y < propertyKorona.rows; y++) {
        let invader = {
          x: x * propertyKorona.width + x * propertyKorona.gap,
          y: y * propertyKorona.height + y * propertyKorona.gap,
          width: propertyKorona.width,
          height: propertyKorona.height,
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
      drawImg(
        cc,
        this.korona,
        invader.x,
        invader.y,
        invader.width,
        invader.height
      );
    }
    drawImg(
      cc,
      this.player,
      this.ship.x,
      this.ship.y,
      this.ship.width,
      this.ship.height
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
      this.ship.x + this.ship.width >
      this.invadersRange.x + this.invadersRange.width
    ) {
      this.ship.x =
        this.invadersRange.x + this.invadersRange.width - this.ship.width;
    }
  };

  this.shipShootMissile = function () {
    let missile = {
      x: this.ship.x + this.ship.width / 2 - this.missileWidth / 2,
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
            inv.width,
            inv.height
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
        this.playerKursun
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
          this.ship.width,
          this.ship.height
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
        this.koronaKursun
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
        x: invader.x + invader.width / 2 - this.missileWidth / 2,
        y: invader.y + invader.height,
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

      route("gamesuccess", { username: username });
    }
  };
};
