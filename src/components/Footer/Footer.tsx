import React from 'react';
import './Footer.css';
import { GITHUB_LINK } from './Footer.helper';

export const Footer = (): JSX.Element => {
  const getContributerContainerClassName = (idx: number): string => {
    const baseClassName = 'contributor_container';
    return idx !== 0 ? `${baseClassName} left_space` : baseClassName;
  };
  return (
    <div className="footer_container">
      <div>
        <span className="contributor_section_title">Contributors</span>
        <div className="contributor_container_box">
          {contributors.map((contributor, idx) => (
            <div key={contributor.name} className={getContributerContainerClassName(idx)}>
              <a
                target="_blank"
                rel="noreferrer"
                href={contributor.link}
                className="contributor_link"
              >
                <img
                  src={contributor.profileImage.src}
                  alt={contributor.profileImage.alt}
                  className="contributor_profile_img"
                />
                <span className="contributor_name">{contributor.name}</span>
              </a>
            </div>
          ))}
        </div>
        <div className="copyright_text">Copyrights © 2022 GND3 all rights reserved.</div>
        <div className="link_area">
          <span className="contact_title">Contact : </span>
          <a className="link_text" target="_blank" rel="noreferrer" href={GITHUB_LINK}>
            Github
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

const contributors: Contributor[] = [
  {
    name: '김영진',
    link: 'https://www.linkedin.com/in/%EC%98%81%EC%A7%84-%EA%B9%80-a35719128',
    profileImage: {
      src:
        'https://media-exp1.licdn.com/dms/image/C5603AQHC_55yvOrdpA/' +
        'profile-displayphoto-shrink_100_100/0/1609808924420?e=1656547200' +
        '&v=beta&t=2gmFON01hGOCqJeg_VqZI56R2jQ37X8VkZ8NcncPfMI',
      alt: '앵',
    },
  },
  {
    name: '김예찬',
    link: 'https://www.linkedin.com/in/yae-chan-kim-41a962198/',
    profileImage: {
      src:
        'https://media-exp1.licdn.com/dms/image/C5603AQHQKV8EakE6PQ/' +
        'profile-displayphoto-shrink_100_100/0/1609491928861' +
        '?e=1656547200&v=beta&t=o9THjuFy7S6YS__0mVifAsaAJ_2z59Rbdys-EwqqYno',
      alt: '엨',
    },
  },
  {
    name: '최규민',
    link: 'https://www.linkedin.com/in/%EA%B7%9C%EB%AF%BC-%EC%B5%9C-779b9a1ba',
    profileImage: {
      src: 'images/gyum.jpeg',
      alt: '귺',
    },
  },
];

interface Contributor {
  name: string;
  link: string;
  profileImage: ProfileImage;
}

interface ProfileImage {
  src: string;
  alt: string;
}
