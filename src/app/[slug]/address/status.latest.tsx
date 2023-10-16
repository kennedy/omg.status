export default async function StatusLatest({ params }: { params: { slug: string } }) {
    const data = await getData(params.slug);
    var latest = data.response.statuses[0]
    var latest_time = new Date(0)
    latest_time.setUTCSeconds(latest.created)
    return (
      <div>
        <h2>Latest Status</h2>
        <p>{latest_time.toLocaleString()}</p>
        <p>{latest.emoji}</p>
        <p>{latest.content}</p>
      </div>
    );
  }
  
  async function getData(address: string) {
    const res = await fetch(`https://api.omg.lol/address/${address}/statuses`, { cache: "force-cache" });
    // if (!res.ok) {
    //   throw new Error("Failed to fetch data!");
    // }
    return res.json();
  }
  