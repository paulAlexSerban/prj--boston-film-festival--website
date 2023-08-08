# Boston Film Festival
> OpenClassrooms.com - Front End Developer Path / Project 3 - Boston Film Festival
> Website prototype and proof of concept promotional website for the Watch it Outside - Boston Edition 2024
> [Live Demo](https://paulalexserban.github.io/prj--boston-film-festival--website)

## Project Brief

### Summary

A website that shows that films can appeal to all audiences of all ages, ensuring also advertisements and publications reflect the same ideal.
**Watch It Outside Events Co.** is an organization founded by Clara Dunn, their main activity is organizing outdoor film festivals that show that films can appeal to audiences of all ages.
The goals of the website are:

-   communicate online that the event shows that films can appeal to audiences of all ages
-   communicate the shows on a calendar and take reservations
-   make it clear that shows are for free but the capacity of the venue is 1500 pax maximum

### Goal Details

The primary goal of the website is to promote the outdoor film festivals organized by Watch It Outside Events Co. and to attract a diverse audience to the events. To achieve this goal, the website will provide the following features:

-   **A calendar of upcoming events**: The website will include a calendar that displays the dates and times of upcoming outdoor film festivals. This will make it easy for users to find events that fit their schedule and interests.
-   **Reservations**: The website will allow users to make reservations for the outdoor film festivals. This will help to ensure that users can secure a spot at the events and that the events do not exceed the maximum capacity of 1500 pax.
-   **Film list**: The website will display a list of the films that will be shown at the outdoor film festivals. This will provide users with an idea of the types of films that will be shown and may help to attract users who are interested in specific genres or themes.
-   **News section**: The website will include a news section that will provide users with the latest updates and information about the outdoor film festivals. This will help to keep users informed and engaged with the events.
-   **Social media links**: The website will include links to Watch It Outside Events Co.'s social media accounts. This will allow users to follow the events on social media and stay up-to-date with the latest news and updates.
-   **Registration form**: The website will include a registration form that users can use to sign up for the events. This will make it easy for users to register for the events and receive email notifications about upcoming events.
-   **Links to Boston news and Boston Public Gardens**: The website will include links to Boston news and Boston Public Gardens in the footer. This will help to promote the events to a local audience and provide users with additional information about the events and the location.

Overall, the goal of the website is to provide users with a user-friendly and informative platform that promotes the outdoor film festivals and attracts a diverse audience to the events.

### Target Audience

The target audience for the website is broad and diverse. It includes people of all ages, cultures, backgrounds, and interests who enjoy watching movies and attending outdoor events. The target audience may include families, couples, groups of friends, and individuals who are looking for entertainment options in their local area.

The target audience may have different reasons for attending the outdoor film festivals. Some may be interested in watching classic films, while others may be interested in seeing the latest releases. Some may be looking for a fun family outing, while others may be interested in meeting new people and socializing with like-minded individuals.

The website will be designed to appeal to this diverse audience by providing a user-friendly interface that is easy to navigate and understand. The website will also be designed to showcase the diversity of films and events, and to emphasize that movies are for everyone, regardless of age, background, or interests.

### Promise

Watch It Outside Events Co. believes that movies are for everyone, no matter their age, background, or concerns. Our outdoor film festivals are designed to showcase a diverse selection of films that appeal to all audiences, with the goal of bringing people together to enjoy the magic of the movies under the stars.

Our promise is to continue to curate events that promote inclusivity and celebrate diversity, and to create a welcoming and accessible space where everyone feels comfortable and at home. We believe that film has the power to inspire, entertain, and educate, and we're committed to sharing that experience with as many people as possible. So join us under the stars, and let's make some movie magic together!

## Architecture

The architecture of the website will follow a JAMStack approach. It will consist of a client-side user interface that communicates with a server-side API to fetch data and render pages. The website will be built using HTML for markup and templating, CSS for styling, and JavaScript for interactivity. Handlebars will be used as the templating language to generate HTML.

The website will be hosted on GitHub Pages, which will serve static HTML, CSS, and JavaScript files. The server-side API will be built using JavaScript and Node.js, which will be responsible for fetching data from the database and serving it to the client. The API will be deployed to a serverless architecture using AWS Lambda and API Gateway.

The client-side and server-side will communicate using RESTful API endpoints. The API will be responsible for handling CRUD operations for the events, reservations, and film list prototypes. The API will also be responsible for sending emails to users who register for events.

## Infrastructure

The infrastructure for the website will be hosted on the cloud. The website will be deployed on GitHub Pages, which will serve the static assets for the client-side. The server-side API will be deployed to AWS Lambda and API Gateway. AWS Lambda provides a serverless architecture that will help to scale the API based on demand. API Gateway will be used to manage the API endpoints and handle the authentication and authorization for the API.

The data for the website will be stored in a cloud-based database. MongoDB will be used as the NoSQL database to store the events, reservations, and film list prototypes. The data will be accessed using Mongoose, which is an Object Data Modeling (ODM) library for MongoDB.

The website will also use third-party services for email notifications, social media links, and Boston news and Boston Public Gardens links.

## Tech Stack

-   **Markup and Templating**: HTML, Handlebars
-   **Styles and Layout**: CSS, Sass/Scss, Bootstrap
-   **User Experience**: JavaScript
-   **CI/CD**: Git, Github, Github Actions
-   **Hosting**: GitHub Pages
-   **Rendering**: JAMStack and Server Side Generation with Webpack

## System Design

The website will be designed to be fully responsive to ensure that it can be accessed from any device. The website will use a mobile-first approach to ensure that the website is optimized for mobile devices.

The user interface of the website will be designed using CSS, Sass/Scss, and Bootstrap. The website will use a modern design with a clean and minimalistic look. The navigation will be simple and easy to use, and it will include links to social media, Boston news, and Boston Public Gardens.

The website will have a news section that will display the latest news and updates from Watch It Outside Events Co. The film list prototype will display the films that will be shown at the outdoor film festivals. The registration form prototype will allow users to register for the events and receive email notifications.

The website will be optimized for SEO, and it will include meta tags, descriptions, and keywords. The website will also be optimized for performance, and it will use techniques like lazy loading, caching, and minification to ensure that it loads fast.

## Post-MVP Improvements

### Functional Improvements:

-   **User Accounts**: Implement user accounts to allow users to save their preferences and easily make reservations for events.
-   **Online Payment**: Enable users to make payments online to reserve their spot at events, as well as purchase concessions or merchandise.
-   **Film Reviews**: Allow users to submit reviews and ratings for the films they've seen at the outdoor film festivals, which can help attract more users and build a community around the events.
-   **Event Recommendations**: Use data from user accounts and event attendance to provide event recommendations to users based on their preferences and attendance history.
-   **Mobile App**: Create a mobile app version of the website that allows users to access event information, make reservations, and receive notifications.
-   **Interactive Map**: Implement an interactive map that displays the event location and nearby points of interest, such as restaurants or parking facilities.
-   **Social Media Integration**: Integrate the website with social media platforms such as Facebook, Twitter, and Instagram to allow users to share event information and invite their friends to attend.

### Non-Functional Improvements:

-   **Website Speed**: Optimize the website to load quickly and provide a seamless user experience.
-   **Accessibility**: Ensure that the website is accessible to users with disabilities by providing features such as alt text for images, keyboard navigation, and captioning for videos.
-   **Security**: Implement security measures such as SSL certificates, firewalls, and secure authentication to protect user data and prevent unauthorized access.
-   **Scalability**: Design the website with scalability in mind, so that it can handle increased traffic and demand as the events grow in popularity.
-   **Performance Monitoring**: Implement performance monitoring tools to track website performance metrics such as page load time, server response time, and error rates, and use this data to identify and address any performance issues.
-   **SEO**: Optimize the website for search engines by using relevant keywords and meta tags, and ensuring that the website structure is search engine friendly.
-   **Usability Testing**: Conduct usability testing with users to identify any issues or areas for improvement in the website design and functionality.

## Documentation following the RADIO framework

### Requirements

#### Functional Requirements

-   The website shall display a list of film categories with links to respective pages for each category.
-   Each category page shall display a list of films that belong to that category.
-   The website shall have a search bar that allows users to search for films by title or category.
-   Each film detail page shall display the film's title, a brief description, and any relevant details such as cast and crew, ratings, and awards.
-   The website shall allow users to add films to a "watchlist" or mark them as "seen" and save this information for future visits.
-   The website shall display a schedule of film screenings, including dates, times, and locations.
-   The website shall provide a form for users to submit feedback or questions about the festival.

### Non-Functional Requirements

-   The website shall be built using Bootstrap and SCSS to ensure consistency and responsiveness across devices.
-   The website shall use Handlebars to enable dynamic rendering of content and reduce code duplication.
-   The website shall be optimized for performance to ensure fast loading times.
-   The website shall be secure and protect user data, such as watchlist and login information.
-   The website shall be accessible to users with disabilities, including support for screen readers and keyboard navigation.

### Architecture

#### Overview

The website for the film festival will be built using a combination of Bootstrap, SCSS, and Handlebars. The website will be organized as a set of pages, each of which will have a specific layout and content based on the purpose of the page.

#### Front-end Architecture

The front-end architecture will be based on the Bootstrap framework, which provides a set of pre-designed UI components and responsive layouts. The website will be built using HTML, SCSS, and JavaScript, which will be compiled and optimized using a build tool such as Gulp or Webpack.

Handlebars will be used as a templating engine to enable dynamic rendering of content. This will allow us to reuse common HTML components across pages and reduce code duplication. Additionally, we will use a data store, such as a JSON file, to store information about films and categories, which can be accessed and rendered dynamically using Handlebars.

#### Backend Architecture

As this is a promo website, there is no requirement for a backend architecture to handle dynamic data or user interactions. The website will be deployed as a static website and hosted on a CDN, such as Amazon S3 or Netlify.

#### Security and Performance

To ensure security, all assets and data will be served over HTTPS. Additionally, the website will be scanned for common security vulnerabilities using tools such as OWASP ZAP.

To optimize performance, we will use a number of techniques, including:

-   Minimizing asset sizes by compressing images and using minified CSS and JavaScript.
-   Implementing lazy loading for images and other resources to improve initial page load times.
-   Using a content delivery network (CDN) to serve static assets and reduce latency.

### Design

#### Branding

The film festival website will be designed with a modern, minimalist aesthetic that highlights the festival's brand and showcases the films being screened. The color palette will consist of a combination of bold, contrasting colors to create a visually striking website.

#### Layout

The website will use a responsive, mobile-first layout to ensure that it looks good on a wide range of devices, from small mobile phones to large desktop screens. The layout will be built using the Bootstrap grid system, which will allow us to easily create responsive columns and rows.

#### Typography

We will use a combination of serif and sans-serif fonts to create a professional, modern look for the website. The primary font will be a sans-serif font, such as Roboto, while the secondary font will be a serif font, such as Merriweather.

#### Images

The website will prominently feature images of the films being screened, as well as stills from the films themselves. Images will be optimized for the web to minimize load times and ensure that the website loads quickly.

#### Navigation

The website will have a simple, easy-to-use navigation menu that allows users to quickly find the information they need. The navigation menu will be organized by category, with dropdown menus to display subcategories and related pages.

#### User Interface

The user interface will be designed to be intuitive and easy to use, with clear calls to action and intuitive navigation. Forms and other input fields will be designed to be simple and easy to understand, with clear labels and input validation to prevent errors.

#### Accessibility

The website will be designed with accessibility in mind, with support for keyboard navigation and screen readers. We will follow best practices for designing accessible websites, including ensuring that all images have alternative text descriptions and that form fields are labeled correctly.

### Implementation

#### Front-end Implementation

The front-end implementation of the website will be built using a combination of HTML, SCSS, JavaScript, and Handlebars. We will use Gulp as our build tool to compile and optimize the code.

The HTML code will be structured using the Bootstrap grid system to ensure that the website is responsive and looks good on a wide range of devices. We will use Handlebars templates to create reusable HTML components, such as the film category page and film detail page.

The SCSS code will be used to create custom styles for the website, such as the color palette, typography, and layout. We will use the Bootstrap SCSS variables and mixins to customize the Bootstrap styles.

The JavaScript code will be used to create interactive elements on the website, such as the search bar, watchlist feature, and film rating system. We will use jQuery to simplify DOM manipulation and event handling.

#### Backend Implementation

As this is a static website, there is no backend implementation required. However, we will use a JSON file to store information about films and categories, which will be accessed dynamically using Handlebars templates.

#### Testing

We will test the website using a combination of automated and manual testing techniques. Automated tests will include browser compatibility testing using tools such as BrowserStack and cross-browser testing using Selenium. We will also perform manual testing on a range of devices and browsers to ensure that the website looks and functions as intended.

#### Deployment

The website will be deployed as a static website and hosted on a CDN, such as Amazon S3 or Netlify. We will use Gulp to optimize the website for production, including minifying the HTML, CSS, and JavaScript code, compressing images, and configuring caching headers to improve performance.

#### Maintenance and Support

We will provide ongoing maintenance and support for the website, including updating the website to ensure compatibility with new browsers and devices, fixing any bugs or issues that arise, and providing technical support to users.

### Operations

#### Deployment

The website will be deployed as a static website and hosted on a CDN, such as Amazon S3 or Netlify. The deployment process will be automated using a tool such as Jenkins or Travis CI to ensure that the latest version of the code is always deployed to the production environment.

#### Monitoring

We will monitor the website using a combination of automated and manual techniques to ensure that it is running smoothly and to identify and address any issues that arise. Automated monitoring tools such as Pingdom or New Relic can be used to monitor the uptime, response time, and error rate of the website.

#### Backups and Disaster Recovery

We will regularly backup the website to ensure that data and files are not lost due to unforeseen events. Backups will be stored on a remote server or in a cloud-based storage solution such as Amazon S3. Disaster recovery procedures will be put in place to ensure that the website can be quickly restored in the event of a failure or outage.

#### Maintenance and Support

We will provide ongoing maintenance and support for the website, including updating the website to ensure compatibility with new browsers and devices, fixing any bugs or issues that arise, and providing technical support to users. Regular security updates will be performed to ensure that the website is secure and protected from potential vulnerabilities.

#### Performance Optimization

We will continuously monitor and optimize the performance of the website to ensure that it loads quickly and efficiently. Techniques such as minifying code, compressing images, and using a content delivery network (CDN) will be used to reduce load times and improve the user experience.

#### Scalability

The website will be designed and built with scalability in mind to ensure that it can handle increasing levels of traffic and data. Cloud-based hosting solutions such as Amazon Web Services or Microsoft Azure can be used to easily scale the website infrastructure as needed.
