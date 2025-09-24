interface InstagramEmbedProps {
  url: string;
  title: string;
}

const InstagramEmbed = ({ url, title }: InstagramEmbedProps) => {
  return (
    <div className="flex flex-col justify-center items-center w-full sm:w-auto">
      <h2 className="text-center mt-5 mb-2 text-xl">{title}</h2>
      <blockquote 
        className="instagram-media w-full max-w-lg bg-white border-0 rounded-sm shadow-sm m-0 p-0" 
        data-instgrm-permalink={url}
        data-instgrm-version="14"
      />
    </div>
  );
};

export default InstagramEmbed;