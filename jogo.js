console.log("Flappy JS")

const sprites = new Image();
sprites.src = './sprites.png';

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

const planoDeFundo = {
    
    spriteX: 390,
    spriteY: 0,
    largura: 275, 
    altura: 204,
    x: 0,
    y: canvas.height - 204,
    
    desenha() {
        contexto.fillStyle = '#70c5ce';
        contexto.fillRect(0, 0, canvas.width, canvas.height)

        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX, planoDeFundo.spriteY, //sprite x, sprite y
            planoDeFundo.largura, planoDeFundo.altura, // tmanho do recorte na sprite
            planoDeFundo.x, planoDeFundo.y,
            planoDeFundo.largura, planoDeFundo.altura, //tamanho do desenho
        );

        contexto.drawImage(
            sprites,
            planoDeFundo.spriteX, planoDeFundo.spriteY, //sprite x, sprite y
            planoDeFundo.largura, planoDeFundo.altura, // tmanho do recorte na sprite
            (planoDeFundo.x + planoDeFundo.largura), planoDeFundo.y,
            planoDeFundo.largura, planoDeFundo.altura, //tamanho do desenho
        );
    }

}

const chao = {

    spriteX: 0,
    spriteY: 610,
    largura: 224, 
    altura: 112,
    x: 0,
    y: canvas.height - 112,

    desenha() {
        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY, //sprite x, sprite y
            chao.largura, chao.altura, // tmanho do recorte na sprite
            chao.x, chao.y,
            chao.largura, chao.altura, //tamanho do desenho
        );

        contexto.drawImage(
            sprites,
            chao.spriteX, chao.spriteY, //sprite x, sprite y
            chao.largura, chao.altura, // tmanho do recorte na sprite
            (chao.x + chao.largura), chao.y,
            chao.largura, chao.altura, //tamanho do desenho
        );
    
    }
}


const flappyBird = {
    spriteX: 0,
    spriteY: 0,
    largura: 33, 
    altura: 24,
    x: 10,
    y: 50,

    desenha() {
        contexto.drawImage(
            sprites,
            flappyBird.spriteX, flappyBird.spriteY, //sprite x, sprite y
            flappyBird.largura, flappyBird.altura, // tmanho do recorte na sprite
            flappyBird.x, flappyBird.y,
            flappyBird.largura, flappyBird.altura, //tamanho do desenho
        );
    
    }
}



function loop() {
    
    planoDeFundo.desenha();

    chao.desenha();
    
    flappyBird.desenha();
   
    requestAnimationFrame(loop);
}

loop();