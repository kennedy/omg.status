import { Props } from "../page";

export default async function Availability({ params }: Props) {
  const data = await getAvailability(params.slug);
  return (
    <div>
      <h2>Availability</h2>
      <p>{data.response.message}</p>
      <code>{JSON.stringify(data.response)}</code>
    </div>
  );
}

async function getAvailability(address: string) {
  const res = await fetch(`https://api.omg.lol/address/${address}/availability`, { cache: "force-cache" });
  if (!res.ok) {
    throw new Error("Failed to fetch data!");
  }
  return res.json();
}
