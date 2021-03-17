const ItemsError = ({error, resetErrorBoundary}) => {
  return (
    <div className="error">
      <h3>Error !</h3>
      <p>{error?.message}</p>
      <button onClick={resetErrorBoundary}>Reset</button>
    </div>
  )
}

export default ItemsError
