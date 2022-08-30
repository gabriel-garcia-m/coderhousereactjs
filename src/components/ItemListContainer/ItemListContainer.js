import ItemCount from "../ItemCount/ItemCount"

function ItemListContainer({greeting}) {
  return (
    <div>
      <h2>Mira los {greeting}</h2>
      <ItemCount stock={10} initial={1}/>
    </div>
  )
}

export default ItemListContainer