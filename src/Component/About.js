import React from 'react';
import './About.css'; // Import CSS for styling
import SocialMedia from './SocialMedia';

const About = () => {
    return (
        <div className="about-background">
        <div className="about-card">
            <div className="about-content">
                <h2>About  e - Banking</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed hendrerit eros vel quam efficitur, vel ultrices tellus tincidunt. Nulla facilisi. Sed nec mi bibendum, rutrum sapien in, tristique nulla. Aliquam vel enim at est fringilla molestie. Donec nec ligula enim. Vivamus interdum eget erat nec fermentum. In hac habitasse platea dictumst. Cras sed aliquam neque.
                </p>
                <p>
                    In hac habitasse platea dictumst. Ut sollicitudin purus ac velit euismod, sit amet cursus nisl dignissim. Nulla fringilla urna eget elit dignissim dignissim. Nulla facilisi. Nullam sit amet congue lorem, eget varius magna. In nec augue nec ipsum luctus accumsan. Vivamus sed libero vel ipsum convallis volutpat.
                </p>
                <p>
                    Vivamus vehicula, risus a fermentum convallis, neque sem pretium quam, eu finibus sapien purus ut est. Nullam id scelerisque ex, sed finibus purus. Phasellus tempus ligula ut dui ultricies, vel tincidunt metus elementum. Sed dignissim, arcu a feugiat mattis, odio neque faucibus risus, sit amet luctus elit lorem vel sapien. Integer tincidunt varius justo vel commodo. Integer a libero ac eros rhoncus iaculis.
                </p>
                <SocialMedia/>
            </div>
        </div>
        </div>
    );
};

export default About;
