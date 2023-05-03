export default function Footer({ footer }) {
  return (
    <div className="bg-orange text-center p-10 mt-10">
      <p className="text-white">
        {footer[0].fields.copy}
        <a
          href="https://valdhealth.com/privacy-policy/"
          style={{ paddingLeft: "5px" }}
          className="text-blue"
        >
          {footer[0].fields.link}
        </a>
      </p>
    </div>
  );
}
