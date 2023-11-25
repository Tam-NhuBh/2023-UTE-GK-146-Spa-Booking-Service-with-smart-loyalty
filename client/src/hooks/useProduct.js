import { products } from '../constants'

const useProduct = (id) => {
  return products.find((prod) => prod.id === Number(id)) || {}
}

export default useProduct
