require.config({
  baseUrl:"jam/",
});

var p;

require(["jam", "../lib/sylvester", "../js/proto", "../js/player", "../js/level", "../js/goal", "../js/util", "../js/ghost"], function(jam, syl, proto, player, level, goal, util, ghost) {
  jam.config({dataDir:"data/"});

  var main = function() {
	var g = new jam.Game(640, 480, document.getElementById('game-1'));
	var s = g.root.scene;
    g.bgColor = "rgb(55, 55, 55)";

    var l = new level();
    p = new player(20, 10);
    var e = new goal(600, 235);

    player.prototype.reset = function(){
      this.path.term = util.approx(this.tdt);

      var hue = this.ghost_color % 360;
      var c = util.hsv_to_rgb(hue, 1, 1);
      var gho = new ghost(this.path, c.r, c.g, c.b);

      this.ghosts.push(gho);

      this.x = this.init.x;
      this.y = this.init.y;
      this.tdt = 0;
      this.path = {};
      this.path.term = 0;
      this.path.steps = {};
      this.path.steps[0] = {
        x: this.init.x,
        y: this.init.y
      };
      this.ghost_color += 60;

      for (g in this.ghosts){
        this.ghosts[g].tdt = 0;
      }

      s.add(gho)
    };

    p.on_update = function(dt) {
      jam.Rect.collide(p, l);
 	  if (jam.Rect.collide(p, e)) {
        p.reset();
      }
    };

    s.add(l);
    s.add(p);
    s.add(e);

    g.camera.follow = p;

	g.run();
  };

  var preload = function() {
	jam.showPreloader(main);
  };

  preload();

  /** /
  window.setTimeout(function(){
    window.console.log = function(){
    };
  }, 3000);
  /**/
});
