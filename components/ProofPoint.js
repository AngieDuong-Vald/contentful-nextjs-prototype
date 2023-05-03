export default function ProofPoint({ heading, paragraph }) {
  return (
    <div className="p-6 px-6 text-white bg-orange rounded-lg baseline">
      <h3 className="text-2xl font-bold text-white text-center pb-3">
        {heading}
      </h3>
      <p className="text-justify">{paragraph}</p>
    </div>
  );
}
