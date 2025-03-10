import { Media, Testimonial } from "@/payload-types";
import Image from "next/image";

const SingleTestimonial = ({ review }: { review: Testimonial }) => {
  const { name, position, photo, content } = review;
  const url = (photo as Media)?.url
  return (
    <div className="rounded-lg bg-white p-9 pt-7.5 shadow-solid-9 dark:border dark:border-strokedark dark:bg-blacksection dark:shadow-none">
      <div className="mb-7.5 flex justify-between border-b border-stroke pb-6 dark:border-strokedark">
        <div>
          <h3 className="mb-1.5 text-metatitle3 text-black dark:text-white">
            {name}
          </h3>
          <p>{position}</p>
        </div>
        <Image 
          width={60} 
          height={50} 
          className="" 
          src={url ? url : ''} 
          alt={name}
          priority
        />
      </div>

      <p>{content}</p>
    </div>
  );
};

export default SingleTestimonial;
