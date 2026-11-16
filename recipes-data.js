// 食譜清單：新增食譜時在陣列最後加一筆（規則見 AGENTS.md 第五節）
var TOOLS = { rc: "電鍋", pan: "平底鍋", mw: "微波爐", none: "免開火" };

var RECIPES = [
  { file: "recipes/pan-tomato-egg.html", name: "番茄炒蛋", emoji: "🍅",
    tool: "pan", meal: "正餐", cost: 45, minutes: 15,
    intro: "酸甜下飯，新手第一道" },
  { file: "recipes/rc-steamed-egg.html", name: "電鍋蒸蛋", emoji: "🥚",
    tool: "rc", meal: "早餐", cost: 25, minutes: 20,
    intro: "按下開關就能等著吃" },
  { file: "recipes/mw-mug-cake.html", name: "馬克杯蛋糕", emoji: "🧁",
    tool: "mw", meal: "點心", cost: 30, minutes: 5,
    intro: "微波 2 分鐘的療癒甜點" }
];
