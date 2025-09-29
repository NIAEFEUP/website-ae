interface InstagramEmbedProps {
  url: string;
  title: string;
}

const InstagramEmbed = ({ url, title }: InstagramEmbedProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <h2 className="text-center mt-3 mb-2 text-sm sm:text-lg md:text-xl px-2">{title}</h2>
      <div className="w-full max-w-[350px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] h-[660px] overflow-hidden">
        <blockquote
          className="instagram-media w-full bg-white border-0 rounded-sm shadow-sm m-0 p-0"
          data-instgrm-permalink={url}
          data-instgrm-version="14"
        />
      </div>
    </div>
  );
};

export default InstagramEmbed;