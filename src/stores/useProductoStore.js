import { defineStore } from "pinia"

export const useProductoStore = defineStore("productos", {

state: () => ({
productos: [

{
id:1,
nombre:"Laptop Gamer",
precio:18000,
imagen:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
},

{
id:2,
nombre:"Mouse Gamer",
precio:600,
imagen:"https://images.unsplash.com/photo-1587202372775-e229f172b9d7"
},

{
id:3,
nombre:"Teclado Mecánico",
precio:1200,
imagen:"https://images.unsplash.com/photo-1518770660439-4636190af475"
},

{
id:4,
nombre:"Monitor 27 pulgadas",
precio:5200,
imagen:"https://images.unsplash.com/photo-1587829741301-dc798b83add3"
},

{
id:5,
nombre:"Audífonos Gamer",
precio:1500,
imagen:"https://images.unsplash.com/photo-1518443895914-6a1b43c0a3a2"
},

{
id:6,
nombre:"Webcam HD",
precio:900,
imagen:"https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04"
},

{
id:7,
nombre:"Tablet",
precio:6500,
imagen:"https://images.unsplash.com/photo-1542751110-97427bbecf20"
},

{
id:8,
nombre:"Celular",
precio:12000,
imagen:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
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
