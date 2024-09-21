"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Slide } from "@/payload-types";

//payload para slides??
/* const slides = [
  {
    id: 1,
    title: "Welcome to AEFEUP",
    description: "Associação de Estudantes da Faculdade de Engenharia da Universidade do Porto.",
    imageUrl: "/images/home/back.png", //payload para imagens? //gosto do fundo vermelho aqui mas com navbar logo branco
  },
  {
    id: 2,
    title: "Somos a maior associação de estudantes do país!",
    description: "Conhece um pouco mais da nossa história!",
    imageUrl: "/images/home/back.png", //meter outra imagem de fundo 
    link: "/about",
  },
  {
    id: 3,
    title: "Estamos nos top 5 da Europa!",
    description: "Conhece os nossos atlatas!",
    imageUrl: "/images/home/back.png",  //meter outra imagem de fundo 
    link: "/sport/teams",
  },
];
 */
interface Props {
  slidesData: Slide[] 
}

const Landing = ({slidesData} : Props) => {
  return (
    <>
      <section className="relative h-screen">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="h-full"
        >
          {slidesData.map((slide) => (
            <SwiperSlide key={slide.id}>
              {slide.id === 1 ? (
                <div
                  className="relative flex items-center justify-center h-screen bg-cover bg-center"
                  style={{ backgroundImage: `url(${typeof slide.image != "number" ? slide.image.url : undefined})` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50 z-0"></div>

                  <div className="relative z-10 flex flex-col items-center justify-center mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0 text-center text-white">
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, y: -20 },
                        visible: { opacity: 1, y: 0 },
                      }}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ duration: 1, delay: 0.1 }}
                      viewport={{ once: true }}
                      className="w-full md:w-3/4 lg:w-1/2"
                    >
                      <div>
                        <Image className="relative w-full"
                          src="/images/home/aefeup.png"
                          alt="logo"
                          width={1500}
                          height={900}
                        />
                      </div>
                      <p className="mb-8 text-lg xl:text-xl">
                        {slide.description}
                      </p>       
                    </motion.div>
                  </div>
                </div>
              ) : (
                <div
                  className="relative flex items-center justify-start h-screen bg-cover bg-center px-6"
                  style={{ backgroundImage: `url(${ typeof slide.image != "number" ? slide.image.url : undefined})` }}
                >

                  <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50 z-0"></div>
                  
                  <div className="relative z-10 flex flex-col items-start justify-center mx-auto max-w-c-1390 text-left text-white">
                    <motion.div
                      variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      initial="hidden"
                      whileInView="visible"
                      transition={{ duration: 1, delay: 0.2 }}
                      viewport={{ once: true }}
                      className="w-full md:w-3/4 lg:w-1/2"
                    >
                      <h2 className="mb-4 text-4xl font-bold xl:text-5xl leading-tight">
                        {slide.name}
                      </h2>
                      <p className="mb-6 text-lg xl:text-xl">
                        {slide.description}
                      </p>
                      <Link href={slide.link ?? ''}>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          className="inline-flex items-center gap-2.5 rounded-full bg-[#97321D] px-6 py-2 font-medium text-white hover:bg-[#b54026] transition duration-300 cursor-pointer"
                        >
                          <span>Learn More</span>
                          <Image
                            width={20}
                            height={20}
                            src="/images/icon/icon-arrow-dark.svg"
                            alt="Arrow"
                            className="dark:hidden"
                          />
                          <Image
                            width={20}
                            height={20}
                            src="/images/icon/icon-arrow-light.svg"
                            alt="Arrow"
                            className="hidden dark:block"
                          />
                        </motion.div>
                      </Link>
                    </motion.div>
                  </div>
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
};

export default Landing;
