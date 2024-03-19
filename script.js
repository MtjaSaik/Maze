var cord = [
  [2, 2, 226, 2], [242, 2, 482, 2], [18, 18, 34, 18], [66, 18, 82, 18], [114, 18, 130, 18], [146, 18, 162, 18], [178, 18, 210, 18],
  [226, 18, 290, 18], [306, 18, 322, 18], [386, 18, 434, 18], [466, 18, 482, 18], [2, 34, 34, 34], [82, 34, 130, 34], [162, 34, 194, 34],
  [210, 34, 242, 34], [322, 34, 402, 34], [434, 34, 466, 34], [50, 50, 66, 50], [114, 50, 130, 50], [146, 50, 162, 50], [242, 50, 274, 50],
  [306, 50, 322, 50], [354, 50, 386, 50], [418, 50, 450, 50], [466, 50, 482, 50], [18, 66, 50, 66], [66, 66, 98, 66], [130, 66, 242, 66],
  [274, 66, 306, 66], [322, 66, 386, 66], [450, 66, 466, 66], [50, 82, 66, 82], [98, 82, 114, 82], [146, 82, 178, 82], [194, 82, 226, 82],
  [242, 82, 258, 82], [290, 82, 338, 82], [386, 82, 434, 82], [450, 82, 482, 82], [2, 98, 50, 98], [66, 98, 98, 98], [114, 98, 146, 98],
  [162, 98, 178, 98], [210, 98, 242, 98], [258, 98, 274, 98], [306, 98, 354, 98], [386, 98, 402, 98], [418, 98, 450, 98], [50, 114, 82, 114],
  [130, 114, 210, 114], [226, 114, 258, 114], [274, 114, 306, 114], [338, 114, 354, 114], [370, 114, 386, 114], [402, 114, 450, 114],
  [34, 130, 66, 130], [82, 130, 98, 130], [178, 130, 210, 130], [226, 130, 274, 130], [306, 130, 370, 130], [418, 130, 434, 130],
  [50, 146, 82, 146], [98, 146, 114, 146], [130, 146, 146, 146], [162, 146, 194, 146], [210, 146, 418, 146], [434, 146, 450, 146],
  [2, 162, 50, 162], [82, 162, 114, 162], [226, 162, 242, 162], [290, 162, 306, 162], [338, 162, 370, 162], [402, 162, 434, 162], [82, 178, 98, 178],
  [146, 178, 178, 178], [210, 178, 226, 178], [258, 178, 274, 178], [306, 178, 338, 178], [370, 178, 386, 178], [402, 178, 418, 178],
  [2, 194, 18, 194], [34, 194, 82, 194], [98, 194, 130, 194], [162, 194, 258, 194], [290, 194, 322, 194], [386, 194, 450, 194], [18, 210, 34, 210],
  [82, 210, 98, 210], [114, 210, 162, 210], [194, 210, 210, 210], [242, 210, 290, 210], [306, 210, 322, 210], [386, 210, 402, 210],
  [418, 210, 482, 210], [66, 226, 82, 226], [98, 226, 130, 226], [162, 226, 194, 226], [210, 226, 226, 226], [258, 226, 290, 226], [322, 226, 354, 226],
  [370, 226, 386, 226], [402, 226, 466, 226], [18, 242, 50, 242], [66, 242, 114, 242], [130, 242, 146, 242], [178, 242, 194, 242],
  [226, 242, 242, 242], [258, 242, 274, 242], [338, 242, 370, 242], [418, 242, 482, 242], [2, 258, 18, 258], [50, 258, 66, 258],
  [82, 258, 98, 258], [162, 258, 178, 258], [194, 258, 210, 258], [322, 258, 338, 258], [370, 258, 386, 258], [434, 258, 466, 258],
  [18, 274, 66, 274], [82, 274, 162, 274], [178, 274, 210, 274], [258, 274, 290, 274], [306, 274, 322, 274], [338, 274, 370, 274],
  [386, 274, 434, 274], [2, 290, 18, 290], [34, 290, 50, 290], [66, 290, 82, 290], [130, 290, 178, 290], [194, 290, 226, 290], [242, 290, 258, 290],
  [290, 290, 306, 290], [322, 290, 354, 290], [370, 290, 402, 290], [434, 290, 482, 290], [18, 306, 34, 306], [114, 306, 146, 306], [162, 306, 194, 306],
  [210, 306, 242, 306], [258, 306, 322, 306], [402, 306, 434, 306], [50, 322, 98, 322], [178, 322, 226, 322], [242, 322, 258, 322], [274, 322, 402, 322],
  [18, 338, 34, 338], [82, 338, 114, 338], [130, 338, 210, 338], [226, 338, 242, 338], [274, 338, 306, 338], [322, 338, 418, 338], [434, 338, 450, 338],
  [466, 338, 482, 338], [66, 354, 98, 354], [114, 354, 162, 354], [226, 354, 258, 354], [290, 354, 322, 354], [354, 354, 370, 354], [418, 354, 466, 354],
  [18, 370, 34, 370], [50, 370, 66, 370], [82, 370, 114, 370], [130, 370, 146, 370], [194, 370, 226, 370], [242, 370, 274, 370], [322, 370, 354, 370], [370, 370, 434, 370],
  [450, 370, 482, 370], [2, 386, 18, 386], [50, 386, 66, 386], [98, 386, 130, 386], [146, 386, 162, 386], [194, 386, 210, 386], [242, 386, 258, 386], [290, 386, 418, 386],
  [434, 386, 466, 386], [50, 402, 98, 402], [130, 402, 146, 402], [162, 402, 178, 402], [210, 402, 290, 402], [322, 402, 354, 402], [370, 402, 386, 402], [418, 402, 450, 402],
  [466, 402, 482, 402], [18, 418, 50, 418], [66, 418, 82, 418], [114, 418, 130, 418], [162, 418, 178, 418], [194, 418, 242, 418], [322, 418, 338, 418], [354, 418, 370, 418],
  [434, 418, 466, 418], [50, 434, 66, 434], [146, 434, 162, 434], [178, 434, 194, 434], [242, 434, 258, 434], [274, 434, 322, 434], [434, 434, 482, 434], [34, 450, 50, 450],
  [82, 450, 130, 450], [146, 450, 162, 450], [194, 450, 210, 450], [258, 450, 274, 450], [290, 450, 306, 450], [322, 450, 370, 450], [386, 450, 418, 450], [450, 450, 466, 450],
  [50, 466, 82, 466], [130, 466, 226, 466], [242, 466, 258, 466], [306, 466, 322, 466], [338, 466, 354, 466], [418, 466, 450, 466], [2, 482, 242, 482], [258, 482, 482, 482],
  [2, 2, 2, 482], [18, 50, 18, 82], [18, 98, 18, 146], [18, 178, 18, 194], [18, 210, 18, 242], [18, 274, 18, 290], [18, 306, 18, 322], [18, 354, 18, 370], [18, 386, 18, 402],
  [18, 418, 18, 466], [34, 18, 34, 50], [34, 82, 34, 98], [34, 114, 34, 146], [34, 178, 34, 194], [34, 210, 34, 226], [34, 242, 34, 258], [34, 290, 34, 418], [34, 434, 34, 450],
  [34, 466, 34, 482], [50, 2, 50, 34], [50, 50, 50, 82], [50, 98, 50, 114], [50, 146, 50, 178], [50, 194, 50, 258], [50, 290, 50, 306], [50, 322, 50, 370], [50, 386, 50, 434],
  [50, 450, 50, 466], [66, 34, 66, 66], [66, 82, 66, 98], [66, 130, 66, 146], [66, 162, 66, 194], [66, 210, 66, 242], [66, 258, 66, 322], [66, 338, 66, 354], [66, 434, 66, 466],
  [82, 2, 82, 50], [82, 66, 82, 82], [82, 114, 82, 130], [82, 146, 82, 178], [82, 258, 82, 274], [82, 290, 82, 306], [82, 322, 82, 338], [82, 354, 82, 386], [82, 418, 82, 450], [82, 466, 82, 482],
  [98, 18, 98, 34], [98, 50, 98, 66], [98, 82, 98, 114], [98, 130, 98, 146], [98, 178, 98, 242], [98, 290, 98, 322], [98, 386, 98, 434], [98, 450, 98, 466], [114, 2, 114, 18], [114, 34, 114, 82],
  [114, 98, 114, 146], [114, 162, 114, 178], [114, 242, 114, 258], [114, 274, 114, 370], [114, 402, 114, 450], [114, 466, 114, 482], [130, 66, 130, 82], [130, 114, 130, 130], [130, 162, 130, 194],
  [130, 242, 130, 258], [130, 322, 130, 338], [130, 370, 130, 386], [130, 418, 130, 434], [130, 450, 130, 466], [146, 18, 146, 34], [146, 82, 146, 98], [146, 130, 146, 210], [146, 226, 146, 274],
  [146, 290, 146, 322], [146, 386, 146, 434], [162, 18, 162, 34], [162, 50, 162, 66], [162, 114, 162, 162], [162, 210, 162, 242], [162, 306, 162, 338], [162, 354, 162, 386], [162, 402, 162, 418],
  [162, 434, 162, 450], [178, 34, 178, 50], [178, 82, 178, 98], [178, 162, 178, 178], [178, 194, 178, 210], [178, 242, 178, 290], [178, 338, 178, 402], [178, 418, 178, 466], [194, 34, 194, 98],
  [194, 146, 194, 194], [194, 210, 194, 242], [194, 290, 194, 306], [194, 354, 194, 386], [194, 402, 194, 418], [210, 2, 210, 50], [210, 98, 210, 114], [210, 130, 210, 178], [210, 226, 210, 274],
  [210, 338, 210, 354], [210, 418, 210, 450], [226, 50, 226, 66], [226, 194, 226, 226], [226, 242, 226, 306], [226, 322, 226, 402], [226, 418, 226, 466], [242, 66, 242, 98], [242, 162, 242, 194],
  [242, 210, 242, 290], [242, 370, 242, 386], [242, 402, 242, 418], [242, 434, 242, 482], [258, 18, 258, 66], [258, 98, 258, 114], [258, 146, 258, 162], [258, 178, 258, 194], [258, 226, 258, 242],
  [258, 258, 258, 274], [258, 306, 258, 354], [258, 418, 258, 434], [274, 34, 274, 50], [274, 66, 274, 98], [274, 114, 274, 130], [274, 146, 274, 178], [274, 194, 274, 210], [274, 242, 274, 258],
  [274, 274, 274, 306], [274, 338, 274, 482], [290, 18, 290, 66], [290, 82, 290, 114], [290, 130, 290, 146], [290, 162, 290, 210], [290, 226, 290, 274], [290, 354, 290, 386], [290, 402, 290, 418],
  [290, 466, 290, 482], [306, 2, 306, 34], [306, 66, 306, 82], [306, 114, 306, 130], [306, 162, 306, 178], [306, 210, 306, 226], [306, 242, 306, 290], [306, 322, 306, 338], [306, 370, 306, 434],
  [306, 450, 306, 466], [322, 34, 322, 66], [322, 98, 322, 114], [322, 146, 322, 162], [322, 194, 322, 210], [322, 226, 322, 258], [322, 274, 322, 306], [322, 338, 322, 354], [322, 450, 322, 466],
  [338, 2, 338, 50], [338, 162, 338, 178], [338, 194, 338, 226], [338, 258, 338, 274], [338, 306, 338, 322], [338, 354, 338, 370], [338, 402, 338, 418], [338, 434, 338, 450], [338, 466, 338, 482],
  [354, 18, 354, 34], [354, 66, 354, 114], [354, 162, 354, 226], [354, 242, 354, 258], [354, 290, 354, 306], [354, 338, 354, 370], [354, 386, 354, 402], [354, 418, 354, 434], [370, 2, 370, 18],
  [370, 82, 370, 130], [370, 178, 370, 242], [370, 258, 370, 290], [370, 306, 370, 322], [370, 402, 370, 418], [370, 434, 370, 482], [386, 50, 386, 82], [386, 114, 386, 178], [386, 210, 386, 226],
  [386, 242, 386, 258], [386, 290, 386, 306], [386, 354, 386, 370], [386, 402, 386, 466], [402, 34, 402, 66], [402, 82, 402, 130], [402, 226, 402, 274], [402, 306, 402, 322], [402, 338, 402, 370],
  [402, 386, 402, 434], [402, 466, 402, 482], [418, 18, 418, 66], [418, 130, 418, 162], [418, 178, 418, 194], [418, 242, 418, 258], [418, 274, 418, 306], [418, 322, 418, 338], [418, 402, 418, 450],
  [434, 66, 434, 82], [434, 130, 434, 146], [434, 162, 434, 178], [434, 258, 434, 274], [434, 306, 434, 322], [434, 338, 434, 354], [434, 370, 434, 402], [434, 418, 434, 466], [450, 2, 450, 34],
  [450, 50, 450, 98], [450, 114, 450, 130], [450, 146, 450, 194], [450, 274, 450, 338], [450, 450, 450, 466], [466, 98, 466, 210], [466, 258, 466, 274], [466, 306, 466, 338], [466, 466, 466, 482],
  [482, 2, 482, 482],
];
path = [
  [234, 2], [234, 10], [298, 10], [298, 58], [314, 58], [314, 74], [346, 74], [346, 90], [298, 90], [298, 106],
  [314, 106], [314, 122], [362, 122], [362, 74], [378, 74], [378, 106], [394, 106], [394, 138], [410, 138],
  [410, 122], [442, 122], [442, 138], [458, 138], [458, 202], [410, 202], [410, 218], [394, 218], [394, 234],
  [378, 234], [378, 250], [362, 250], [362, 266], [346, 266], [346, 250], [330, 250], [330, 234], [362, 234],
  [362, 170], [378, 170], [378, 154], [330, 154], [330, 170], [314, 170], [314, 154], [282, 154], [282, 186],
  [266, 186], [266, 202], [234, 202], [234, 234], [218, 234], [218, 282], [186, 282], [186, 298], [154, 298],
  [154, 330], [138, 330], [138, 314], [122, 314], [122, 346], [170, 346], [170, 394], [154, 394], [154, 426],
  [170, 426], [170, 458], [138, 458], [138, 410], [122, 410], [122, 394], [106, 394], [106, 442], [90, 442],
  [90, 410], [58, 410], [58, 426], [74, 426], [74, 458], [90, 458], [90, 474], [106, 474], [106, 458], [122, 458],
  [122, 474], [234, 474], [234, 426], [250, 426], [250, 410], [266, 410], [266, 442], [250, 442], [250, 458], [266, 458], [266, 474], [250, 474], [250, 482]
];
var spawn = [
  [26],[42],[58],[74],[90],[106],[122],[138],[154],[170],[186],[202],[218],[234],[250],[266],[282],[298],[314],[330],[346],[362],[378],[394],[410],[426],[442],[458],[474]
];

