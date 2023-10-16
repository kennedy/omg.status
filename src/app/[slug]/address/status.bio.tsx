import rehypeSanitize from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";
import remarkHtml from "remark-html";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import { remark } from "remark";
import html from "remark-html";

export default async function StatusBio({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);
  const processedContent = await unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeStringify)
    .process(data.response.bio);
  const contentHtml = processedContent.toString();

  return (
    <>
      {data.request.success && (
        <>
          <h2>{data.response.message}</h2>
          <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
          <div>{contentHtml}</div>
        </>
      )}
    </>
  );
}

async function getData(address: string) {
  const res = await fetch(`https://api.omg.lol/address/${address}/statuses/bio`, { cache: "force-cache" });
  return res.json();
}
