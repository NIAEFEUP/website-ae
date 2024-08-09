"use client";
import Image from "next/image";
import { useState } from "react";

const Hero = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <section className="overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="grid lg:grid-cols-2 min-h-[40vh] lg:items-center lg:gap-8 xl:gap-32.5">
            <div>
              <h4 className="mb-4.5 text-lg font-medium text-black dark:text-white">
                🔥 Eventos
              </h4>
              <h1 className="mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero ">
                Bem-vindo à {"   "}
                <span className="relative inline-block before:absolute before:bottom-2.5 before:left-0 before:-z-1 before:h-3 before:w-full before:bg-titlebg dark:before:bg-titlebgdark ">
                  AEFEUP!
                </span>
              </h1>
              <p>
                Associação de Estudantes da Faculdade de Engenharia da
                Universidade do Porto
              </p>

              <div className="mt-10">
                <form onSubmit={handleSubmit}>
                  <div className="flex flex-wrap gap-5">
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="text"
                      placeholder="Insira o seu email"
                      className="rounded-full border border-stroke px-6 py-2.5 shadow-solid-2 focus:border-primary focus:outline-none dark:border-strokedark dark:bg-black dark:shadow-none dark:focus:border-primary"
                    />
                    <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                    >
                      Subscrever
                    </button>
                  </div>
                </form>
              </div>
            </div>

            <div className="animate_right relative h-full w-full">
              <Image
                className="shadow-solid-l object-cover rounded-lg"
                src="/images/hero/aefeup.jpg"
                alt="Hero"
                fill
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