sound = new Audio('music/hero.mp3');
sound.volume=0.025;
document.addEventListener("click", (event) => {
  sound.play();
});


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const character = document.getElementById("canvas2");
const ctx2 = character.getContext("2d");
const laser = document.getElementById("canvas3");
const ctx3 = laser.getContext("2d");

function drawMaze() {
  scale = 1.20;

  canvas.width = 484 * scale;
  canvas.height = 484 * scale;
  ctx.scale(scale, scale);

  ctx.beginPath();
  ctx.strokeStyle = "black";
  for (i = 0; i < cord.length; i++) {
    ctx.moveTo(cord[i][0], cord[i][1]);
    ctx.lineTo(cord[i][2], cord[i][3]);
  }
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.closePath();
}
drawMaze();

function drawSolution() {
  removeSolution();
  document.getElementById("play").setAttribute("disabled", true);
  document.getElementById("sol").setAttribute("disabled", true);
  character.style.display = "none";
  laser.style.display = "none";

  const drawLinesWithDelay = (ctx, path, delay, style) => {

    ctx.beginPath();
    ctx.strokeStyle = "#ff01eb";

    ctx.lineWidth = 4;

    const drawLineSegment = (i) => {
      const point = path[i];
      const x = point[0];
      const y = point[1];

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }

      ctx.stroke();

      if (i < path.length - 1) {
        setTimeout(() => {
          drawLineSegment(i + 1);
        }, delay);
      } else {
        ctx.closePath();
        document.getElementById("sol").removeAttribute("disabled");
        document.getElementById("play").removeAttribute("disabled");

      }
    };

    drawLineSegment(0);

  };
  const delayBetweenLines = 35;

  drawLinesWithDelay(ctx, path, delayBetweenLines);

}
function removeSolution() {
  document.getElementById("play").setAttribute("disabled", true);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawMaze();
}


