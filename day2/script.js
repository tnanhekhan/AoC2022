const lineReader = require('readline').createInterface({
    input: require('fs').createReadStream('input.txt')
});

let score_count = 0;

function getHand(char) {
    if (char === 'A') {
        return 'rock';
    }

    if (char === 'B') {
        return 'paper';
    }

    if (char === 'C') {
        return 'scissors';
    }
}

function getHandValue(hand) {
    if (hand === 'rock') {
        return 1;
    }

    if (hand === 'paper') {
        return 2;
    }

    if (hand === 'scissors') {
        return 3;
    }
}

function getWinner(hand1, hand2) {
    switch (hand1) {
        case 'rock':
            switch (hand2) {
                case 'rock':
                    return null;
                case 'paper':
                    return hand2;
                case 'scissors':
                    return hand1;
            }
            break;
        case 'paper':
            switch (hand2) {
                case 'rock':
                    return hand1;
                case 'paper':
                    return null;
                case 'scissors':
                    return hand2;
            }
            break;
        case 'scissors':
            switch (hand2) {
                case 'rock':
                    return hand2;
                case 'paper':
                    return hand1;
                case 'scissors':
                    return null;
            }
            break;
    }
}

function getRes(res) {
    if (res === "X") {
        return "loss";
    }

    if (res === "Y") {
        return "draw";
    }

    if (res === "Z") {
        return "win";
    }
}

function getScore(opp, res) {
    switch (res) {
        case 'win':
            switch (opp) {
                case 'rock':
                    return getHandValue('paper') + 6;
                case 'paper':
                    return getHandValue('scissors') + 6;
                case 'scissors':
                    return getHandValue('rock') + 6;
            }
            break;
        case 'draw':
            switch (opp) {
                case 'rock':
                    return getHandValue('rock') + 3;
                case 'paper':
                    return getHandValue('paper') + 3;
                case 'scissors':
                    return getHandValue('scissors') + 3;
            }
            break;
        case 'loss':
            switch (opp) {
                case 'rock':
                    return getHandValue('scissors');
                case 'paper':
                    return getHandValue('rock');
                case 'scissors':
                    return getHandValue('paper');
            }
            break;
    }

}

lineReader.on('line', function (line) {
    let opp = getHand(line.split(' ')[0]);
    let res = getRes(line.split(' ')[1]);

    score_count += getScore(opp, res);
    console.log(score_count);
});

