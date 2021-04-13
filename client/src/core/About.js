import React from 'react'
import Base from './Base'
import aboutImage from '../assets/images/about-img.jpg'

const About = () => {
    return (
        <Base title="About Us">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-5">
                        <img src={aboutImage}></img>
                    </div>
                    <div className="col-md-7 pl-5">
                        <h3 className="heading">ABOUT US</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eius aperiam nemo libero earum distinctio optio sapiente delectus fugit enim dolores vel accusantium similique quis cum provident deleniti, fugiat harum rem odit, porro officiis perferendis facere. Nostrum, dolorum eligendi inventore repellat ab, voluptate qui exercitationem eius dolorem id nobis quis, ipsum ex quidem fugit illum? Vel non odit fuga soluta neque nostrum beatae ut cumque nihil, ratione quis aspernatur est a dignissimos voluptas totam unde earum. Quo assumenda saepe quis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eius aperiam nemo libero earum distinctio optio sapiente delectus fugit enim dolores vel accusantium similique quis cum provident deleniti, fugiat harum rem odit, porro officiis perferendis facere. Nostrum, dolorum eligendi inventore repellat ab, voluptate qui exercitationem eius dolorem id nobis quis, ipsum ex quidem fugit illum? Vel non odit fuga soluta neque nostrum beatae ut cumque nihil, ratione quis aspernatur est a dignissimos voluptas totam unde earum. Quo assumenda saepe quis. </p>
                    </div>
                </div>
                <div className="row pb-5">
                    <div className="col-md-12">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur magnam nisi odio? Quod iure accusantium eaque, obcaecati necessitatibus iste minima tenetur harum sint nobis, nemo ut numquam tempore odio quasi? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur magnam nisi odio? Quod iure accusantium eaque, obcaecati necessitatibus iste minima tenetur harum sint nobis, nemo ut numquam tempore odio quasi? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur magnam nisi odio? Quod iure accusantium eaque, obcaecati necessitatibus iste minima tenetur harum sint nobis, nemo ut numquam tempore odio quasi? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur magnam nisi odio? Quod iure accusantium eaque, obcaecati necessitatibus iste minima tenetur.</p>
                    </div>
                </div>
            </div>
        </Base>
    )
}

export default About