chW = 16;
chH = 14;
function drawCh() {
  character.width = 484 * scale;
  character.height = 484 * scale;
  ctx2.scale(scale, scale);

  url = "pictures/baloon.png";
  img = document.createElement("img");
  img.setAttribute('src', url);
  img.onload = function () {
    ctx2.drawImage(img, 228, 2, chW, chH);
  };
}
document.addEventListener("DOMContentLoaded", (event) => {
  drawCh();
});

var start = false;
me = true;
var progressiveDifficulty = false;
function moveCh(){
  me = false;
  start = true;
  removeSolution();
  ctx2.clearRect(0, 0, canvas.width, canvas.height);
  character.style.display = "block";

  y = 2;
  x = 228;
  m = 16;
  ctx2.drawImage(img, x, y, chW, chH);
  if(document.getElementById('toggle').checked == false){
    console.log("easy");
    progressiveDifficulty = false;
  }else{
    console.log("hard");
    progressiveDifficulty = true;
  }
  if(hit == false){
    drawLaser();
  }
}
document.addEventListener("keydown", (e) => {

  //var p = ctx.getImageData(200, g, 1, 1).data[0]; 
  //console.log(p);


  if (me) return;
  const key = e.key;
  j = (x - 4) / m * 2 + 1;
  k = (y - 2) / m * 2 + 1;
  //console.log((x-4)/m*2+1+"  "+(y-2)/m*2+1);
  switch (key) {
    case "w":
    case "W":
    case "ArrowUp":

      if (y > 2) {
        if (arr[(x - 4) / m * 2 + 1][(y - 2) / m * 2 + 1 - 1] == 0) {
          ctx2.clearRect(0, 0, canvas.width, canvas.height);
          y = y - m;
          ctx2.drawImage(img, x, y, chW, chH);
          //console.log(x+" "+y);
        }
      }
      break;


    case "s":
    case "S":
    case "ArrowDown":
      if (y < 466) {
        if (arr[(x - 4) / m * 2 + 1][(y - 2) / m * 2 + 1 + 1] == 0) {
          ctx2.clearRect(0, 0, canvas.width, canvas.height);
          y = y + m;
          ctx2.drawImage(img, x, y, chW, chH);
          //console.log(x+" "+y);
        }

      }
      break;


    case "a":
    case "A":
    case "ArrowLeft":
      if (x > 4) {
        if (arr[(x - 4) / m * 2 + 1 - 1][(y - 2) / m * 2 + 1] == 0) {
          ctx2.clearRect(0, 0, canvas.width, canvas.height);
          x = x - m;
          ctx2.drawImage(img, x, y, chW, 16);
          //console.log(x+" "+y);
        }
        if(x==260 && y==466 || x==244 && y==466){
          endMenu();
          ctx2.clearRect(0,0, canvas.width, canvas.height);
          drawCh();
          y=2;
          x=228;
          me=true;
          document.getElementById("play").removeAttribute("disabled");
          //console.log("end");
        }
      }
      break;


    case "d":
    case "D":
    case "ArrowRight":
      if (x < 468) {
        if (arr[(x - 4) / m * 2 + 1 + 1][(y - 2) / m * 2 + 1] == 0) {
          ctx2.clearRect(0, 0, canvas.width, canvas.height);
          x = x + m;
          ctx2.drawImage(img, x, y, chW, chH);
          //console.log(x+" "+y);
        }

      }
      break;


    case "r":
    case "R":
      location.reload();
      break;
  }

});


