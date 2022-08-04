


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
    categoria: "licores",
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
    categoria: "varios",
    marca: "Laur",
    tipo: "Aceitunas Premium",
    precio: 750,
    medida: "500cc",
    descripcion: "Aceitunas Verdes Gourmet",
    imagePath:
      "https://http2.mlstatic.com/D_NQ_NP_761381-MLA47925169747_102021-O.webp",
  },
  {
    id: "5",
    categoria: "vinos",
    marca: "Ruttini",
    tipo: "Tinto Malbec",
    precio: 2250,
    medida: "750cc",
    descripcion:
      "Rojo rubí profundo. El dúo de cepas de origen bordelés da como resultado un tinto armonioso y equilibrado: la Cabernet Sauvignon entrega su carácter corpóreo y pleno y la Malbec matiza de suaves y dulces taninos el assemblage, realzando una combinación única de aromas y sabor frutados.",
    imagePath:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/211/660/products/rutini-malbec1-e262a7b1188dfa622116148745561640-640-0.png",
  },
  {
    id: "6",
    categoria: "cerveza",
    marca: "Otro Mundo",
    tipo: "Cerveza Winter Ale",
    precio: 900,
    medida: "500cc",
    descripcion:
      "Belgian Dark Strong Ale - presenta una extrema complejidad en nariz y boca, donde comulgan maltosidad y caramelo, atributos provenientes de la malta, con un importante carácter frutal y floral",
    imagePath:
      "https://pulsocervecero.com/wp-content/uploads/2018/06/Winter-Ale-Otro-Mundo.jpg",
  },
  {
    id: "7",
    categoria: "licores",
    marca: "Baileys",
    tipo: "Licor Baileys Original",
    precio: 3600,
    medida: "750cc",
    descripcion:
      "Baileys fue el primer licor en combinar crema y alcohol de una manera lo suficientemente estable que permitiera su comercialización. El whisky y la crema son homogeneizados a fin de formar una emulsión, con la ayuda de un emulsionador que contiene aceite vegetal refinado. Este proceso evita la separación del whisky y la crema durante su almacenaje. La proporción del resto de los ingredientes usados no es conocida, pero incluye chocolate, vainilla, caramelo, azúcar y canela.",
    imagePath:
      "https://d3ugyf2ht6aenh.cloudfront.net/stores/001/211/660/products/baileys1-bda5aeffc3205b936616050396373558-640-0.jpg",
  },
  {
    id: "8",
    categoria: "varios",
    marca: "Patagonia",
    tipo: "Combo Patagonia",
    precio: 3200,
    medida: "730cc",
    descripcion: "Kit Patagonia 24.7 730ml + 2 Vasos Patagonia",
    imagePath:
      "https://http2.mlstatic.com/D_NQ_NP_684871-MLA50274435568_062022-O.webp",
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
        
      }, 1000);
    });
  } 