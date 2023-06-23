`use client`;

import DescriptionView from "@/2_view/about/views/DescriptionView";
import ProfileView from "@/2_view/about/views/ProfileView";
import React from "react";
import ProfileImageView from "@/2_view/about/views/ProfileImagView";

const AboutContainer = () => {
  const handleClickProfileLink = (event: React.MouseEvent<HTMLElement> ) => {
    console.log(event.currentTarget);
  }
  return (
    <>
      <div>AboutContainer</div>
        <ProfileImageView />
        {/*<ProfileView onClick={(e) => handleClickProfileLink(e)}/>*/}
      <DescriptionView />
    </>
  )
}

export default AboutContainer;
