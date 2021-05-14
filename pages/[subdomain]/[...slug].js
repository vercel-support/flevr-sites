import Link from "next/link";

function Home(props = {}) {
  return (
    <div>
      <pre>{JSON.stringify(props, " ", 2)}</pre>
      <Link href="/posts/some-path">
        <a>Link</a>
      </Link>
    </div>
  );
}

export async function getStaticProps({ params = {} }) {
  return {
    props: params,
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  return { paths: [], fallback: true };
}

export default Home;
