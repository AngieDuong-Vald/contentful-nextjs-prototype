import ContentContainer from "@/components/Content";
import { Layout } from "@/components/Layout";
import { createClient } from "contentful";
import Image from "next/image";

export default function Page({ fields, contents, heroImages, logo, footer }) {
  return (
    <Layout fields={fields} logo={logo} footer={footer}>
      <div>
        <img
          src={"http:" + heroImages[0].fields.image.fields.file.url}
          alt="Hero Image"
          className="w-full"
        />
      </div>
      {contents.map((content) => (
        <ContentContainer content={content} key={content.fields.heading} />
      ))}
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const client = createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    space: process.env.CONTENTFUL_SPACE_ID,
  });

  const fields = await client.getEntries({
    content_type: "field",
    locale,
  });

  const contents = await client.getEntries({
    content_type: "content",
    locale,
  });

  const heroImages = await client.getEntries({
    content_type: "contentHeroImage",
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
      fields: fields.items,
      contents: contents.items,
      heroImages: heroImages.items,
      logo: logo.items,
      footer: footer.items,
    },
  };
}

export async function getStaticPaths() {
  const client = createClient({
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    space: process.env.CONTENTFUL_SPACE_ID,
  });

  const fields = await client.withAllLocales.getEntries({
    content_type: "field",
  });

  const fieldSlugs = fields.items.map((field) => field.fields.slug);

  const paths = fieldSlugs.flatMap((slug) =>
    Object.entries(slug).map(([locale, params]) => ({
      locale,
      params: { page: params },
    }))
  );

  return {
    paths,
    fallback: false,
  };

  // ---- THIS IS THE FORMAT OF RETURN OBJECT
  // return {
  //   paths: fields.items.map((field) => {
  //     return {
  //       params: { page: field.fields.slug },
  //       locale: field.sys.locale,
  //     };
  //   }),
  //   fallback: false,
  // };
}
