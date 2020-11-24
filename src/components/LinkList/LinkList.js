import React from "react";
import { useQuery, gql } from "@apollo/client";

function LinkList() {
  const LINKS = gql`
    query GetLinks {
      getLinks {
        name
        url
        slug
      }
    }
  `;

  const { loading, error, data } = useQuery(LINKS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.getLinks.map(({ name, url, slug }) => (
    <div key={slug}>
      <p>{name}</p>
      <p>{url}</p>
      <p>{slug}</p>
      <br />
    </div>
  ));
}
export default LinkList;