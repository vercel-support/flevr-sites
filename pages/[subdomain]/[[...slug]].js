function Home(props = {}) {
  return <pre>{JSON.stringify(props, " ", 2)}</pre>;
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
