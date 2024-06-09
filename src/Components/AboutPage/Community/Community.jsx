import React from 'react'
import './Community.css';
import community_involvement_1 from '../../../assets/community/community_1.jpg'
import community_involvement_2 from '../../../assets/community/community_2.jpg'
import community_involvement_3 from '../../../assets/community/community_3.jpg'
import community_involvement_4 from '../../../assets/community/community_4.jpg'

const Community = () => {

   const images = [
      community_involvement_1,
      community_involvement_2,
      community_involvement_3,
      community_involvement_4,
   ];

   return (
      <div className='community-involvement'>
         <div className="community-involvement-desc">
            <h1 className='community-involvement-title sub-title'>Community Involvement</h1>
            <hr className='underline' />
            <p>At Edusity, we are proud of our strong ties to the local community. Through partnerships with local organizations, volunteer initiatives, and community events, our students learn the importance of giving back and making a positive impact on the world around them.</p>
         </div>
         <div className="community-involvement-imgs">
            {images.map((imageUrl, index) => (
               <div key={index}>
                  <img src={imageUrl} alt="" />
               </div>
            ))}
         </div>
      </div>
   )
}

export default Community
