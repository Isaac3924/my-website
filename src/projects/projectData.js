import tldrMainPic from '../pictures/tldr_home.png';
import tldrInputPic from '../pictures/tldr_input.png';
import tldrOutputPic from '../pictures/tldr_output.png';
import whetherSweaterMainPic from '../pictures/whether_sweater.png';
import whetherSweaterForecastPic from '../pictures/whether_sweater_forecast_facade.png'
import whetherSweaterRoadtripPic from '../pictures/whether_sweater_roadtrip_serializer.png'

const projects = {
  "tldr":{
    id: 'tldr',
    title: 'TL:DR',
    mainImage: tldrMainPic,
    description: [
      "A web platform that helps users understand the terms and conditions of services a user might sign up for in a simpler way. Instead of having to read through long and complex legal documents, a user can copy and paste them into the platform and select the things they're most concerned about i.e. privacy or recurring payments.",
      "The platform will then show the user a summary of how those specific concerns might apply, with an overall score that helps the user see how a legal document rates in comparison to their selected concens. The application also gives suggestions for what the user can do if they don't like what they see.",
      "The goal of this application was to make it easier for others to understand what they're agreeing to when they use a service, and help users protect their rights."
    ],
    techStack: ['Python', 'TypeScript', 'CSS', 'HTML'],
    year: '2023',
    team: [
      { name: 'Axel De La Guardia', link: 'https://www.linkedin.com/in/axeldelaguardia/'},
      { name: 'Elle Majors', link: 'https://www.linkedin.com/in/ellemajors/'},
      { name: 'Hady Matar', link: 'https://www.linkedin.com/in/hady-emmanuel-matar/'},
      { name: 'Conner Van Loan', link: 'https://www.linkedin.com/in/conner-van-loan/'},
      { name: 'Jesus Borjas', link: 'https://www.linkedin.com/in/jesus-borjas-6589b920a/'},
      { name: 'Chrissy Cooper', link: 'https://www.linkedin.com/in/christinercooper/'},
      { name: 'Jason Kirchman', link: 'https://www.linkedin.com/in/jason-kirchman/'},
    ],
    links: [
      {site: 'https://tldr-tos.vercel.app/', text: 'Visit Website'},
      {site: 'https://github.com/TooLong-DidntRead/tldr_api', text: 'Visit Repository'},
    ],
    media: [
      { title: 'Terms of Service Input', image: tldrInputPic},
      { title: 'Summarized Output', image: tldrOutputPic}
    ],
  },
  "whether-sweater":{
    id: 'whether-sweater',
    title: 'Whether Sweater',
    mainImage: whetherSweaterMainPic,
    description: [
      "Whether Sweater is an application that aggregates data from multiple external APIs and exposes them through a JSON API with CRUD functionality.",
      "It utilizes two third-party APIs Mapquest and the National Weather Service APIs to find the coordinates and travel times from one location to another and the current weather/forecast in locations via coordinates.",
      "The application also has a relational database to register users and provide a level of security via authorization."
    ],
    techStack: ['Git', 'GitHub', 'HTML5', 'PostgreSQL', 'Ruby on Rails'],
    year: '2024',
    team: [
    ],
    links: [
      {site: 'https://github.com/Isaac3924/2211_Whether-Sweater-Final-Project', text: 'Visit Repository'},
    ],
    media: [
      { title: 'Forecast Facade', image: whetherSweaterForecastPic},
      { title: 'Roadtrip Serializer', image: whetherSweaterRoadtripPic}
    ],
  },
  
};

export default projects;