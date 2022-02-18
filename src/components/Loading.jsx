import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = () => (
  <ContentLoader 
    speed={2}
    width={1300}
    height={300}
    viewBox="0 0 1300 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
   
  >
    <rect x="-30" y="0" rx="3" ry="3" width="181" height="25" /> 
    <rect x="600" y="1" rx="3" ry="3" width="140" height="12" /> 
    <rect x="464" y="34" rx="3" ry="3" width="413" height="86" /> 
    <rect x="158" y="1" rx="3" ry="3" width="151" height="22" />
  </ContentLoader>
)

export default MyLoader