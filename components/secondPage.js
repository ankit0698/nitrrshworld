import { services } from "@/data/services"
import AnimateOnScroll from "@/utilities/scrollAnimation"

export default function SecondPage() {
      return (
            <main className="bg-white w-full min-h-screen ">

                  <div className="grid md:grid-cols-3 grid-cols-1 md:gap-2 gap-6 md:mx-28 mt-20  md:mt-28 md:mb-16 ">
                        {services.map((service, index) => (
                              <div key={index}>
                                    <AnimateOnScroll>
                                          <div className="relative p-4 w-[80%] md:w-[90%]  shadow-lg mx-auto justify-center items-center mb-4  rounded-xl hover:bg-gray-200 hover:scale-[1.1] duration-200 " >
                                                <img alt="gallery" src={service.image.src} className='h-[3rem] md:h-[60px] w-full object-contain ' />
                                                <h1 className="text-bold text-2xl text-blue-500 text-center pt-2">{service.title}</h1>
                                                <p className="text-semibold text-center text-l pt-2">{service.description}</p>
                                          </div>
                                    </AnimateOnScroll>
                              </div>
                        ))}
                  </div>

            </main>
      )
}