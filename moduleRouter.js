module.exports = {
    Manager: require('./src/manager')
};

String.prototype.format = function() {
    a = this;
    for (k in arguments) {
      a = a.replace("%a", arguments[k])
    }
    return a
  }