



 import ProductList from '../../components/shared/product/ProductList'
   import sampleData from '@/lib/sample-data'

   export default function Home() {
     return (
       <div className="space-y-8">
         <h2 className="h2-bold">Latest Products</h2>
         <ProductList title='Bike Locks: ' data={sampleData.products} />
       </div>
     )
   }
