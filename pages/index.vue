<template>
  <div class="bg-[url('~/img/hojas.gif')] h-[41.6rem] bg-cover flex flex-grow ">
    <div class="flex ">
      <div class="ml-[5rem] mt-[3rem]">
        <canvas class="bg-[url('~/img/colina.jpg')]" ref="canvas"></canvas>
      </div>
      <div class="flex flex-col">
        <div class="ml-[3rem] mt-[4rem] flex flex-col">
          <label class="text-2xl">Ahorcado:</label>
          <input
            class="border border-black"
            type="text"
            maxlength="1"
            v-model="mensaje"
            @keyup.enter="ingresarletras(mensaje)"
            ref="letraingr"
            placeholder="Ingrese la letra"
          />
        </div>

        <div class="flex w-[5rem] h-[5rem] ml-[1.5rem]">
          <div class="ml-[1rem] mt-[2.5rem]" v-for="Palabras in pal">
            <div class="w-8 border-b-4 m-3 border-black">
              <p :ref="Palabras"></p>
            </div>
          </div>
        </div>

        <div class="ml-[3.4rem] mt-5 flex flex-col w-[15rem] " >
          <label class="">Historial:</label>

          <div class="border border-1 border-black w-[14.8rem] h-[9rem]  bg-[url('~/img/pizzarra.jpg')] bg-contain bg-no-repeat flex flex-col">
            <label
            id="contenedor"
            class=" text-white ml-[11px] mt-[6px]"
            >{{ "*" + letra }}</label>
          </div>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      letraingr: "",
      mensaje: "",
      letras: "",
      letra: [],
      palabra: "",
      cont: 0,
      pal: null,
      aleatorio: 0,
      palabraw: "",
      bien: 0,
      
      i: 0,
      j: 0,
      contador:0,
      contador1:0,
      respuestas: "",
      variable: "",
      variables1:"",
      
      Palabras: [
        "pantalla",
        "torre",
        "portatil",
        "raton",
        "teclado",
        "celular",
        "cargador",
        "letrero",
        "bolso",
        "audifonos",
        "cartera",
        "termo",
        "extintor",
        "tablero",
        "dibujo",
        "silla",
      ],
    };
  },

  mounted: function () {
    this.iniciar();
  },

  methods: {

    iniciar: function(){
      this.draw();
      this.numaleat();

      this.palabraw = this.Palabras[this.aleatorio];
      console.log(this.Palabras);
      console.log(this.palabraw);
      this.pal = this.palabraw.split("");
      console.log(this.pal);
      console.log(this.aleatorio);
    },

    numaleat: function () {
      this.aleatorio = Math.floor(Math.random() * this.Palabras.length);
      console.log(this.aleatorio);
    },

    draw: function () {
      this.$refs.canvas.height = 550;
      this.$refs.canvas.width = 450;
      const canvas = this.$refs.canvas.getContext("2d");
      console.log(canvas);

      canvas.beginPath();
      canvas.moveTo(400, 500);
      canvas.lineTo(50, 500);
      canvas.moveTo(100, 500);
      canvas.lineTo(100, 100);
      canvas.lineTo(300, 100);
      canvas.lineTo(300, 150);
      canvas.lineWidth = 5;
      canvas.stroke();

      if (this.cont == 1) {
        //cabeza
        canvas.beginPath();
        canvas.moveTo(340, 190);
        canvas.arc(300, 190, 40, 0, Math.PI * 2, true);
        canvas.strokeStyle="red";
        canvas.stroke();

      } else if (this.cont == 2) {
        //pecho
        canvas.beginPath();
        canvas.moveTo(340, 190);
        canvas.arc(300, 190, 40, 0, Math.PI * 2, true);
        canvas.moveTo(300, 230);
        canvas.lineTo(300, 350);
        canvas.strokeStyle="red";
        canvas.stroke();

      } else if (this.cont == 3) {
        //brazoizq
        canvas.beginPath();
        canvas.moveTo(340, 190);
        canvas.arc(300, 190, 40, 0, Math.PI * 2, true);
        canvas.moveTo(300, 230);
        canvas.lineTo(300, 350);
        canvas.moveTo(300, 240);
        canvas.lineTo(250, 340);
        canvas.strokeStyle="red";
        canvas.stroke();

      } else if (this.cont == 4) {
        //brazoder
        canvas.beginPath();
        canvas.moveTo(340, 190);
        canvas.arc(300, 190, 40, 0, Math.PI * 2, true);
        canvas.moveTo(300, 230);
        canvas.lineTo(300, 350);
        canvas.moveTo(300, 240);
        canvas.lineTo(250, 340);
        canvas.moveTo(300, 240);
        canvas.lineTo(350, 340);
        canvas.strokeStyle="red";
        canvas.stroke();

      } else if (this.cont == 5) {
        //piernaizq
        canvas.beginPath();
        canvas.moveTo(340, 190);
        canvas.arc(300, 190, 40, 0, Math.PI * 2, true);
        canvas.moveTo(300, 230);
        canvas.lineTo(300, 350);
        canvas.moveTo(300, 240);
        canvas.lineTo(250, 340);
        canvas.moveTo(300, 240);
        canvas.lineTo(350, 340);
        canvas.moveTo(300, 350);
        canvas.lineTo(250, 460);
        canvas.strokeStyle="red";
        canvas.stroke();

      } else if (this.cont == 6) {
        //piernader
        canvas.beginPath();
        canvas.moveTo(340, 190);
        canvas.arc(300, 190, 40, 0, Math.PI * 2, true);
        canvas.moveTo(300, 230);
        canvas.lineTo(300, 350);
        canvas.moveTo(300, 240);
        canvas.lineTo(250, 340);
        canvas.moveTo(300, 240);
        canvas.lineTo(350, 340);
        canvas.moveTo(300, 350);
        canvas.lineTo(250, 460);
        canvas.moveTo(300, 350);
        canvas.lineTo(350, 460);
        canvas.strokeStyle="red";
        canvas.stroke();

        alert("Perdiste");
      } else if (this.cont == 7) {
        alert("ya perdiste, vuelve a iniciar desde el comienzo");
        location.reload();
      }
    },

    repetidas: function(rep){
      this.letra.forEach(Element => {
        if(Element==rep){
          return true;
        }else{
          return false;
        }
      })
    },

    ingresarletras: function (respuesta) {

      this.letras = respuesta.toLowerCase();
      this.letra.push(this.letras);
      console.log(this.letra);
      let i = 0;
      let x=0;
      let bandera = false;
      console.log(this.repetidas(respuesta));

     do{
        if(this.repetidas(respuesta)){
          alert("La variable esta repetida")
          this.mensaje="";
        } else {
          x=1;
        }

      }while(x!=1)


      for (i; i <= this.pal.length; i++) {

      
        if (this.pal[i] === this.letras) {
          //this.$refs[respuesta][0].textContent = respuesta
          this.letra.forEach(Element => {
             
                if(Element===this.letras){
                    
                  if(this.variable==Element){
                    this.contador++;
                  }else{ 
                    this.contador=0;
                  }  
                  this.$refs[Element][this.contador].textContent = Element ;

                }

           })
           
           this.variable = respuesta;
           this.j++;
                  console.log("hola1" +this.j);
          bandera=true;
        }
      }

      if(this.j>=this.pal.length){
              console.log(this.letras);
              alert("Ganaste");
                
            this.pal.forEach(elemetos => {
            if(this.variables1 != elemetos){
          
          this.contador1=0;
          }
          else{
            this.contador1++;
          }
          console.log(this.contador1)
            this. $refs[elemetos][this.contador1].textContent = ""

           this.variables1=elemetos;
          });
          this.pal.forEach(elemetos => {
        if(this.variables1 != elemetos){
          
          this.contador1=0;
          }
          else{
            this.contador1++;
          }
          console.log(this.contador1)
            this. $refs[elemetos][this.contador1].textContent = ""

           this.variables1=elemetos;
          });
          

          this.contador=0;

          const PalabrasN =this.Palabras.filter((item) => item !== this.palabraw)
          this.Palabras=PalabrasN;

          this.letraingr= "";
          this.mensaje= "";
          this.letras= "";
          this.letra= [];
          this.palabra= "";
          this.cont= 0;
          this.pal= null;
          this.aleatorio= 0;
          this.palabraw= "";
          this.bien= 0;
          this.i= 0;
          this.j= 0;
          this.contador=0;
          this.contador1=0;
          this.respuestas= "";
          this.variable= "";
          this.variables1="";

          this.draw(); 
          this.iniciar();

          console.log(this.aleatorio);

              }
              console.log(this.Palabras);
      if ((bandera == false)) {
          console.log("entre aqui mal");
          console.log(this.cont)
          this.cont=this.cont+1;
          this.draw();
        }bandera=false;

        this.mensaje="";
    },

  },
};
</script>

<style>
canvas {
  display: block;
  margin: 0 auto;
  border: 1px solid black;
}

</style>
