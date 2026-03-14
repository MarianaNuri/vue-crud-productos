import { defineStore } from "pinia"

export const useProductoStore = defineStore("productos", {

state: () => ({
productos: [

{
id:1,
nombre:"Monstera Deliciosa",
precio:350,
imagen:"https://www.tuplanteria.com/productos/monstera-deliciosa-costilla-de-adan-o-ceriman/?srsltid=AfmBOoqgMRO0u14AXquRp10Bod36stZ-qywvw-Y_BJ0rZ34boYrgF-ui"
},

{
id:2,
nombre:"Suculenta Echeveria",
precio:120,
imagen:"https://www.freepik.es/fotos-premium/echeveria-suculenta-olla-sobre-fondo-blanco-aislado_37561990.htm"
},

{
id:3,
nombre:"Cactus Decorativo",
precio:150,
imagen:"https://www.istockphoto.com/es/fotos/cactus-fondo-blanco"
},

{
id:4,
nombre:"Helecho",
precio:200,
imagen:"https://es.dreamstime.com/helecho-de-boston-sobre-fondo-blanco-hermosa-espada-com%C3%BAn-verde-fresco-o-nephrolepis-exaltata-l-schott-cv-bostoniensis-creciendo-image217979673"
},

{
id:5,
nombre:"Planta Serpiente",
precio:280,
imagen:"https://www.freepik.es/fotos-premium/planta-serpiente-olla-grande-blanco-aislado-sobre-fondo-blanco_14721095.htm"
},

{
id:6,
nombre:"Pothos",
precio:180,
imagen:"https://es.dreamstime.com/pothos-epipremnum-aureum-aislado-en-fondo-blanco-una-vibrante-planta-de-aislada-un-ideal-para-la-decoraci%C3%B3n-del-hogar-y-el-image367532254"
},

{
id:7,
nombre:"Ficus Lyrata",
precio:420,
imagen:"https://www.freepik.es/fotos-premium/fiddle-leaf-fig-o-ficus-lyrata-aislado-fondo-blanco-brillante-planta-maceta-camino-recorte_92041651.htm"
},

{
id:8,
nombre:"Lavanda",
precio:160,
imagen:"https://www.istockphoto.com/es/foto/lavanda-aislada-sobre-fondo-blanco-gm1039673830-278324590"
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
