import { create } from 'zustand'

const useCard = create((set) => ({
  productList: [],
  addProduct: (id, quantity) =>
    set((state) => ({
      ...state,
      productList: (() => {
        const isExisted = state?.productList?.some(
          (prod) => Number(prod?.id) === Number(id)
        )

        if (isExisted) {
          return state?.productList?.map((prod) =>
            Number(prod?.id) === Number(id)
              ? { ...prod, quantity: prod?.quantity + quantity }
              : prod
          )
        }

        return [
          ...(state?.productList || []),
          {
            id: Number(id),
            quantity: quantity,
          },
        ]
      })(),
    })),
  removeProduct: (id) =>
    set((state) => ({
      ...state,
      productList: state.productList.filter((prod) => prod.id !== Number(id)),
    })),
  decreaseQuantity: (id, quantity) =>
    set((state) => ({
      ...state,
      productList: (() => {
        const prod = state?.productList?.find((prod) => Number(prod?.id) === Number(id))
        if (!prod) {
          return state?.productList
        }

        if (prod?.quantity <= quantity) {
          return state?.productList?.filter((prod) => Number(prod?.id) !== Number(id))
        }

        return state?.productList?.map((prod) =>
          Number(prod?.id) === Number(id)
            ? { ...prod, quantity: prod?.quantity - quantity }
            : prod
        )
      })(),
    })),
}))

// const useCard = create((set) => ({
//   productList: [],
//   addProduct: (id) =>
//     set((state) => ({
//       ...state,
//       productList: [...state.productList, { id: Number(id), quantity: 1 }],
//     })),
//   removeProduct: (id) =>
//     set((state) => ({
//       ...state,
//       productList: state.productList.filter((prod) => prod.id !== Number(id)),
//     })),
//   increaseQuantity: (id, quantity) =>
//     set((state) => ({
//       ...state,
//       productList: state.productList.map((prod) =>
//         prod.id === Number(id) ? { ...prod, quantity: prod.quantity + quantity } : prod
//       ),
//     })),
//   decreaseQuantity: (id) =>
//     set((state) => ({
//       ...state,
//       productList: (() => {
//         const product = state.productList.find((prod) => prod.id === Number(id))
//         if (product.quantity === 1) {
//           return state.productList.filter((prod) => prod.id !== Number(id))
//         }
//         return state.productList.map((prod) =>
//           prod.id === Number(id) ? { ...prod, quantity: prod.quantity - 1 } : prod
//         )
//       })(),
//     })),
// }))

export default useCard
