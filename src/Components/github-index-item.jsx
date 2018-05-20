import React from 'react';

const GitHubIndexItem = ({ name, url, imageUrl }) => {
  console.log(imageUrl);
  return(
    <div className='indexItem'>
      <h1 className='itemHeader'>{name}</h1>
      <img src={imageUrl} />
      <a href={url}>Repo</a>

    </div>
  );
};

export default GitHubIndexItem;
