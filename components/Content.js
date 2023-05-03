export default function ContentContainer({ content }) {
  return (
    <div className=" flex items-center flex-col md:space-x-10 md:flex-row md:px-32 p-16">
      <div className="md:w-1/2 max-w-full">
        <img
          src={"http:" + content.fields.image.fields.file.url}
          alt="Content Image"
        />
      </div>
      <div className="flex flex-col items-center md:w-1/2">
        <h2 className="text-3xl font-bold text-orange text-center pb-5 pt-10">
          {content.fields.heading}
        </h2>
        <p className="text-justify">
          {content.fields.content.content[0].content[0].value}
        </p>
      </div>
    </div>
  );
}
