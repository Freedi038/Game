
function drow(field) {
field.innerHTML = '';
for (let n = 0; n < 9; n++) {
field.innerHTML += '<div class="cells"></div>';
}
}
let field = document.getElementById('game'),
steps = 0,
cell;
drow(field);
document.addEventListener(
'click', e => {
let cell = e.target;
if (!cell.innerText) {
steps++;
cell.innerText = (steps % 2)? 'X': '0';
} else {
if (steps >= 9) {
drow(field);
steps = 0;
alert('Game complete!');
}
}
}
);
