import { GET_ALL_POSTS } from '../requests.js'
import { addRing, hideMap, removeAllLikes, removeAllRings, setZoomToMaxDisplay, shrinkToHalf, showMap, spreadToFull  } from '../mapActions.js'
import loadingImg from '../images/loading.png';
import React, { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

export default function Splash(props) {
  let {loading, error, data} = useQuery(GET_ALL_POSTS)

  useEffect( () => {
    spreadToFull()
    return shrinkToHalf
  })

  if (window.earthMap) {
    hideMap()
    window.earthMap.setMapTypeId('satellite');
    window.earthMap.setZoom(3.5
    )
  }

  if (loading) {
    return <img className='spin' alt='Updating the Post' src={loadingImg}></img>
  }
  showMap()
  removeAllRings()
  removeAllLikes()
  setZoomToMaxDisplay()
  data.posts.forEach( post => {
    let { content, createdAt, id, likes, latitude, longitude, ringMinMax } = post
    let [min, max] = ringMinMax.slice(1, -1).split(', ')
    let center = {lat: () => latitude, lng: () => longitude}
    addRing( center, min, max )
  });

  return (
    <h1 className='hidden'>Sneaky Easter Egg</h1>
  )
}
