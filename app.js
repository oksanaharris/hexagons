const container = document.getElementById('container');

let hexWidth = 53;
let hexHeight = 45;

let numHexsInRow = window.innerWidth/hexWidth - 1;
let numRowsInWin = window.innerHeight/hexHeight;

for (var i = 1; i <= numRowsInWin; i++){
  let row = document.createElement('div');
  row.className = 'row';

  if (i % 2 === 0){
    row.className += ' evenRow';

  } else {
    row.className += ' oddRow';
    if (i === 1) { row.className += ' firstRow';}
  }

  container.appendChild(row);

  for (var j = 1; j <= numHexsInRow; j++) {
    let hex = document.createElement('div');
    hex.className = 'hexagon';
    hex.id = 'hex-' + i + '-' + j;
    hex.dataset.y = i;
    hex.dataset.x = j;
    hex.addEventListener('click', doSomething);
    setTimeout(function(){row.appendChild(hex);}, j*50);
  }

}

function doSomething (event) {
  console.log(event.target.dataset.x, event.target.dataset.y);
}

  // console.log('window width', windowWidth);
  // console.log('container width', containerWidth);
  // console.log('minus', widthDiff);
  // console.log('eval', widthDiff > hexWidth);


  // console.log('window width', windowWidth);
  // console.log('container width', containerWidth);
  // console.log('minus', widthDiff);
  // setTimeout(function(){ console.log('hello');}, 1000);

  // console.log()
  // windowWidth = window.innerWidth;
  // containerWidth = container.offsetWidth;
  // widthDiff =  windowWidth - containerWidth;
// }



