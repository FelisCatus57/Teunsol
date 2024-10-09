'use client';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import React from 'react';
import useKakaoLoader from './useKakaoloader';

export default function KakaoMap() {
  useKakaoLoader();

  return (
    <Map
      id="map"
      center={{
        lat: 35.11885012394496,
        lng: 126.76539684846757,
      }}
      style={{
        width: '100%',
        height: '500px',
      }}
      level={3}
    >
      <MapMarker position={{ lat: 33.55635, lng: 126.795841 }}>
        <div style={{color:"#000"}}>Hello World!</div>
      </MapMarker>
    </Map>
  );
}
