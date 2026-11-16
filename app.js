// 首頁：產生食譜卡片＋依餐別篩選
(function () {
  var grid = document.getElementById("grid");
  var filters = document.getElementById("filters");
  var hint = document.getElementById("hint");
  var meals = ["全部", "早餐", "正餐", "點心"];
  var current = "全部";

  function card(r) {
    return '<a class="recipe-card" href="' + r.file + '">' +
      '<div class="emoji">' + r.emoji + '</div>' +
      '<h2>' + r.name + '</h2>' +
      '<p>' + r.intro + '</p>' +
      '<div class="badges">' +
        '<span class="badge">💰 約 ' + r.cost + ' 元</span>' +
        '<span class="badge">🔌 ' + TOOLS[r.tool] + '</span>' +
        '<span class="badge">⏱ ' + r.minutes + ' 分鐘</span>' +
      '</div></a>';
  }

  function render() {
    var list = RECIPES.filter(function (r) { return current === "全部" || r.meal === current; });
    grid.innerHTML = list.map(card).join("");
    hint.textContent = "目前有 " + list.length + " 道食譜";
    filters.innerHTML = meals.map(function (m) {
      return '<button class="' + (m === current ? "on" : "") + '" data-meal="' + m + '">' + m + '</button>';
    }).join("");
  }

  filters.addEventListener("click", function (e) {
    var m = e.target.getAttribute("data-meal");
    if (m) { current = m; render(); }
  });

  render();
})();
