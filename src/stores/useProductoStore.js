import { defineStore } from "pinia"
import cactus from "@/assets/plantas/cactus.jpg"
import monstera from "@/assets/plantas/monstera.jpg"
import pothos from "@/assets/plantas/pothos.jpg"
import ficus from "@/assets/plantas/ficus_lyrata.jpg"
import serpiente from "@/assets/plantas/serpiente.jpg"
import suculenta from "@/assets/plantas/suculenta.jpg"
import lavanda from "@/assets/plantas/lavanda.jpg"
import helecho from "@/assets/plantas/helecho.jpg"


export const useProductoStore = defineStore("productos", {

state: () => ({
productos: [

{
id:1,
nombre:"Monstera Deliciosa",
precio:350,
imagen: monstera
},

{
id:2,
nombre:"Suculenta Echeveria",
precio:120,
imagen: suculenta
},

{
id:3,
nombre:"Cactus Decorativo",
precio:150,
imagen: cactus
},

{
id:4,
nombre:"Helecho",
precio:200,
imagen: helecho
},

{
id:5,
nombre:"Planta Serpiente",
precio:280,
imagen: serpiente
},

{
id:6,
nombre:"Pothos",
precio:180,
imagen: pothos
},

{
id:7,
nombre:"Ficus Lyrata",
precio:420,
imagen: ficus
},

{
id:8,
nombre:"Lavanda",
precio:160,
imagen: lavanda
}

]
}),

actions:{

crearProducto(producto){
this.productos.push(producto)
},

actualizarProducto(id,producto){
const index = this.productos.findIndex(p=>p.id===id)
if(index !== -1){
this.productos[index] = producto
}
},

eliminarProducto(id){
this.productos = this.productos.filter(p=>p.id !== id)
}

},

getters:{
obtenerProductoPorId:(state)=>(id)=>{
return state.productos.find(p=>p.id === id)
}
}

})
