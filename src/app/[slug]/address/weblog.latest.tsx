export default async function WeblogLatest({ params }: { params: { slug: string } }) {
    const data = await getData(params.slug);
    var latest_time = new Date(0)
    latest_time.setUTCSeconds(data.response.post.date)
    return (
      <article>
        <h2>Weblog Latest</h2>
        <h3>{data.response.post.title}</h3>

        <p>{latest_time.toLocaleString()}</p>
        <div dangerouslySetInnerHTML={{__html: data.response.post.output}}/>
      </article>
    );
  }
  
  async function getData(address: string) {
    const res = await fetch(`https://api.omg.lol/address/${address}/weblog/post/latest`, { cache: "force-cache" });
    // if (!res.ok) {
    //   throw new Error("Failed to fetch data!");
    // }
    return res.json();
  }
  