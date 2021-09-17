var tela = 1;
var xMenu = 140 ;
var yMenu1 = 245;
var yMenu2 = 315;
var largura = 200 ;
var largura2 = 100;
var altura = 50 ;
var vetor_fundos = [];
var vetor_sprites = [];
x = 100;
y = 80;

function keyPressed(){
  }

let img;

//imagens
function preload() {
  
  for(i = 0; i<6; i++){
    vetor_fundos[i] = loadImage('tela0'+i+'.gif')
  }
  
  fim = loadImage('fim.gif');
  vetor_sprites[0] = loadImage('sprite00.gif');
    
}

function setup() {
 createCanvas(500, 500);
}

function draw() {


  // tela 1 menu
  if(tela==1){
    
    //Menu com 2 opções
    background(120,0,120);
    image(vetor_fundos[0],0,0);
    textAlign(CENTER);
    textSize(16);
    textStyle(BOLDITALIC)
 
    
    //créditos
    fill(220);
    noStroke();
    text("Créditos:"+"Sophia C. Maass"+"\n"+ "bacharelanda do BCT/UFRN", 360,110);
    textSize(26)
    
    //titulo Matemagicando
    stroke(200);
    fill('#fae');
    rect(130,165,230,altura);
    fill(160,0,180)
    text("Matemagicando",240,200)

    //Iniciar jogo
    if(mouseX > xMenu && mouseX<xMenu+largura && mouseY>yMenu1 && mouseY<yMenu1+altura ){
    stroke(200);
    fill(240);
    rect(xMenu,yMenu1,largura,altura,15);
         if(mouseIsPressed){
        tela = 3;
      }
  }
    fill(220,0,220);
    noStroke();
    text("Iniciar", 240,280);
    
    //Info do jogo
    if(mouseX > xMenu && mouseX<xMenu+largura && mouseY>yMenu2 && mouseY<yMenu2+altura ){
    stroke(200);
    fill(240);
    rect(xMenu,yMenu2,largura,altura,15);
      if(mouseIsPressed){
        tela = 2;
      }
    }
    
    fill(220,0,220);
    noStroke();
    text("Modo de Jogo", 240,350);
  }
  
  //tela 2 modo de jogo
if(tela==2){
  textAlign(CENTER);
    textSize(16);
 
  image(vetor_fundos[1],0,0)
  
  //instruções
    stroke(200);
    fill(250);
    rect(100,70,300,300,15);
  
  fill(220,0,220);
    noStroke();
  textStyle(BOLD)
    text("INSTRUÇÕES DE JOGO:"+"\n",250,120)
  textStyle(NORMAL)
  text("\n"+"\n"+"Parabéns!"+"\n"+"Você é a nossa nova garota mágica."+"\n"+"Seu super poder é o cálculo."+"\n"+"Aceite os desafios e mostre"+"\n"+"suas habilidades!"+"\n"+"Selecione as soluções dos problemas."+"\n"+"Conto com você!",250,120);
  
  //botao volta
 
     stroke(200);
    fill(250);
    rect(50,420,largura2,altura,15);
      if(mouseX > 55 && mouseX<55+largura2 && mouseY>420 && mouseY<420+altura){
        if(mouseIsPressed){
          tela = 1;
      }
      }
   fill(220,0,220);
    noStroke();
    text("voltar",100,450);
 
 
}
  
  //fase1
  if(tela==3){
  
    
    if (keyIsPressed === true) {
      if(keyCode === SHIFT){
      tela = 1;
      }    
    }
  
  background(300);
  image(vetor_fundos[2],0,0)
  image(vetor_sprites[0],x,y);
    
    //DESAFIO
    stroke(200);
    textSize(20)
    fill('#fae');
    rect(180,50,230,altura);
    fill(150,0,180)
    text("Desafio: 5+2x2-8/2 = ?",295,80)
    
  //SOLUÇÃO1
  textSize(30)
  fill(0,0,0);
  rect(400,150,90,100);
  fill('#fae')
  text("5",445,210)
    
  //SOLUÇÃO2
  fill(0,0,0);
  rect(400,300,90,100);
  fill('#fae')
  text("3",445,360)
    

    //orientação
   textSize(16)
    textStyle(BOLD)
  fill('#fae');
    noStroke();
    text("APERTE SHIFT PARA RETORNAR AO MENU", 170,40);
    
     if(mouseX >400 && mouseX<400+90 && mouseY>150 && mouseY<150+100){
      if(mouseIsPressed){
        tela = 5
      }
     }
       if(mouseX >400 && mouseX<400+90 && mouseY>300 && mouseY<300+100){
      if(mouseIsPressed){
        tela = 4
      }
     }
}
  
  //game over
  if(tela==4){
    background(250)
    image(vetor_fundos[3],0,0)
    
textSize(20)

//selecione "tentar de novo" e volte a fase 1
    if(mouseX > xMenu && mouseX<xMenu+largura && mouseY>yMenu1 && mouseY<yMenu1+altura ){
    stroke(200);
    fill(240);
    rect(xMenu,yMenu1,largura,altura,15);
         if(mouseIsPressed){
        tela = 3;
      }
  }
    //aperte shift e volte ao menu
    if (keyIsPressed === true) {
      if(keyCode === SHIFT){
      tela = 1;
      }    
    }
   fill(255,182,193);
text("Tentar Novamente",240,275) 

    fill(137,207,240);
text("APERTE SHIFT PARA VOLTAR AO MENU",250,350) 

    
}
  
  //fase2
  if(tela==5){
    
     if (keyIsPressed === true) {
      if(keyCode === SHIFT){
      tela = 1;
      }    
    }
    image(vetor_fundos[4],0,0);
    image(vetor_sprites[0],20,140);
    
    //DESAFIO
    textSize(20)
    fill('#fae');
    rect(180,50,230,altura);
    fill(150,0,180)
    text("Desafio: 7+9x3-18/2 = ?",295,80)
    
    //ORIENTAÇÃO
    textSize(16)
    textStyle(BOLD)
  fill('#fae');
    noStroke();
    text("APERTE SHIFT PARA RETORNAR AO MENU", 170,20);
    
    //SOLUÇÃO1
  textSize(30)
  fill(0,0,0);
  rect(200,380,90,100);
  fill('#fae')
  text("15",245,450)
    
     //SOLUÇÃO2
  fill(0,0,0);
  rect(400,380,90,100);
  fill('#fae')
  text("25",445,450)
    
    //clique na alternativa errada
        if(mouseX >400 && mouseX<400+90 && mouseY>380 && mouseY<380+100){
      if(mouseIsPressed){
        tela = 4
      }
     }
    //clique na alternativa certa
       if(mouseX >200 && mouseX<200+90 && mouseY>380 && mouseY<380+100){
      if(mouseIsPressed){
        tela = 6
      }
     }
    

   
 
}
  
  //ganhou
  if(tela==6){
    background(0)
    image(fim,0,0)
    
    textSize(20)
    textStyle(BOLD)
    fill('#fae');
    noStroke();
    text("Parabéns!"+"\n"+"Você agora é oficialmente uma garota mágica."+"\n"+"Seu super poder é o cálculo."+"\n"+"Nossa nova jornada agora é o mundo das exatas!"+"\n"+" Conto com você!",250,330);
    
    textSize(16)
    textStyle(BOLD)
    fill('#fae');
    noStroke();
    text("APERTE SHIFT PARA RETORNAR AO MENU", 200,480);
    
    //voltar ao menu
     if (keyIsPressed === true) {
      if(keyCode === SHIFT){
      tela = 1;
      }
     }
  }
  
  
   
  
 
   
    
  }


