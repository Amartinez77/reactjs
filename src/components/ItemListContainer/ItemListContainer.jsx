import ItemCount from "../ItemCount/ItemCount"


const ItemListContainer = ({ mensaje }) => {

  const onAdd = (cant) => {
    console.log(`cantidad: ${cant} `);
  }


    return (
      <div className="container">
        <h1>{mensaje}</h1>
        <hr />
        <ItemCount initial={1} stock={10} onAdd={onAdd} />
        
      </div>
    )
}

export default ItemListContainer