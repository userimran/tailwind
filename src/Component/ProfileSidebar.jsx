
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import CommigSoon from './CommigSoon';
import Profile from './Profile';
import "./profileSidebar.css"



const ProfileSidebar = () => {


   return (
      <>

         <Tabs className="dashboard_sidebar">
            <TabList>
               <Tab>Profile</Tab>
               <Tab>Post</Tab>
               <Tab>Gallery</Tab>
               <Tab>Todo</Tab>
            </TabList>

            <div className='content_area'>
               <TabPanel>
                  <Profile />
               </TabPanel>

               <TabPanel>
                  <CommigSoon />
               </TabPanel>

               <TabPanel>
                  <CommigSoon />
               </TabPanel>
               <TabPanel>
                  <CommigSoon />
               </TabPanel>

            </div>
         </Tabs>

      </>
   )
}

export default ProfileSidebar