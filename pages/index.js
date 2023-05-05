import { createClient } from "contentful";
import ProofPoint from "@/components/ProofPoint";
import { Layout } from "@/components/Layout";

export default function Index({
  proofPoints,
  fields,
  mission,
  cta,
  heroImages,
  logo,
  footer,
}) {
  return (
    <Layout fields={fields} logo={logo} footer={footer}>
      <div>
        <img
          src={"http:" + heroImages[0].fields.image.fields.file.url}
          alt="Hero Image"
          className="w-full"
        />
      </div>

      <div className="md:px-32 px-16">
        <h2 className="text-5xl font-bold text-orange text-center py-10">
          {mission[0].fields.heading}
        </h2>
        <p className="text-justify">
          {mission[0].fields.content.content[0].content[0].value}
        </p>
      </div>

      <div className="md:px-32 px-16 pt-16">
        <div className="flex flex-col xl:flex-row pb-12 gap-10">
          {proofPoints.map((proofPoint) => {
            return (
              <ProofPoint
                heading={proofPoint.fields.heading}
                paragraph={
                  proofPoint.fields.paragraph.content[0].content[0].value
                }
                key={proofPoint.fields.heading}
              />
            );
          })}
        </div>
      </div>

      <div className=" flex items-center flex-col lg:space-x-10 md:flex-row md:px-32 px-16">
        <div className="lg:w-1/2 max-w-full">
          <img src="blurb.png" alt="Blurb Image" />
        </div>
        <div className="flex flex-col items-center lg:w-1/2">
          <h2 className="text-3xl font-bold text-orange text-center pb-5 pt-10">
            {cta[0].fields.heading}
          </h2>
          <p className="text-justify">
            {cta[0].fields.content.content[0].content[0].value}
          </p>
          <div className="items-center py-8">
            <a
              href="#"
              className="p-3 px-6 pt-2 text-white bg-orange rounded-full baseline hover:bg-grey"
            >
              {cta[0].fields.button}
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const client = createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    space: process.env.CONTENTFUL_SPACE_ID,
  });

  const proofPoint = await client.getEntries({
    content_type: "proofPoint",
    locale,
  });

  const fields = await client.getEntries({
    content_type: "field",
    locale,
  });

  const mission = await client.getEntries({
    content_type: "mission",
    locale,
  });

  const cta = await client.getEntries({
    content_type: "cta",
    locale,
  });

  const heroImages = await client.getEntries({
    content_type: "homeHeroImage",
    locale,
  });

  const logo = await client.getEntries({
    content_type: "logo",
    locale,
  });

  const footer = await client.getEntries({
    content_type: "footer",
    locale,
  });

  return {
    props: {
      proofPoints: proofPoint.items,
      fields: fields.items,
      mission: mission.items,
      cta: cta.items,
      heroImages: heroImages.items,
      logo: logo.items,
      footer: footer.items,
    },
  };
}
