
import { arrowRight } from '../assets/icons'
import { offer } from '../assets/images'
import Button from './Button'
const SpecialOffer = () => {
  return (
    <section className='flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className="flex-1">
        <img src={offer} alt="offer"
        width={773}
        height={687} />

<h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
  Special <span className="text-coral-red"> Offer</span>
  </h2>


<p className="mt-4 lg:max-w-lg info-text">
Don't miss our exclusive special offer! For a limited time, enjoy unbeatable savings on premium products.
Elevate your style and savings with this unique opportunity.</p>
<p className='mt-6 lg:max-w-lg info-text'>Hurry, seize the chance to experience quality like never before at prices you won't find elsewhere!
<p className="mt-6 lg:max-w-lg info-text">Elevate your footwear experience with a pair that effortlessly combines fashion and comfort, setting a new standard in footwear excellence.</p>
</p>
<div className="mt-11 flex flex-wrap gap-4">
<Button label="Shop Now"
iconURL={arrowRight} />
<Button 
label="Learn more"
backgroundColor="bg-white"
borderColor= "border-slate-gray"
textColor="text-slate-gray" />
</div>

</div>
    </section>
  )
}

export default SpecialOffer