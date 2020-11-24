import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'
import React, { useState } from "react";

const CREATE_LINK = gql`
  mutation CreateLink($name: String!, $url: String!, $slug: String!) {
    createLink(name: $name, url: $url, slug: $slug) {
      id
      name
      url
      slug
    }
  }
`;
function LinkForm() {
  const [stateName, setName] = useState("");
  const [stateLink, setLink] = useState("");
  const [stateSlug, setSlug] = useState("");

  return (
    <section className="LinkForm__form-container">
      <div
        className="LinkForm__form"
      >
        <input
          required
          name="name"
          className="LinkForm__name-input"
          type="text"
          place="A description for the link"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          required
          name="link"
          className="LinkForm__link-input"
          type="text"
          place="The URL for the link"
          onChange={(e) => setLink(e.target.value)}
        />
        <input
          required
          name="slug"
          className="LinkForm__slug-input"
          type="text"
          place="One worded short description"
          onChange={(e) => setSlug(e.target.value)}
        />
        <Mutation mutation={CREATE_LINK} variables={{ stateName, stateLink, stateSlug }}>
          {(createLink) => (
            <button onClick={createLink}>
              Shorten
            </button>
          )}
        </Mutation>
      </div>
    </section>
  );
}
export default LinkForm;
