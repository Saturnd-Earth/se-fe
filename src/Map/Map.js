import React, { useState } from 'react';
import '../Scss/base.scss';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import ringIcon from '../images/ring-icon.png';
const dummyJson = [
    {
      coordinates: [40, -105],
      postId: 1
    },
    {
      coordinates: [38, -102],
      postId: 2
    }
  ]

export default function Map(props) {
    console.log(process.env.REACT_APP_MAPBOX_TOKEN)
    const [viewport, setViewport] = useState({
        latitude: 39.742043,
        longitude: -104.991531,
        width: '21em',
        height: '30vh',
        zoom: 8,
    })
    const [selectedPost, setSelectedPost] = useState(null)
    return (
        <div className='the-map'>
            <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle='mapbox://styles/chriscastanuela/ckjngcgbu2tjt19ruikfmpi3g'
            onViewportChange={viewport => {
                setViewport(viewport)
            }}
            >
                {
                    dummyJson.map(post => (
                        <Marker
                            // key={post.postId}
                            latitude={40}
                            longitude={-105}
                        >
                        {/* <button class='marker-button'> */}
                            <img src={ringIcon} 
                            alt='ring icon' 
                            className={`marker-img`}
                            onClick={(e) => {
                                e.preventDefault();
                                setSelectedPost(post);
                            }}
                            />
                        {/* </button> */}
                        {/* <h1>What What!</h1> */}
                        </Marker>
                    ))
                }
            </ReactMapGL>
        </div>
    )
}