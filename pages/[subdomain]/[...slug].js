import Link from "next/link";
import { useRouter } from "next/router";
function Home(props = {}) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <pre>{JSON.stringify(props, " ", 2)}</pre>
      <Link href="/posts/some-path">
        <a>Link</a>
      </Link>
    </div>
  );
}

export async function getStaticProps(context) {
  const data = {};

  data.params = context.params;
  return {
    props: data,
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export default Home;
