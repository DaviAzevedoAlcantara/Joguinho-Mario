//Selecionando as propriedades css 
const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const cloud = document.querySelector('.cloud');

//Criando a mecanica do pulo, adicionando e removendo o pulo
//Definindo o intervalo minimo para realização do pulo 
const jump = () => {
    mario.classList.add('jump');

    setTimeout(()=>{

        mario.classList.remove('jump')
 
    },500);
}


const loop = setInterval(() =>{

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px','')
    const cloudPosition = cloud.offsetLeft;

    //Definindo a hit box do mario e o cano, de maneira que se houver 
    //contato entre eles as animações parem
    if(pipePosition <= 65 && pipePosition > 0 && marioPosition < 92) {

        //Definindo o fim da animação do cano na posição que o cano estiver
        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        //Definindo o fim da animação do mario na posição que o mario estiver
        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        //Trocando a imagem do mario para imagem de fim de jogo
        mario.src="/img/game_over.png"
        mario.style.width = "60px";
        mario.style.marginLeft = "15px"
        
        //Parando a animação da nuvem caso a condição acima seja verdadeira
        cloud.style.animation = 'none'
        cloud.style.left = `${cloudPosition}px`;

        
        

        clearInterval(loop);
    }

},10);

// definindo a tecla para realizar o pulo
// qualquer tecla pressionada 
document.addEventListener('keydown', jump);

