import { ApolloClient, gql, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'localhost:3000/',
  cache: new InMemoryCache()
});

client.query({
  query: gql`
    query getPosts($lat: lat, $long: long) {
      rings(lat: $lat, long: $long) {
        ringData {center, creationTime, hasLiked, id, lastLikedLocation, likes, size},
        content
      }
    }
  `
})
.then(result => console.log(result));

client.query({
  query: gql`
    mutator createPost($lat: lat, $long: long, $content: content) {
      ring(lat: $lat, long: $long, content: $content)
    }
  `
})
.then(result => console.log(result));

REQ: 'createPost'
variables: lat, long, content

content: {
  text (optional)
  img (optional)
  vid (optional)
  url (optional)
}

export default client
