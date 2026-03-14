import { defineStore } from "pinia"

export const useProductoStore = defineStore("productos", {

state: () => ({
productos: [

{
id:1,
nombre:"Monstera Deliciosa",
precio:350,
imagen:"https://images.unsplash.com/photo-1501004318641-b39e6451bec6"
},

{
id:2,
nombre:"Suculenta Echeveria",
precio:120,
imagen:"https://images.unsplash.com/photo-1466692476868-aef1dfb1e735"
},

{
id:3,
nombre:"Cactus Decorativo",
precio:150,
imagen:"https://images.unsplash.com/photo-1509423350716-97f2360af2e4"
},

{
id:4,
nombre:"Helecho",
precio:200,
imagen:"https://images.unsplash.com/photo-1502082553048-f009c37129b9"
},

{
id:5,
nombre:"Planta Serpiente",
precio:280,
imagen:"https://images.unsplash.com/photo-1598887142487-9a3c1a3a5a4d"
},

{
id:6,
nombre:"Pothos",
precio:180,
imagen:"https://images.unsplash.com/photo-1604762512526-7a29e2a87277"
},

{
id:7,
nombre:"Ficus Lyrata",
precio:420,
imagen:"https://images.unsplash.com/photo-1604762524889-3e2fcc145683"
},

{
id:8,
nombre:"Lavanda",
precio:160,
imagen:"https://images.unsplash.com/photo-1508780709619-79562169bc64"
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
