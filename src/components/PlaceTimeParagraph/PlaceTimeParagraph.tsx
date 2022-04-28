/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react';
import { differenceInDays, format } from 'date-fns';
import { CLOSING_DAY, PARTY_PLACE, PARTY_PLACE_NAVER_MAP_URL } from './PlaceTimeParagraph.helper';
import './PlaceTimeParagraph.css';

const PlaceTimeParagraph = (): JSX.Element => {
  return (
    <div className="place_time_paragraph">
      <h2 className="place_time_paragraph_title">언제 어디서?</h2>
      <span className="closing-day">{format(CLOSING_DAY, 'yyyy. MM. dd (eee) HH : mm')}</span>
      <span className="d-day">👉 D{differenceInDays(new Date(), CLOSING_DAY)}</span>
      <span className="place_text">{PARTY_PLACE}</span>
      <a
        className="place_img_link"
        target="_blank"
        rel="noreferrer"
        href={PARTY_PLACE_NAVER_MAP_URL}
      >
        <img className="place_img" src="/images/party_place.png" alt="party place map img" />
      </a>
      <span className="img_desc">이미지 클릭시 네이버 지도 앱/웹으로 이동</span>
    </div>
  );
};

export default PlaceTimeParagraph;
