export default async function Expiration({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);
  return (
    <div>{data.response.message}</div>
  );
}

async function getData(address: string) {
  const res = await fetch(`https://api.omg.lol/address/${address}/expiration`, { cache: "force-cache" });
  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }
  return res.json();
}
