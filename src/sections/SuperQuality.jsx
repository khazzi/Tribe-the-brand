import { shoe8 } from "../assets/images"
import Button from "./button"
const SuperQuality = () => {
  return (
    <section
    id="about-us" className="flex justify-between items-center
     max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">

        <h2 className="font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You <span className="text-coral-red">Super Quality</span> Shoes</h2>
        
        
        <p className="mt-4 lg:max-w-lg info-text">
        Experience unparalleled comfort and style with our exceptional shoe crafted with precision and attention to detail.
        The superior quality materials not only ensure durability but also provide a luxurious feel, making every step a delight.
        From the meticulously designed sole for optimal support to the exquisite stitching that reflects true craftsmanship,
        this shoe is a testament to both elegance and functionality.
        <p className="mt-6 lg:max-w-lg info-text">Elevate your footwear experience with a pair that effortlessly combines fashion and comfort, setting a new standard in footwear excellence.</p>
        </p>
        <div className="mt-11">
        <Button label="View Details" />
        </div>
      
      </div>
    <div className="flex-1 flex justify-center items-center">
      <img src={shoe8} alt="shoe"
      width={570} height={522} className="object-contain" />
    </div>
    </section>
   )
}

export default SuperQuality