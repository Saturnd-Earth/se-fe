import { addRing, hideMap, removeAllLikes, removeAllRings, setZoomToMaxDisplay, shrinkToHalf, showMap, spreadToFull  } from '../mapActions.js'
import { GET_ALL_POSTS } from '../requests.js'
import Loading from '../Loading/Loading.js'
import { useHistory } from 'react-router-dom'
import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';

export default function Splash(props) {
  let {loading, data} = useQuery(GET_ALL_POSTS)
  let history = useHistory();

  useEffect( () => {
    document.getElementsByClassName('header-text')[0].style.textShadow = '4px 4px 4px black';
    return () => {
      shrinkToHalf()
      document.getElementsByClassName('header-text')[0].style.textShadow = '';
    }
  })

  if (loading || !window.earthMap) {
    hideMap()
    return <Loading />
  } else {
    removeAllRings()
    removeAllLikes()
    spreadToFull()
    setZoomToMaxDisplay()
    if(props.center) window.earthMap.setCenter(props.center)
    showMap()
  }

  data.posts.forEach( (post, i) => {
    window.setTimeout( () => {
      if (history.location.pathname === '/se-fe/earth') {
        spreadToFull()
        let { latitude, longitude, ringMinMax } = post
        let [min, max] = ringMinMax.slice(1, -1).split(', ')
        let center = {lat: () => latitude, lng: () => longitude}
        addRing( center, min, max )
      }
    }, i * 30)
  });

  return (
    <h1 className='hidden'>Sneaky Easter Egg</h1>
  )
}
