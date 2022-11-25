//AFRAME.registerComponent takes a name (String) and a JS object
AFRAME.registerComponent("color-toggle", {
  init: function () {
    let el = this.el;
    this.toggleColor = function () {
      el.setAttribute("color", "lavender");
    };
    this.el.addEventListener("click", this.toggleColor);
  },
  remove: function () {
    this.el.removeEventListener("click", this.toggleColor);
  },
});
