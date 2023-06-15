`use client`;

import DescriptionView from "@/containers/about/views/DescriptionView";
import ProfileView from "@/containers/about/views/ProfileView";
import React from "react";

const AboutContainer = () => {
  const handleClickProfileLink = (event: React.MouseEvent<HTMLElement> ) => {
    console.log(event.currentTarget);
  }
  return (
    <>
      <div>AboutContainer</div>
      <ProfileView onClick={(e) => handleClickProfileLink(e)}/>
      <DescriptionView />
    </>
  )
}

export default AboutContainer;
