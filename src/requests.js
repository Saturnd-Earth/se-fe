import { gql } from '@apollo/client';

export const CREATE_LIKE = gql`
  mutation createLike($userId: Int!, $postId: Int!, $latitude: Float!, $longitude: Float!){
    createLike(input: {
      userId: $userId
      postId: $postId
      latitude: $latitude
      longitude: $longitude
    })
    {
      like{
        id
      }
    }
  }
`;

export const CREATE_POST = gql`
  mutation createPost($latitude: Float!, $longitude: Float!, $postType: String!, $text: String!, $url: String, $userId: Int!){
    createPost(input: {
      latitude: $latitude
      longitude: $longitude
      postType: $postType
      text: $text
      url: $url
      userId: $userId
    })
    {
      post{
        createdAt
        id
        latitude
        longitude
        postType
        text
        url
        userId
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!){
    createUser(input: {
      credentials: {
        username: $username
        password: $password
      }
    })
    {
      user{
        id
      }
    }
  }
`;

export const DESTROY_LIKE = gql`
  mutation destroyLike($id: ID!){
    destroyLike(input:{
      id: $id,
    })
    {
      like{
        id
      }
    }
  }
`;

export const DESTROY_POST = gql`
  mutation destroyPost($id: Int!){
    destroyPost(input: {
      id: $id
    })
    {
      post{
        id
        content
        latitude
        longitude
        ringMinMax
        createdAt
        userId
      }
    }
  }
`;

export const DESTROY_USER = gql`
  mutation destroyUser($id: Int!){
    createUser(input: {
      id: $id
    })
    {
      user{
        id
      }
    }
  }
`;

export const EDIT_USER = gql`
  mutation editUser($id: Int!, $username: String!, $password: String!){
    editUser(input: {
      id: $id
      username: $username
      password: $password
    })
    {
      user{
        id
        username
      }
    }
  }
`;

export const GET_ALL_POSTS = gql`
  query getAllPosts {
    posts {
      latitude
      longitude
      ringMinMax
    }
  }
`;

export const GET_POST_BY_ID = gql`
  query getPost($id: Int!) {
    posts (id: $id){
      id
      content
      latitude
      longitude
      ringMinMax
      createdAt
      userId
    }
  }
`;

export const GET_USER_BY_ID = gql`
  query getUserById($id: Int!) {
    user(id: $id){
      id
      username
    }
  }
`

export const GET_USERS = gql`
  query getUser {
    users{
      id
      username
    }
  }
`

export const GET_USER_POSTS = gql`
  query getUserPosts($userId: Int!) {
    postsByUser(userId: $userId) {
      id
      latitude
      longitude
      ringMinMax
      createdAt
      text
      url
      userId
      likes {
        id
        latitude
        longitude
        createdAt
        userId
      }
    }
  }
`;

export const GET_FEED = gql`
  query getFeed($latitude: Float!, $longitude: Float!) {
    postsUserCanIncrease(latitude: $latitude, longitude: $longitude) {
      id
      latitude
      longitude
      ringMinMax
      createdAt
      text
      url
      userId
      likes {
        id
        latitude
        longitude
        createdAt
        userId
      }
    }
  }
`;


export const LOG_IN = gql`
  mutation logIn($username: String!, $password: String!){
    signinUser(input: {
      credentials: {
        username: $username
        password: $password
      }
    }) {
      user{
        id
        username
      }
    }
  }
`
