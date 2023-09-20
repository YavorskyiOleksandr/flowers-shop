import React from 'react';
import ContentLoader from 'react-content-loader';

export const Skeleton = props => (
  <ContentLoader
    speed={2}
    width={300}
    height={320}
    viewBox='0 0 300 320'
    backgroundColor='#e0e0e0'
    foregroundColor='#efefef'
    {...props}
  >
    <rect x='0' y='0' rx='0' ry='0' width='299' height='220' />
    <rect x='21' y='235' rx='12' ry='12' width='250' height='23' />
    <rect x='224' y='273' rx='16' ry='16' width='75' height='31' />
    <rect x='166' y='280' rx='8' ry='8' width='53' height='20' />
  </ContentLoader>
);
