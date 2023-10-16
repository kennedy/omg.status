import { Metadata, ResolvingMetadata } from "next";
import Expiration from "./address/expiration";
import Info from "./address/info";
import Availability from "./address/availability";
export type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props, parent: ResolvingMetadata): Promise<Metadata> {
  return {
    title: params.slug,
  };
}

export default async function Address({ params }: Props) {
  return (
    <main>
      <div>
        <h1>{params.slug}</h1>
        <Availability params={params} />
        <Info params={params} />
      </div>
    </main>
  );
}
