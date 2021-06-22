//posicoes do tabuleiro
let board = ["", "", "", "", "", "", "", "", ""];
//indica o jogador da vez, sendo 0 pra o player 1 e 1 para o player 2
let playerTime = 0;
let symbols = ["o", "x"];
let gameOver = false;
//position é a posiçao que vai executar a jogada
function handleMove(position) {
    //se gameover for true o return para o jogo, sem isso o simbolo
    //winner aparece em sequencia
    if (gameOver) {
        return;
    }
    // se o board estiver vazio execut
    if (board[position] == "") {
        //recebe o simbolo do jogador da vez
        board[position] = symbols[playerTime];
        //verifica se gameover é true para seguir ou nao com o jogo
        gameOver = isWin();
        //so avanca para o proximo jogador se o resultado for false
        if (gameOver == false) {
            if (playerTime == 0) {
                playerTime = 1;
            } else {
                playerTime = 0;
            }
        }
    }
    return gameOver;
}
function isWin() {
    let winStates = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    //index 0, enquanto i menor que 7 
    //(0 a 7 (total 8)) que sao os arrays acima, 
    //incrementa mais 1
    for (i = 0; i < winStates.length; i++) {
        //cada vez que passar no for pega uma das 8 sequencias
        let seq = winStates[i];
        //verifica cada elemento dentro do array dos estados 
        //de vitoria
        let pos1 = seq[0];
        let pos2 = seq[1];
        let pos3 = seq[2];
        //se a pos1 = a 2 e a 3 venceu, senao continua
        if (board[pos1] == board[pos2] &&
            board[pos1] == board[pos3] &&
            //anula as posicoes vazias na verificaçao
            board[pos1] != "") {
            return true;
        }
    }
    return false;
}