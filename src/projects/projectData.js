import tldrMainPic from '../pictures/tldr_home.png';
import tldrInputPic from '../pictures/tldr_input.png';
import tldrOutputPic from '../pictures/tldr_output.png';
import whetherSweaterMainPic from '../pictures/whether_sweater.png';
import whetherSweaterForecastPic from '../pictures/whether_sweater_forecast_facade.png'
import whetherSweaterRoadtripPic from '../pictures/whether_sweater_roadtrip_serializer.png'
import teaSubsMainPic from '../pictures/tea_subs.png'
import teaSubsSubcriptionController from '../pictures/tea_subs_subscriptions_controller.png'
import teaSubsSchema from '../pictures/tea_subs_schema.png'
import viewingPartyMainPic from '../pictures/viewing_party.png'
import viewingPartyUserController from '../pictures/viewing_party_user_controller.png'
import viewingPartyUserFacade from '../pictures/viewing_party_user_facade.png'
import littleEstyShopMainPic from '../pictures/little_esty_shop.png'
import littleEstyShopInvoiceModel from '../pictures/little_esty_shop_invoice_model.png'
import littleEstyShopMerchantsController from '../pictures/little_esty_shop_merchants_controller.png'

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
  "tea-subs":{
    id: 'tea-subs',
    title: 'Tea Subs API',
    mainImage: teaSubsMainPic,
    description: [
      "tea_subs_api is a back end application api that manages the subscriptions statusses of customers and tea flavors within said subscriptions.",
      "It currently holds three endpoints that allows a front end user to call on them with provided information and see a proper return."
    ],
    techStack: ['Git', 'GitHub', 'PostgreSQL', 'Ruby on Rails'],
    year: '2023',
    team: [
    ],
    links: [
      {site: 'https://github.com/Isaac3924/tea_subs_api', text: 'Visit Repository'},
    ],
    media: [
      { title: 'Tea Subs Subscription Controller', image: teaSubsSubcriptionController},
      { title: 'Tea Subs Schema', image: teaSubsSchema}
    ],
  },
  "viewing-party":{
    id: 'viewing-party',
    title: 'Viewing Party',
    mainImage: viewingPartyMainPic,
    description: [
      "Viewing Party Lite is an application in which users can explore movie options and create a viewing party event for themselves and other users of the application.",
      "It holda a relational database for users to create their own accounts to show what movies they enjoy and schedule events with other users to watch them.",
      "It utilizes user authentication as a security measure to allow certain permissions in the application."
    ],
    techStack: ['Git', 'GitHub', 'SQL', 'Ruby on Rails'],
    year: '2023',
    team: [
      { name: 'Kara Jones-Hoffman', link: 'https://www.linkedin.com/in/81012911-91208/'}
    ],
    links: [
      {site: 'https://github.com/Isaac3924/viewing_party_lite_7?tab=readme-ov-file', text: 'Visit Repository'},
    ],
    media: [
      { title: 'Viewing Party User Contoller', image: viewingPartyUserController},
      { title: 'Viewing Party User Facade', image: viewingPartyUserFacade}
    ],
  },
  "little-esty-shop":{
    id: 'little-esty-shop',
    title: 'Little Esty Shop',
    mainImage: littleEstyShopMainPic,
    description: [
      "A fictitious e-commerce platform where merchants and admins can manage inventory and fulfill customer invoices.",
      "This application is meant to be an MVP for a small business that allows it to manage their customer data and web page.",
      "Contains a number of relational databases and interacts with them via active record queries to extract specifc information from them."
    ],
    techStack: ['Git', 'GitHub', 'SQL', 'Ruby on Rails'],
    year: '2023',
    team: [
      { name: 'Antonio King Hunt', link: 'https://www.linkedin.com/in/antoniokinghunt-software-developer/'},
      { name: 'Bobby Luly', link: 'https://www.linkedin.com/in/bobby-luly-217653260/'},
      { name: 'Jade Stewart', link: 'https://www.linkedin.com/in/jadestewart-software-engineer/'},
    ],
    links: [
      {site: 'https://github.com/4D-Coder/little-esty-shop', text: 'Visit Repository'},
    ],
    media: [
      { title: 'Little Esty Shop Invoice Model', image: littleEstyShopInvoiceModel},
      { title: 'Little Esty Shop Merchants Controller', image: littleEstyShopMerchantsController}
    ],
  },
};

export default projects;