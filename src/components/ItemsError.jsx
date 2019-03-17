const ItemsError = ({error}) => {
  return (
    <div className="error">
      <h3>Error !</h3>
      <p>{error?.message}</p>
    </div>
  )
}

export default ItemsError
