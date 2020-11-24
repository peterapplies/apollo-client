import "./App.css";
import { useQuery, gql } from "@apollo/client";
import React from "react";

const LINKS = gql`
  query GetLinks {
    getLinks(id: "XXXX") {
      name
      url
      slug
    }
  }
`;

function Links() {
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

function App() {
  return (
    <div className="App">
      <Links />
    </div>
  );
}

export default App;
