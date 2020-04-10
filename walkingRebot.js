/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */

var robotSim = function (commands, obstacles) {
    let x = 0;
    let y = 0;
    let maximum = 0;
    let dir = ['U', 'R', 'D', 'L'];

    const obstacleSet = new Set();
    obstacles.forEach(o => {
        obstacleSet.add(`${o[0]},${o[1]}`);
    });

    commands.forEach(c => {
        switch (c) {
            case -2:
                dir.unshift(dir.pop()); // turn left
                break;
            case -1:
                dir.push(dir.shift()); // turn right
                break;
            default:
                for (let i = 0; i < c; i++) {
                    let nx = x;
                    let ny = y;
                    switch (dir[0]) {
                        case 'U':
                            ny += 1;
                            break;
                        case 'D':
                            ny -= 1;
                            break;
                        case 'L':
                            nx -= 1;
                            break;
                        case 'R':
                            nx += 1;
                            break;
                    }
                    if (obstacleSet.has(`${nx},${ny}`)) break;
                    x = nx;
                    y = ny;
                }
                maximum = Math.max(maximum, x * x + y * y);
        }
    });
    return maximum;
};
