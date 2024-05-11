let board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
]

function empty_count(array) {
    //计算空的数量
    let emptis = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (array[i][j] == 0) {
                emptis.push([i, j]);
            }
        }
    }
    return emptis;
}

function random(min, max) {
    //返回指定范围的随机数, 不包括 max
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function move(array, direction) {
    //移动方块
    if (direction == 'left') {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                for (let k = j + 1; k < array.length; k++) {
                    if (array[i][k] != 0 && array[i][j] == 0) {
                        //填充空位
                        array[i][j] = array[i][k];
                        array[i][k] = 0;
                    } else if (array[i][j] == array[i][k]) {
                        //合并
                        array[i][j] = array[i][j] * 2;
                        array[i][k] = 0;
                    }
                }
            }
        }
    } else if (direction == 'right') {
        for (let i = 0; i < array.length; i++) {
            for (let j = array.length - 1; j >= 0; j--) {
                for (let k = j - 1; k >= 0; k--) {
                    if (array[i][k] != 0 && array[i][j] == 0) {
                        //填充空位
                        array[i][j] = array[i][k];
                        array[i][k] = 0;
                    } else if (array[i][j] == array[i][k]) {
                        //合并
                        array[i][j] = array[i][j] * 2;
                        array[i][k] = 0;
                    }
                }
            }
        }
    } else if (direction == 'up') {
        for (let i = 0; i < array.length; i++) {
            for (let j = 0; j < array.length; j++) {
                for (let k = j + 1; k < array.length; k++) {
                    if (array[k][i] != 0 && array[j][i] == 0) {
                        //填充空位
                        array[j][i] = array[k][i];
                        array[k][i] = 0;
                    } else if (array[j][i] == array[k][i]) {
                        //合并
                        array[j][i] = array[j][i] * 2;
                        array[k][i] = 0;
                    }
                }
            }
        }
    } else if (direction == 'down') {
        for (let i = 0; i < array.length; i++) {
            for (let j = array.length - 1; j >= 0; j--) {
                for (let k = j - 1; k >= 0; k--) {
                    if (array[k][i] != 0 && array[j][i] == 0) {
                        //填充空位
                        array[j][i] = array[k][i];
                        array[k][i] = 0;
                    } else if (array[j][i] == array[k][i]) {
                        //合并
                        array[j][i] = array[j][i] * 2;
                        array[k][i] = 0;
                    }
                }
            }
        }
    }
    if (empty_count(array).length > 0) {
        let a = random(0, empty_count(array).length - 1);
        let ec = empty_count(array);
        array[ec[a][0]][ec[a][1]] = 2;
    }
    return array;
}

function show(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            let name = `${i}${j}`;
            if (array[i][j] != 0) {
                document.getElementById(name).innerHTML = array[i][j];
            } else {
                document.getElementById(name).innerHTML = '';
                document.getElementById(name).style.backgroundColor = '#cdc1b4';
            }
            if (array[i][j] == 2) {
                document.getElementById(name).style.backgroundColor = "#eee4da";
                document.getElementById(name).style.color = "#776e65";
            } else if (array[i][j] == 4) {
                document.getElementById(name).style.backgroundColor = "#ede0c8";
                document.getElementById(name).style.color = "#776e65";
            } else if (array[i][j] == 8) {
                document.getElementById(name).style.backgroundColor = "#eeb273";
                document.getElementById(name).style.color = "#f9f6f2";
            } else if (array[i][j] == 16) {
                document.getElementById(name).style.backgroundColor = "#eeb273";
                document.getElementById(name).style.color = "#f9f6f2";
            } else if (array[i][j] == 32) {
                document.getElementById(name).style.backgroundColor = "#f67c5f";
                document.getElementById(name).style.color = "#f9f6f2";
            } else if (array[i][j] == 64) {
                document.getElementById(name).style.backgroundColor = "#f65e3d";
                document.getElementById(name).style.color = "#f9f6f2";
            } else if (array[i][j] == 128) {
                document.getElementById(name).style.backgroundColor = "#edcf72";
                document.getElementById(name).style.color = "#f9f6f2";
            } else if (array[i][j] == 256) {
                document.getElementById(name).style.backgroundColor = "#edcc61";
                document.getElementById(name).style.color = "#f9f6f2";
            } else if (array[i][j] == 512) {
                document.getElementById(name).style.backgroundColor = "#edc850";
                document.getElementById(name).style.color = "#f9f6f2";
            } else if (array[i][j] == 1024) {
                document.getElementById(name).style.backgroundColor = "#edc53f";
                document.getElementById(name).style.color = "#f9f6f2";
                document.getElementById(name).style.fontSize = '33px';
            } else if (array[i][j] == 2048) {
                document.getElementById(name).style.backgroundColor = "#edc22e";
                document.getElementById(name).style.color = "#f9f6f2";
                document.getElementById(name).style.fontSize = '33px';
            }
        }
    }
}

show(board);
window.addEventListener('keydown', function (event) {
    if (event.key == 'w') {
        board = move(board, 'up');
    } else if (event.key == 's') {
        board = move(board, 'down');
    } else if (event.key == 'a') {
        board = move(board, 'left');
    } else if (event.key == 'd') {
        board = move(board, 'right');
    }
    console.log(event.key);
    show(board);
})