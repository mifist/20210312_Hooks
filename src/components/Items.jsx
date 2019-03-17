function Items({data}) {
  return (
    <div className="items">
      <h3 className="items__title">Total: {data.length}</h3>
      {data.map((item, i) => {
        return (
          <div key={i}>
            {i + 1}. {item.title ? item.title : item.name}
          </div>
        )
      })}
    </div>
  )
}

Items.defaultProps = {
  data: [],
}

export default Items
