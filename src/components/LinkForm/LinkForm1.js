import React, { Component } from 'react'

const CREATE_LINK = gql`
  mutation CreateLink($name: String!, $url: String!, $slug: String!) {
    post(name: $name, url: $url, slug, $slug) {
      id
      name
      url
      slug
    }
  }
`

class LinkForm1 extends Component {
  state = {
    name: '',
    url: '',
    slug: '',
  }

  render() {
    const { name, url, slug } = this.state
    return (
      <div>
        <div className="flex flex-column mt3">
          <input
            className="mb2"
            value={name}
            onChange={e => this.setState({ name: e.target.value })}
            type="text"
            placeholder="A description for the link"
          />
          <input
            className="mb2"
            value={url}
            onChange={e => this.setState({ url: e.target.value })}
            type="text"
            placeholder="The URL for the link"
          />
          <input
            className="mb2"
            value={slug}
            onChange={e => this.setState({ slug: e.target.value })}
            type="text"
            placeholder="A one word short description for the link"
          />
        </div>
        <Mutation mutation={CREATE_LINK} variables={{ name, url, slug }}>
          {() => (
            <button onClick={`... you'll implement this 🔜`}>
              Submit
            </button>
          )}
        </Mutation>
      </div>
    )
  }
}

export default LinkForm1