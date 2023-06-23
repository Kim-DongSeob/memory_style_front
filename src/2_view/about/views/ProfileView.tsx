`use client`

import React from "react";

interface ProfileViewProps {
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  // onClick: () => void;
}

const ProfileView = (props: ProfileViewProps) => {
  const { onClick } = props;
  return (
    <div>
      <button onClick={onClick}>profile image</button>
      <button onClick={onClick}>history</button>
      <button onClick={onClick}>link icons</button>
    </div>
  )
}

export default ProfileView;
