(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{265:function(t,e,o){var content=o(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(107).default)("03b9fa5a",content,!0,{sourceMap:!1})},267:function(t,e,o){"use strict";o(265)},268:function(t,e,o){var r=o(106)((function(i){return i[1]}));r.push([t.i,"canvas{border:1px solid #000;display:block;margin:0 auto}",""]),r.locals={},t.exports=r},272:function(t,e,o){"use strict";o.r(e);o(19),o(35),o(42);var r={data:function(){return{letraingr:"",mensaje:"",letras:"",letra:[],palabra:"",cont:0,pal:null,aleatorio:0,palabraw:"",bien:0,i:0,j:0,contador:0,contador1:0,respuestas:"",variable:"",variables1:"",Palabras:["pantalla","torre","portatil","raton","teclado","celular","cargador","letrero","bolso","audifonos","cartera","termo","extintor","tablero","dibujo","silla"]}},mounted:function(){this.iniciar()},methods:{iniciar:function(){this.draw(),this.numaleat(),this.palabraw=this.Palabras[this.aleatorio],console.log(this.Palabras),console.log(this.palabraw),this.pal=this.palabraw.split(""),console.log(this.pal),console.log(this.aleatorio)},numaleat:function(){this.aleatorio=Math.floor(Math.random()*this.Palabras.length),console.log(this.aleatorio)},draw:function(){this.$refs.canvas.height=550,this.$refs.canvas.width=450;var canvas=this.$refs.canvas.getContext("2d");console.log(canvas),canvas.beginPath(),canvas.moveTo(400,500),canvas.lineTo(50,500),canvas.moveTo(100,500),canvas.lineTo(100,100),canvas.lineTo(300,100),canvas.lineTo(300,150),canvas.lineWidth=5,canvas.stroke(),1==this.cont?(canvas.beginPath(),canvas.moveTo(340,190),canvas.arc(300,190,40,0,2*Math.PI,!0),canvas.strokeStyle="red",canvas.stroke()):2==this.cont?(canvas.beginPath(),canvas.moveTo(340,190),canvas.arc(300,190,40,0,2*Math.PI,!0),canvas.moveTo(300,230),canvas.lineTo(300,350),canvas.strokeStyle="red",canvas.stroke()):3==this.cont?(canvas.beginPath(),canvas.moveTo(340,190),canvas.arc(300,190,40,0,2*Math.PI,!0),canvas.moveTo(300,230),canvas.lineTo(300,350),canvas.moveTo(300,240),canvas.lineTo(250,340),canvas.strokeStyle="red",canvas.stroke()):4==this.cont?(canvas.beginPath(),canvas.moveTo(340,190),canvas.arc(300,190,40,0,2*Math.PI,!0),canvas.moveTo(300,230),canvas.lineTo(300,350),canvas.moveTo(300,240),canvas.lineTo(250,340),canvas.moveTo(300,240),canvas.lineTo(350,340),canvas.strokeStyle="red",canvas.stroke()):5==this.cont?(canvas.beginPath(),canvas.moveTo(340,190),canvas.arc(300,190,40,0,2*Math.PI,!0),canvas.moveTo(300,230),canvas.lineTo(300,350),canvas.moveTo(300,240),canvas.lineTo(250,340),canvas.moveTo(300,240),canvas.lineTo(350,340),canvas.moveTo(300,350),canvas.lineTo(250,460),canvas.strokeStyle="red",canvas.stroke()):6==this.cont?(canvas.beginPath(),canvas.moveTo(340,190),canvas.arc(300,190,40,0,2*Math.PI,!0),canvas.moveTo(300,230),canvas.lineTo(300,350),canvas.moveTo(300,240),canvas.lineTo(250,340),canvas.moveTo(300,240),canvas.lineTo(350,340),canvas.moveTo(300,350),canvas.lineTo(250,460),canvas.moveTo(300,350),canvas.lineTo(350,460),canvas.strokeStyle="red",canvas.stroke(),alert("Perdiste")):7==this.cont&&(alert("ya perdiste, vuelve a iniciar desde el comienzo"),location.reload())},repetidas:function(t){this.letra.forEach((function(e){return e==t}))},ingresarletras:function(t){var e=this;this.letras=t.toLowerCase(),this.letra.push(this.letras),console.log(this.letra);var i=0,o=0,r=!1;console.log(this.repetidas(t));do{this.repetidas(t)?(alert("La variable esta repetida"),this.mensaje=""):o=1}while(1!=o);for(;i<=this.pal.length;i++)this.pal[i]===this.letras&&(this.letra.forEach((function(t){t===e.letras&&(e.variable==t?e.contador++:e.contador=0,e.$refs[t][e.contador].textContent=t)})),this.variable=t,this.j++,console.log("hola1"+this.j),r=!0);if(this.j>=this.pal.length){console.log(this.letras),alert("Ganaste"),this.pal.forEach((function(t){e.variables1!=t?e.contador1=0:e.contador1++,console.log(e.contador1),e.$refs[t][e.contador1].textContent="",e.variables1=t})),this.pal.forEach((function(t){e.variables1!=t?e.contador1=0:e.contador1++,console.log(e.contador1),e.$refs[t][e.contador1].textContent="",e.variables1=t})),this.contador=0;var l=this.Palabras.filter((function(t){return t!==e.palabraw}));this.Palabras=l,this.letraingr="",this.mensaje="",this.letras="",this.letra=[],this.palabra="",this.cont=0,this.pal=null,this.aleatorio=0,this.palabraw="",this.bien=0,this.i=0,this.j=0,this.contador=0,this.contador1=0,this.respuestas="",this.variable="",this.variables1="",this.draw(),this.iniciar(),console.log(this.aleatorio)}console.log(this.Palabras),0==r&&(console.log("entre aqui mal"),console.log(this.cont),this.cont=this.cont+1,this.draw()),r=!1,this.mensaje=""}}},l=(o(267),o(43)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"bg-[url('~/img/hojas.gif')] h-[41.6rem] bg-cover flex flex-grow"},[e("div",{staticClass:"flex"},[e("div",{staticClass:"ml-[5rem] mt-[3rem]"},[e("canvas",{ref:"canvas",staticClass:"bg-[url('~/img/colina.jpg')]"})]),t._v(" "),e("div",{staticClass:"flex flex-col"},[e("div",{staticClass:"ml-[3rem] mt-[4rem] flex flex-col"},[e("label",{staticClass:"text-2xl"},[t._v("Ahorcado:")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.mensaje,expression:"mensaje"}],ref:"letraingr",staticClass:"border border-black",attrs:{type:"text",maxlength:"1",placeholder:"Ingrese la letra"},domProps:{value:t.mensaje},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.ingresarletras(t.mensaje)},input:function(e){e.target.composing||(t.mensaje=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"flex w-[5rem] h-[5rem] ml-[1.5rem]"},t._l(t.pal,(function(t){return e("div",{staticClass:"ml-[1rem] mt-[2.5rem]"},[e("div",{staticClass:"w-8 border-b-4 m-3 border-black"},[e("p",{ref:t,refInFor:!0})])])})),0),t._v(" "),e("div",{staticClass:"ml-[3.4rem] mt-5 flex flex-col w-[15rem]"},[e("label",{},[t._v("Historial:")]),t._v(" "),e("div",{staticClass:"border border-1 border-black w-[14.8rem] h-[9rem] bg-[url('~/img/pizzarra.jpg')] bg-contain bg-no-repeat flex flex-col"},[e("label",{staticClass:"text-white ml-[11px] mt-[6px]",attrs:{id:"contenedor"}},[t._v(t._s("*"+t.letra))])])])])])])}),[],!1,null,null,null);e.default=component.exports}}]);