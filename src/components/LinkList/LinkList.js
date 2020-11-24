import { useQuery, gql } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://uqjqp.sse.codesandbox.io/",
  cache: new InMemoryCache(),
});

const LINKS = gql`
  query GetLinks {
    getLinks {
      name
      url
      slug
    }
  }
`;

function LinkList() {
  const { loading, error, data } = useQuery(LINKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.getLinks.map(({ name, url, slug }) => (
    <div key={slug}>
      <p>
        {name}
      </p>
      <p>
        {url}
      </p>
      <p>
        {slug}
      </p>
      <br />
    </div>
  ));
}
export default LinkList;