get_px = (ctx, x, y) => {
  return ctx.getImageData(x, y, 1, 1).data;
};

var w = 30;
var h = 30;
arr = new Array(w * 2 + 1);
for (var i = 0; i < arr.length; i++) {
  arr[i] = new Array(h * 2 + 1);
  arr[i].fill(0);
}
var xStart = 2 * scale;
var yStart = 2 * scale;
var xSize = 16 * scale;

for (var i = 0; i < w * 2 + 1; i++) {
  for (var j = 0; j < h * 2 + 1; j++) {
    var wi = xStart + xSize / 2 * i;
    var hj = yStart + xSize / 2 * j;
    var cl = get_px(ctx, wi, hj);
    if (cl[3] != 0) {
      arr[i][j] = 1;
      //console.log(i+"  "+j);
      //console.log(cl);
    }
  }
}
//console.log(arr);

  var pxl = 0.75;
  var pxl2 = 1.0;
  var pxl3 = 1.2;
  var pyl4 = 0.3;
  var pyl5 = 0.45;
  var pyl6 = 1.5; 
function drawLaser(){
  var t=true;
  var t2=true;
  var t3=true;
  var t4=true;
  var t5=true;
  var t6=true;
  scale = 1.20;
  laser.width = 484 * scale;
  laser.height = 484 * scale;
  ctx3.scale(scale, scale);

  var laserWidth = 50;


  
  sy = Math.round(Math.random()*(28-0)+0);
  sy2 = Math.round(Math.random()*(28-0)+0);
  sy3 = Math.round(Math.random()*(28-0)+0);

  sx4 = Math.round(Math.random()*(28-0)+0);
  sx5 = Math.round(Math.random()*(28-0)+0);
  sx6 = Math.round(Math.random()*(28-0)+0);


  var xl = -50;
    if(sy == sy2 || sy == sy3){
      sy = Math.round(Math.random()*(28-0)+0);
    }
  yl = spawn[sy];


  var xl2 = -50;
        if(sy2 == sy || sy2 == sy3){
          sy2 = Math.round(Math.random()*(28-0)+0);
        }
      yl2 = spawn[sy2];


  var xl3 = -50;
        if(sy3 == sy || sy3 == sy2){
          sy3 = Math.round(Math.random()*(28-0)+0);
        }
      yl3 = spawn[sy3];


      var yl4 = -50;
        if(sx4 == sx5 || sx4 == sx6 || sx4 == 13){
          sx4 = Math.round(Math.random()*(28-0)+0);
        }
      xl4 = spawn[sx4];
      if(xl4 == 234){
          xl4 = spawn[sx4];
      }

      var yl5 = -50;
        if(sx5 == sx4 || sx5 == sx6 || sx5 == 13){
          sx5 = Math.round(Math.random()*(28-0)+0);
        }
      xl5 = spawn[sx5];
      if(xl5 == 234){
        xl5 = spawn[sx5];
      }

      var yl6 = -50;
        if(sx6 == sx4 || sx6 == sx5 || sx6 == 13){
          sx6 = Math.round(Math.random()*(28-0)+0);
        }
      xl6 = spawn[sx6];
      if(xl6 == 234){
        xl6 = spawn[sx6];
      }

  function draw(){
    ctx3.clearRect(0, 0, 484, 484);
    if(hit == false){
    detectHit();
    }
    ctx3.beginPath();
    ctx3.moveTo(xl, yl);
    ctx3.lineTo(xl + laserWidth, yl);
    ctx3.strokeStyle = 'red';
    ctx3.lineWidth = 6;
    ctx3.stroke();
    ctx3.closePath();

    ctx3.beginPath();
    ctx3.moveTo(xl2, yl2);
    ctx3.lineTo(xl2 + laserWidth, yl2);
    ctx3.strokeStyle = 'red';
    ctx3.lineWidth = 6;
    ctx3.stroke();
    ctx3.closePath();

    ctx3.beginPath();
    ctx3.moveTo(xl3, yl3);
    ctx3.lineTo(xl3 + laserWidth, yl3);
    ctx3.strokeStyle = 'red';
    ctx3.lineWidth = 6;
    ctx3.stroke();
    ctx3.closePath();

    ctx3.beginPath();
    ctx3.moveTo(xl4, yl4);
    ctx3.lineTo(xl4, yl4 + laserWidth);
    ctx3.strokeStyle = 'red';
    ctx3.lineWidth = 6;
    ctx3.stroke();
    ctx3.closePath();

    ctx3.beginPath();
    ctx3.moveTo(xl5, yl5);
    ctx3.lineTo(xl5, yl5 + laserWidth);
    ctx3.strokeStyle = 'red';
    ctx3.lineWidth = 6;
    ctx3.stroke();
    ctx3.closePath();

    ctx3.beginPath();
    ctx3.moveTo(xl6, yl6);
    ctx3.lineTo(xl6, yl6 + laserWidth);
    ctx3.strokeStyle = 'red';
    ctx3.lineWidth = 6;
    ctx3.stroke();
    ctx3.closePath();


    // Move the laser
    if(progressiveDifficulty == false){
      if(hit == false){
        xl += 0.75;
        xl2 += 1;
        xl3 += 1.2;

        yl4 += 0.3;
        yl5 += 0.45;
        yl6 += 1.5;
      }
   }else{
    if(hit == false){
      xl += pxl;
      xl2 += pxl2;
      xl3 += pxl3;

      yl4 += pyl4;
      yl5 += pyl5;
      yl6 += pyl6;

      //console.log(pxl);
    }
   }

    if (xl > 484) {
      xl = -50;
      sy = Math.round(Math.random()*(28-0)+0);
      while(t){
        if(sy == sy2|| sy == sy3){
          sy = Math.round(Math.random()*(28-0)+0);
        }
        t=false;
      }
      yl = spawn[sy];
    }

    if (xl2 > 484) {
      xl2 = -50;
      sy2 = Math.round(Math.random()*(28-0)+0);
      while(t2){
        if(sy2 == sy|| sy2 == sy3){
          sy2 = Math.round(Math.random()*(28-0)+0);
        }
        t2=false;
      }
      yl2 = spawn[sy2];
    }

    if (xl3 > 484) {
      xl3 = -50;
      sy3 = Math.round(Math.random()*(28-0)+0);
      while(t3){
        if(sy3 == sy2 || sy3 == sy){
          sy3 = Math.round(Math.random()*(28-0)+0);
        }
        t3=false;
      }
      yl3 = spawn[sy3];
    }

    if (yl4 > 484) {
      yl4 = -50;
      sx4 = Math.round(Math.random()*(28-0)+0);
      while(t4){
        if(sx4 == sx5 || sx4 == sx6 || sx4 == 13){
          sx4 = Math.round(Math.random()*(28-0)+0);
        }
        t4=false;
      }
      if(x !== 228 && xl4 !== 364){
        xl4 = spawn[sx4];
      }
    }

    if (yl5 > 484) {
      yl5 = -50;
      sx5 = Math.round(Math.random()*(28-0)+0);
      while(t5){
        if(sx5 == sx4 || sx5 == sx6 || sx5 == 13){
          sx5 = Math.round(Math.random()*(28-0)+0);
        }
        t5=false;
      }
      if(x !== 228 && xl5 !== 364){
        xl5 = spawn[sx5];
      }
    }

    if (yl6 > 484) {
      yl6 = -50;
      sx6 = Math.round(Math.random()*(28-0)+0);
      while(t6){
        if(sx6 == sx4 || sx6 == sx5 || sx6 == 13){
          sx6 = Math.round(Math.random()*(28-0)+0);
        }
        t6=false;
      }
      if(x !== 228 && xl6 !== 364){
        xl6 = spawn[sx6];
      }
    }
    requestAnimationFrame(draw);
  }
  if(hit == false){
    draw();
  }
  function detectHit(){
    //console.log(x+" "+y);
    //console.log(xl+" "+yl +" "+ sy+ " "+ ((spawn[sy])-(8)));
    //console.log(xl4 +" "+ yl4 + " " + spawn[sx4] + " "+ ((spawn[sx4])-(6)));
    if(x >= xl && x <= xl + laserWidth-5 && y == ((spawn[sy])-(8)) || x >= xl2 && x <= xl2 + laserWidth-5 && y == ((spawn[sy2])-(8)) || x >= xl3 && x <= xl3 + laserWidth-5 && y == ((spawn[sy3])-(8)) || y >= yl4 && y <= yl4 + laserWidth && x == ((spawn[sx4])-(6)) || y >= yl5 && y <= yl5 + laserWidth && x == ((spawn[sx5])-(6)) || y >= yl6 && y <= yl6 + laserWidth && x == ((spawn[sx6])-(6))){
        hit = true;
        loseMenu();
    }
    console.log(hit);
  }
  //endMenu();
  //loseMenu();
}
var hit = false;

