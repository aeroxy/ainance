/* Ainance page components. Light DOM: each element already holds readable
   text, and these only draw the visual layer, so a page reads the same
   without JavaScript. Archived pages load this same file, so keep the
   element names and attributes backward compatible. A classic script, not a
   module, so pages also work opened straight from disk. */
(function () {
  "use strict";

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  // <fb-score dir="bullish|bearish" value="1..9">Bullish 7x</fb-score>
  class FbScore extends HTMLElement {
    connectedCallback() {
      if (this.dataset.ready) return;
      var value = Math.min(9, Math.max(1, parseInt(this.getAttribute("value"), 10) || 1));
      var dir = this.getAttribute("dir") === "bearish" ? "bearish" : "bullish";
      var word = dir === "bullish" ? "Bullish" : "Bearish";
      var meter = el("span", "fb-meter");
      meter.setAttribute("aria-hidden", "true");
      for (var i = 1; i <= 9; i++) meter.append(el("i", i <= value ? "on" : ""));
      this.classList.add(dir);
      this.title = word + " conviction, " + value + " of 9";
      this.replaceChildren(el("span", "sr-only", word + " conviction "), meter, el("span", "fb-score-label", value + "x"));
      this.dataset.ready = "1";
    }
  }

  // <fb-change value="-1.82" unit="%|bp">-1.82%</fb-change>
  class FbChange extends HTMLElement {
    connectedCallback() {
      if (this.dataset.ready) return;
      var v = parseFloat(this.getAttribute("value"));
      if (!isFinite(v)) return;
      var bp = this.getAttribute("unit") === "bp";
      var digits = bp ? 1 : 2;
      var rounded = Number(v.toFixed(digits));
      var dir = rounded > 0 ? "up" : rounded < 0 ? "down" : "flat";
      var glyph = { up: "▲", down: "▼", flat: "•" }[dir];
      var said = { up: "up ", down: "down ", flat: "unchanged " }[dir];
      var amount = Math.abs(rounded).toFixed(digits) + (bp ? " bp" : "%");
      var g = el("span", "fb-glyph", glyph);
      g.setAttribute("aria-hidden", "true");
      this.classList.add(dir);
      this.replaceChildren(g, el("span", "sr-only", said), el("span", "", amount));
      this.dataset.ready = "1";
    }
  }

  customElements.define("fb-score", FbScore);
  customElements.define("fb-change", FbChange);
})();
