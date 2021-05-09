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

  // player bilgileri
  this.playerInfo = {
    x: canvasWidth / 2 - this.scaled.width / 2,
    y: canvasHeight - 10 - this.scaled.height,
    width: this.scaled.width,
    height: this.scaled.height,
  };

  this.playerMissiles = new Array();
  this.playerSpeed = 4;
  this.playerMissileSpeed = 3;

  // korona bilgileri
  this.korono = new Array(); //invaders
  this.koronoMissiles = new Array(); //invadersMissiles
  this.koronoMissileSpeed = 3; // invaderMissileSpeed

  this.missileWidth = 20;
  this.missileHeight = 20;
  this.koronoRange = { x: 0, width: 0 };

  // oyunun bitip bitmedigini kontrol eden degisken
  this.completed = false;

  // baslangin fonksiyonumuz
  this.init = function () {
    let propertyKorona = this.id;
    this.koronoRange.width =
      propertyKorona.cols * propertyKorona.width +
      propertyKorona.cols * propertyKorona.gap;

    this.koronoRange.x = canvasWidth / 2 - this.koronoRange.width / 2;

    let yoffset = 10;
    let xoffset = this.koronoRange.x;

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
        this.korono.push(invader);
      }
    }
  };

  // cizme fonksiyonu : korona ve playeri cizer
  this.draw = function (cc) {
    for (let i = 0; i < this.korono.length; i++) {
      let invader = this.korono[i];
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
      this.playerInfo.x,
      this.playerInfo.y,
      this.playerInfo.width,
      this.playerInfo.height
    );
  };
  // oyunu guncellemek icin kullandigimiz fonksiyon
  this.update = function (cc) {
    if (this.completed) return;
    this.updatePlayerMovement();
    this.draw(cc);
    this.updateMissiles(cc);
    this.updateKoronoBehaviour();
    this.checkGameCompleted();
  };

  // kullanilan klavye kombinasyonunu dinleyip ona gore tetiklenen atamalar
  this.updatePlayerMovement = function () {
    if (leftkey) {
      this.playerInfo.x -= this.playerSpeed;
    }
    if (rightkey) {
      this.playerInfo.x += this.playerSpeed;
    }
    if (this.playerInfo.x < this.koronoRange.x) {
      this.playerInfo.x = this.koronoRange.x;
    }
    if (
      this.playerInfo.x + this.playerInfo.width >
      this.koronoRange.x + this.koronoRange.width
    ) {
      this.playerInfo.x =
        this.koronoRange.x + this.koronoRange.width - this.playerInfo.width;
    }
  };

  // playerin ates etmesini saglayan fonksiyon
  this.playerShootMissile = function () {
    let missile = {
      x: this.playerInfo.x + this.playerInfo.width / 2 - this.missileWidth / 2,
      y: this.playerInfo.y - this.missileHeight,
    };
    this.playerMissiles.push(missile);
  };

  this.updateMissiles = function (cc) {
    for (let i = 0; i < this.playerMissiles.length; i++) {
      let missile = this.playerMissiles[i];
      missile.y -= this.playerMissileSpeed;
      for (let j = 0; j < this.korono.length; j++) {
        let inv = this.korono[j];
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
          this.playerMissiles.splice(i, 1);
          this.korono.splice(j, 1);
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

    // oyunun bitip bitmedigini kontrol eder ve basarisiz bitti ise gameover screen yonlendirir
    for (let i = 0; i < this.koronoMissiles.length; i++) {
      let missile = this.koronoMissiles[i];
      missile.y += this.koronoMissileSpeed;
      if (
        rectColl(
          missile.x,
          missile.y,
          this.missileWidth,
          this.missileHeight,
          this.playerInfo.x,
          this.playerInfo.y,
          this.playerInfo.width,
          this.playerInfo.height
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

  this.updateKoronoBehaviour = function () {
    let shoot = Math.random();
    if (shoot < 0.03) {
      let koronax = this.korono[Math.floor(Math.random() * this.korono.length)];
      let missile = {
        x: koronax.x + koronax.width / 2 - this.missileWidth / 2,
        y: koronax.y + koronax.height,
      };
      this.koronoMissiles.push(missile);
    }
  };

  // oyunun bitip bitmedigini kontrol eder ve basarili bitti ise gamesuccess screen yonlendirir
  this.checkGameCompleted = function () {
    localStorage.setItem("killedKorona", this.korono.length);
    if (this.korono.length < 1) {
      this.completed = true;

      this.playerSpeed = 4;
      this.playerMissileSpeed = 3;
      this.playerInfo.x = 4;
      this.playerInfo.y = 3;
      this.koronoMissileSpeed = 3;

      route("gamesuccess", { username: username });
    }
  };
};
