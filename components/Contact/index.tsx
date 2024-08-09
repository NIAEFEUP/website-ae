"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import { Instagram, Facebook, Linkedin} from 'lucide-react';

const Contact = () => {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <section id="support" className="px-4 md:px-8 2xl:px-0">
        <div className="relative mx-auto max-w-c-1390 px-7.5 pt-10 lg:px-15 lg:pt-15 xl:px-20 xl:pt-20">
          <div className="absolute left-0 top-0 -z-1 h-2/3 w-full rounded-lg bg-gradient-to-t from-transparent to-[#dee7ff47] dark:bg-gradient-to-t dark:to-[#252A42]"></div>
          <div className="absolute bottom-[-255px] left-0 -z-1 h-full w-full">
            <Image
              src="./images/shape/shape-dotted-light.svg"
              alt="Dotted"
              className="dark:hidden"
              fill
            />
            <Image
              src="./images/shape/shape-dotted-dark.svg"
              alt="Dotted"
              className="hidden dark:block"
              fill
            />
          </div>

          <div className="flex flex-col-reverse flex-wrap gap-8 md:flex-row md:flex-nowrap md:justify-between xl:gap-20">
            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black md:w-3/5 lg:w-3/4 xl:p-15"
            >
              <h2 className="mb-15 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Send a message
              </h2>

              <form
                action="https://formbold.com/s/unique_form_id"
                method="POST"
              >
                <div className="mb-7.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <div className="p-2 flex flex-col">
                  <label htmlFor="name">Full name</label>
                    <input
                      type="text"
                      className="p-2 border border-gray-300  bg-transparent rounded  focus:border-[#97321D] focus:outline-none dark:border-gray-600 dark:focus:border-white"
                    />
                  </div>

                  <div className="p-2 flex flex-col">
                  <label htmlFor="email">Email address</label>
                    <input
                      type="email"
                      className="p-2 border border-gray-300  bg-transparent rounded  focus:border-[#97321D] focus:outline-none dark:border-gray-600 dark:focus:border-white"
                    />
                  </div>
                </div>

                <div className="mb-12.5 flex flex-col gap-7.5 lg:flex-row lg:justify-between lg:gap-14">
                  <div className="p-2 flex flex-col lg:w-2/3">
                  <label htmlFor="text">Subject</label>
                    <input
                      type="text"
                      className="p-2 border border-gray-300 bg-transparent rounded w-full focus:border-[#97321D] focus:outline-none dark:border-gray-600 dark:focus:border-white"
                    />
                  </div>

                  <div className="p-2 flex flex-col">
                  <label htmlFor="text">Phone number</label>
                    <input
                      type="text"
                      className="p-2 border border-gray-300 bg-transparent rounded  focus:border-[#97321D] focus:outline-none dark:border-gray-600 dark:focus:border-white"
                    />
                  </div>
                </div>

                <div className="mb-11.5 flex flex-col p-2">
                <label htmlFor="Message">Message</label>
                <textarea
                    rows={4}
                    className="flex-grow p-2 border border-gray-300  bg-transparent rounded  focus:border-[#97321D] focus:outline-none dark:border-gray-600 dark:focus:border-white"
                  ></textarea>
                </div>

                <div className="flex flex-wrap gap-4 xl:justify-between ">
                  <div className="mb-4 flex md:mb-0">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      className="peer sr-only "
                    />
                    <span className="border-gray-300 bg-gray-100 text-blue-600 dark:border-gray-600 dark:bg-gray-700 group mt-2 flex h-5 min-w-[20px] items-center justify-center rounded peer-checked:bg-primary">
                      <svg
                        className="opacity-0 peer-checked:group-[]:opacity-100"
                        width="10"
                        height="8"
                        viewBox="0 0 10 8"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.70704 0.792787C9.89451 0.980314 9.99983 1.23462 9.99983 1.49979C9.99983 1.76495 9.89451 2.01926 9.70704 2.20679L4.70704 7.20679C4.51951 7.39426 4.26521 7.49957 4.00004 7.49957C3.73488 7.49957 3.48057 7.39426 3.29304 7.20679L0.293041 4.20679C0.110883 4.01818 0.0100885 3.76558 0.0123669 3.50339C0.0146453 3.24119 0.119814 2.99038 0.305222 2.80497C0.490631 2.61956 0.741443 2.51439 1.00364 2.51211C1.26584 2.50983 1.51844 2.61063 1.70704 2.79279L4.00004 5.08579L8.29304 0.792787C8.48057 0.605316 8.73488 0.5 9.00004 0.5C9.26521 0.5 9.51951 0.605316 9.70704 0.792787Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <label
                      htmlFor="default-checkbox"
                      className="flex max-w-[425px] cursor-pointer select-none pl-5"
                    >
                      By clicking Checkbox, you agree to use our “Form” terms
                      And consent cookie usage in browser.
                    </label>
                  </div>

                  <button
                    aria-label="send message"
                    className="inline-flex items-center gap-2.5 rounded-full bg-[#97321D] px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-[#97321D]"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </motion.div>

            <motion.div
              variants={{
                hidden: {
                  opacity: 0,
                  y: -20,
                },

                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 2, delay: 0.1 }}
              viewport={{ once: true }}
              className="animate_top w-full md:w-2/5 md:p-7.5 lg:w-[26%] xl:pt-15"
            >
              <h2 className="mb-12.5 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2">
                Contacts
              </h2>
              <div className="5 mb-11">
                <div className="flex space-x-12">
                  <a href="https://www.instagram.com/aefeup/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="w-6 h-6 text-black dark:text-white" />
                  </a>
                  <a href="https://www.facebook.com/aefeup/" target="_blank" rel="noopener noreferrer">
                    <Facebook className="w-6 h-6 text-black dark:text-white" />
                  </a>
                  <a href="https://www.linkedin.com/company/aefeup/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-6 h-6 text-black dark:text-white" />
                  </a>
                </div>
              </div>
              
              <div className="5 mb-7">
                <h3 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Email Address
                </h3>
                <p>
                  <a href="mailto:aefeup@aefeup.pt">aefeup@aefeup.pt</a>
                </p>
              </div>
              <div>
                <h4 className="mb-4 text-metatitle3 font-medium text-black dark:text-white">
                  Phone Number
                </h4>
                <p>
                  <a href="tel:+35122 508 1556">22 508 1556</a>
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
