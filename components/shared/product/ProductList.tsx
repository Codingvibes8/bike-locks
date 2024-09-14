import { Product } from '../../../type'
import ProductCard from './ProductCard'

const ProductList = ({ title, data }: { title: string; data: Product[] }) => {
  return (
    <>
      <h2 className="h2-bold">{title}</h2>

      {data.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {data.map((product: Product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div>
          <p>No product found</p>
        </div>
      )}
    </>
  )
}

export default ProductList
