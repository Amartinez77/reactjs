


let productos = [
  {
    id: "1",
    categoria: "cerveza",
    marca: "estrella de galicia",
    tipo: "honey",
    precio: 250,
    medida: "500cc",
    descripcion:
      "Cerveza de color dorado brillante que parte de una selección de maltas y lúpulo. Su proceso de cocción, fermentación y maduración transcurre a lo largo de más de 20 días. Ello hace que esta cerveza tenga un agradable y característico sabor lupulado.",
    imagePath:
      "https://cdn.shopify.com/s/files/1/0271/8158/0388/products/estrella-galicia-escerveza-3.jpg?v=1648893181",
  },
  {
    id: "2",
    categoria: "vinos",
    marca: "Don Valentin",
    tipo: "Blanco",
    precio: 1500,
    medida: "500cc",
    descripcion:
      "Vino de brillante color amarillo-verdoso. Los aromas típicos del Torrontés afloran con muy buena intensidad, develando sus aromas frutales con notas de durazno, recuerdos florales como jazmín, rosas y delicadas notas cítricas",
    imagePath:
      "https://www.delmayoristaacasa.com.ar/wp-content/uploads/2022/06/DSC_3285.jpg",
  },
  {
    id: "3",
    categoria: "vodka",
    marca: "Sernova",
    tipo: "Vodka",
    precio: 800,
    medida: "500cc",
    descripcion:
      "Sernova es un vodka de estilo italiano, que cuenta con un proceso de elaboración sofisticado que da como resultado un producto super premium. Es un vodka elegante y delicado, ideal para divertirse y pasarla bien disfrutando de un producto de altísima calidad.",
    imagePath:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/069/568/products/vodkasernova1-d5afe1c7598b11805415971516779828-480-0.jpg",
  },
  {
    id: "4",
    categoria: "enlatados",
    marca: "Laur",
    tipo: "Aceitunas Premium",
    precio: 750,
    medida: "500cc",
    descripcion: "Aceitunas Verdes Gourmet",
    imagePath:
      "https://http2.mlstatic.com/D_NQ_NP_761381-MLA47925169747_102021-O.webp",
  },
];

export const getFetch = (id) => {
  
    return new Promise((resolve, reject) => {
      setTimeout(() => {

        if (id) {
          resolve(productos.find((producto) => producto.id === id));
        } else {
          resolve(productos);
        }
        
      }, 2000);
    });
  } 