import { gql, useMutation } from '@apollo/client';
import React, { useState }  from 'react';
import '../Scss/base.scss';
// icons
import dummyIcon from '../Images/dummyIcon.png';
import defaultLike from '../Images/like-white.png';
import blueLike from '../Images/like-blue.png';


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

export async function Post(props) {
    let [userInfo, setUserInfo] = useState({
        userIcon: dummyIcon,
        name: 'John Doe',
        id: 1
    })
    let [postInfo, setPostInfo] = useState({
        ring: 0,
        id: 2,
        date: null,
        liked: false,
        postContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    })
    let [page, setPage] = useState({
        myPosts: true
    })
    let [loadingPos, setLoadingPos] = useState(false)
    let [sendNewLike, { data }] = useMutation(CREATE_LIKE);

    let getPos = async () => {
      let pos = await window.navigator.geolocation.getCurrentPosition( (position) => position )
      return pos
    }

    let like = async () => {
        setLoadingPos(true)
        let pos = await getPos()
        sendNewLike({
          variables: {
            userId: userInfo.id,
            postId: postInfo.id,
            latitude: pos.coords.latitude,
            longitude: pos.coors.longitude
          }
        })
        .then( () => {
          setLoadingPos(false)
          setPostInfo({
              ...postInfo,
              liked: !postInfo.liked
          })
        })
        .catch( () => console.log('No one likes.'))
        setTimeout( () => setLoadingPos(false), 16000)
    }

    let likeButton;
    !postInfo.liked ? likeButton = defaultLike : likeButton = blueLike;
    if (loadingPos) return (<h1>LOADING YOUR LOCATION....</h1>)
    return (
        <section className='post'>
            <section className='post-left'>
                <div className='post-left-top'>
                    <img src={userInfo.userIcon} alt='User Icon' id='user-icon'/>
                </div>
                <div className='post-left-bottom'>
                    <img src={likeButton} alt='Like button' id='like-button' onClick={() => this.like()}/>
                </div>
            </section>
            <section className='post-right'>
                <div className='post-right-top'>
                        <em><strong><h5 className='post-right-top-h' id='name-header'>{userInfo.name}</h5></strong></em><br/>
                        <em><h6 className='post-right-top-h' id='prt2'>Ring: {postInfo.ring}</h6></em><br/>
                        <em><h6 className='post-right-top-h' id='prt3'>Date: </h6></em>
                </div>
                <div className='post-right-bottom'>
                    <p className='post-right-bottom-p'>{postInfo.postContent}</p>
                </div>
            </section>
        </section>
    )
}
