import React from "react";

const SuggestionBox = () => {
  return (
    <section id="suggestion" className="relative px-4 md:px-8 2xl:px-0 flex items-center justify-center">
      <div className="relative mx-auto max-w-c-1390 px-7.5 lg:px-15 l xl:px-20 w-full">
        <div className="w-full rounded-lg bg-white p-7.5 shadow-solid-8 dark:border dark:border-strokedark dark:bg-black">
          <h2 className="mb-6 text-3xl font-semibold text-black dark:text-white xl:text-sectiontitle2 text-center">
            Give your anonymous feedback!
          </h2>
          
          <div className="w-full flex justify-center">
            <textarea
              id="suggestion"
              name="suggestion"
              rows={5}
              placeholder="Type your feedback here..."
              className="mt-2 p-3 border border-gray-300 rounded-lg w-full bg-transparent focus:border-[#97321D] focus:outline-none dark:border-gray-600 dark:focus:border-white"
            ></textarea>
          </div>
          
          <div className="flex justify-center mt-6">
            <button
              aria-label="send message"
              className="inline-flex items-center gap-2.5 rounded-full bg-[#97321D] px-6 py-3 font-medium text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-[#97321D]"
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuggestionBox;
