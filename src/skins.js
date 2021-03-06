// avatar: A 1029x51 set of 21 avatar images.
// tiles: A 250x200 set of 20 map images.
// goal: A 20x34 goal image.
// background: An optional 400x450 background image, or false.
// graph: Colour of optional grid lines, or false.
// look: Colour of sonar-like look icon.

var CONFIGS = {

  pegman: {
    background: false,
    look: '#000'
  },

  farmer: {
    look: '#000'
  },

  pvz: {
    look: '#FFF'
  },

  mouse: {
    look: '#FFF'
  },

  panda: {
    look: '#000'
  }

};

exports.load = function(baseUrl, id) {
  var root = baseUrl + 'skins/' + id + '/';
  var config = CONFIGS[id];
  var skin = {
    id: id,
    avatar: root + 'avatar.png',
    tiles: root + 'tiles.png',
    goal: root + 'goal.png',
    obstacle: root + 'obstacle.png',
    graph: config.graph,
    look: config.look,
    dirt: function(n) {
      var MAX = 10;
      var MIN = -MAX;
      var prefix;
      if (n < MIN) {
        prefix = '-';
      } else if (n > MAX) {
        prefix = '';
      } else {
        prefix = '' + n;
      }
      //TODO: This really should be a dirt sprite sheet.
      return root + prefix + 'check.png';
    }
  };
  if (config.background !== false) {
    skin.background = root + 'background.png';
  }
  return skin;
};
