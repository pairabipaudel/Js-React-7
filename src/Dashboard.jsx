import React from 'react'
import './Dashboard.css'

const Dashboard = () => {
  return (
    <div className='dashboard_fullcontainer'>
      <div className="dashboard_container">
                <div className="home_header">
            <div className='title_home'>
                <p>Dashboard</p>
            </div>
            <div className='search_home_container'>
                <input type="text" />
                 <button></button>
            </div>
            <div className='notification_home_container'>
               

                <button></button>
                <button></button>
                <button></button>
            </div>
        </div>

        <div className='dashboard_content_container'>
            <div className='user_profiler_container'>
              <button></button>
                <div className='user_profile_text'>
                  <p>Lorem Lorem</p>
                  <p>Lorem</p>
                </div>

            </div>
            <div className='dashboard_content_button'>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                
            </div>
        </div>

        <div className='dashboard_maincontent_container'>

          <div className='inner_divider_dashboard'>

            <div className='top_button_container'>
              <button className='first_button'></button>
              <button className='second_button'></button>
            </div>

            <div className='bottom_button_container'>
              <button className='third_button'></button>
            </div>
          </div>

          <div className='second_inner_divider_dashboard'>
            <button></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
