export default async function Now({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);
  return (
    <div>
      <p>{data.response.message}</p>
      <p>{data.response.now.content}</p>
      <p>{data.response.now.updated}</p>
    </div>
  );
}

async function getData(address: string) {
  const res = await fetch(`https://api.omg.lol/address/${address}/now`, { cache: "force-cache" });
  // if (!res.ok) {
  //   throw new Error("Failed to fetch data!");
  // }
  return res.json();
}
