'use client';
import { Map } from 'react-kakao-maps-sdk';
import React from 'react';
import useKakaoLoader from './useKakaoloader';

export default function KakaoMap() {
  useKakaoLoader();

  return (
    <Map // 지도를 표시할 Container
      id="map"
      center={{
        // 지도의 중심좌표
        lat: 35.11885012394496,
        lng: 126.76539684846757,
      }}
      style={{
        // 지도의 크기
        width: '100%',
        height: '400px',
      }}
      level={3} // 지도의 확대 레벨
    />
  );
}
