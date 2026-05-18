// import React from 'react'

const CartCard = () => {
  return (
      <article className="flex items-center gap-4 shadow bg-slate-200 p-4 rounded">
          <img src="" alt="product name" className="bg-gray-100 h-full w-[6em]" />
          <div>
              <h1>Product Name</h1>
              <p>Price: $100</p>
              <p>Quantity: 1</p>
                <button>Remove</button>
          </div>
    </article>
  )
}

export default CartCard