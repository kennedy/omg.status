import { Metadata, ResolvingMetadata } from "next";
import Expiration from "./address/expiration";
import Info from "./address/info";
type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  return {
    title: params.slug,
  };
}

export default async function Address({ params }: Props) {
  const data = await getData(params.slug);
  return (
    <main>
      <div>
        <Info params={params} />
        <h1>testing</h1>
        <h2>address: {params.slug}</h2>
        <p>{data.response.message}</p>
        <code>{JSON.stringify(data.response)}</code>
      </div>
    </main>
  );
}

async function getData(address: string) {
  const res = await fetch(`https://api.omg.lol/address/${address}/info`, { cache: "force-cache" });
  const res = await fetch(`https://api.omg.lol/address/${address}/availability`, { cache: "force-cache" });
  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }
  return res.json();
}
