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
        <div className="copyright_text">Copyrights © 2023 GND3 all rights reserved.</div>
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
      src: 'images/angjin.jpeg',
      alt: '앵진',
    },
  },
  {
    name: '김예찬',
    link: 'https://www.linkedin.com/in/yae-chan-kim-41a962198/',
    profileImage: {
      src: 'images/yeachan.jpeg',
      alt: '엨찬',
    },
  },
  {
    name: '최규민',
    link: 'https://www.linkedin.com/in/%EA%B7%9C%EB%AF%BC-%EC%B5%9C-779b9a1ba',
    profileImage: {
      src: 'images/gyumnnii.jpeg',
      alt: '귺민',
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
