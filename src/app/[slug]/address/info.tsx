export default async function Info({ params }: { params: { slug: string } }) {
  const data = await getData(params.slug);
  return (
    <div>
      {data.request.success && (
        <div>
          <p>{data.response.expiration.message}</p>
          <p>{data.response.registration.message}</p>
          <p>{data.response.verification.message}</p>
          <code>{JSON.stringify(data.response.registration)}</code>
        </div>
      )}
    </div>
  );
}

async function getData(address: string) {
  const res = await fetch(`https://api.omg.lol/address/${address}/info`, { cache: "force-cache" });
  // if (!res.ok) {
  //   throw new Error("Failed to fetch data!");
  // }
  return res.json();
}
