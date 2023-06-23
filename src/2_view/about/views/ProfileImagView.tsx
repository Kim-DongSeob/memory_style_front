'use client';

import mouse from './mouse.webp';

const ProfileImageView = () => {
  return (
    <div>
      <img src={mouse.src} alt={'profile image'} />
    </div>
  )
}

export default ProfileImageView;
