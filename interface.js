//sera executado quando o doc for carregado 
document.addEventListener("DOMContentLoaded", () =>{
    //recebe os elementos
    let squares = document.querySelectorAll(".square");
    // vai passar pelo square do dom e quando ouver um click vai executar a função handleClick
    squares.forEach((square)=>{
        square.addEventListener("click", handleClick);
    })
})
//o argumento event é exatamente o click, ou seja, evento de click
function handleClick (event){
    //colhe o enndereço de onde foi clicado
    let square = event.target;
    //posiçao recebe o id de onde foi clicado
    let position = square.id;
    // se o handlemove for verdadeiro...
    //recebe o simbolo do jogador da vez
    if (handleMove(position)){
        //da um pequenointervalo para 
        //carregar o icone antes de aparecer a msg de fim 
        setTimeout(() => {
            alert("game over")
        },10)
    };
    updateSquares();
}
function updateSquares(){
    //recebe todos os elementos
    let squares = document.querySelectorAll(".square");
    //passa por todos os elementos
    squares.forEach((square)=>{
        //recebe o id de onde foi clicado
        let position = square.id;
        //recece o simbolo com a posicao do target
        let symbol = board[position];
        if (Symbol != ""){
            //inseri no dom e cria uma classe 
            //pra chamar o simbolo atravez do css
            square.innerHTML = `<div class="${symbol}"></div>`
        }
    })
}