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
  mutation createPost($userId: Int!, $content: String!, $latitude: Float!, $longitude: Float!, $url: String, $postType: String!){
    createPost(input: {
      userId: $userId
      content: $content
      latitude: $latitude
      longitude: $longitude
      url: $url
      postType: $postType
    })
    {
      post{
        id,
        content
        latitude
        longitude
        ringMinMax
        createdAt
        userId
        url
        postType
      }
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($username: String!, $password: String!){
    createUser(input: {
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

export const DESTROY_LIKE = gql`
  mutation destroyLike($id: Int!){
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
      content
      latitude
      longitude
      ringMinMax
      createdAt
      userId
    }
  }
`;

export const GET_FEED = gql`
  query getFeed($userId: Int!) {
    postsByUser(userId: $userId) {
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

export const USER_LOGIN = gql`
  query users($name: name, $password: password) {
    user(name: $name, password: $password) {
      id
    }
  }
`;

export const USER_SIGNUP = gql`
  mutation userSignup($username: String!, $password: String!){
    createUser(input: {
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
