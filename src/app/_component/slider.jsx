import { Card, CardContent } from "../../components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../../components/ui/carousel"

function Changephoto(){
    return(
    <div className=" w-[100%] mt-2 mx-auto rounded-lg px-10">
  <Carousel className="w-full relative">
    <CarouselContent>

      <CarouselItem>
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=1200"
          alt="Slide 1"
          className="w-full h-[500px] rounded-lg object-cover"
        />
      </CarouselItem>

      <CarouselItem>
        <img
          src="https://plus.unsplash.com/premium_photo-1664305032567-2c460e29dec1?w=1200"
          alt="Slide 2"
          className="w-full h-[500px] rounded-lg object-cover"
        />
      </CarouselItem>

      <CarouselItem>
        <img
          src="https://images.unsplash.com/photo-1670684684445-a4504dca0bbc?w=1200"
          alt="Slide 3"
          className="w-full h-[500px] rounded-lg object-cover"
        />
      </CarouselItem>

    </CarouselContent>

    <CarouselPrevious className="left-0 translate-x-0 bg-white font-bold" />
    <CarouselNext className="right-0 translate-x-0 bg-white font-bold" />
  </Carousel>
</div>
    )
}
export default Changephoto