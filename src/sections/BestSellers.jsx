import { products } from "../constants"
import PopularProductCard from "./PopularProductCard"
const BestSellers = () => {
  return (
    <section id="products"
    className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold max-sm:text-3xl">Our 
        <span className="text-coral-red"> Best</span> Sellers</h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray">Experience premium value and style with our in-demand selections.
           Discover a world of state-of-the-art design.</p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2
       grid-cols-1 sm:gap-4 gap-14">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product}/>
        ))}
        
      </div>
    </section>
  )
}

export default BestSellers