if(start = true){
function incrementVariable() {
  pxl += Math.random() * (0.80 - 0.15) + 0.10;
  pxl2 += Math.random() * (0.80 - 0.15) + 0.10;
  pxl3 += Math.random() * (0.80 - 0.15) + 0.10;

  pyl4 += Math.random() * (0.80 - 0.15) + 0.10;
  pyl5 += Math.random() * (0.80 - 0.15) + 0.10;
  pyl6 += Math.random() * (0.80 - 0.15) + 0.10;

  if(pxl >= 5.5){
    pxl = 5.5;
  }
  if(pxl2 >= 5.5){
    pxl2 = 5.5;
  }
  if(pxl3 >= 5.5){
    pxl3 = 5.5;
  }
  if(pyl4 >= 5.5){
    pyl4 = 5.5;
  }
  if(pyl5 >= 5.5){
    pyl5 = 5.5;
  }
  if(pyl6 >= 5.5){
    pyl6 = 5.5;
  }
}

}
const intervalId = setInterval(incrementVariable, 5000);

function endMenu(){
  sound.volume=0.05;
  Swal.fire({
    title: 'GOOD GAME',
    color: "#ec0d5b",
    focusConfirm: false,
    returnFocus: false,
    background: "rgba(0, 0, 0, 0.70)",
    confirmButtonColor: "#0078D3",
    html: "You successfully avoided all the lasers and found the exit!",
    confirmButtonText: 'DONE',
    customClass: {
      confirmButton: 'confirm',
      title: 'swtitle',
      popup: 'swtext',
    },
  }).then(function(isConfirm) {
    if (isConfirm) {
      location.reload();
    } else {
      //if no clicked => do something else
    }
  });
  hit = true;
}

  function loseMenu(){
    sound.volume=0.05;
    Swal.fire({
      title: 'YOU LOSE',
      focusConfirm: false,
      returnFocus: false,
      background: "rgba(0, 0, 0, 0.70)",
      confirmButtonColor: "#0091ff",
      html: "You have been hit by a laser!",
      confirmButtonText: 'DONE',
      customClass: {
        confirmButton: 'confirm',
        title: 'swtitle',
        popup: 'swtext',
      },
    }).then(function(isConfirm) {
      if (isConfirm) {
        location.reload();
      } else {
        //if no clicked => do something else
      }
    });
  }