import {
  AdminPanelLogo,
  AnalyticsLogo,
  AndroidLogo,
  AppleLogo,
  ARLogo,
  BasicLogo,
  BookingLogo,
  CalenderLogo,
  CloudLogo,
  CMSLogo,
  EmailLogo,
  FinalLogo,
  FormLogo,
  HardwareLogo,
  HealthCareLogo,
  LargeLogo,
  MapsLogo,
  MediaContentLogo,
  MediumLogo,
  MessagingLogo,
  MultilingualLogo,
  MVPLogo,
  PaymentLogo,
  RatingsLogo,
  ResearchLogo,
  SearchLogo,
  SecurityLogo,
  ShoppingLogo,
  SmallLogo,
  SocialSharingLogo,
  ThirdPartyLogo,
  UIUXLogo,
  UserAccessLogo,
  WebLogo,
} from "../../../../images/svg/ServiceIcons";

const Section1 = [
  {
    title: "Ios Application",
    iconUrl: "/svgImages/ServiceCardIcons/applelogo.svg",
    description: "This is a brief summary about the services",
  },
  {
    title: "Android Applications",
    iconUrl: "/svgImages/ServiceCardIcons/androidLogo.svg",
  },
  { title: "Website", iconUrl: "/svgImages/ServiceCardIcons/webLogo.svg" },
  { title: "UI / UX", Icon: <UIUXLogo /> },
  { title: "Cloud", Icon: <CloudLogo /> },
  { title: "Research", Icon: <ResearchLogo /> },
];

const Section2 = [
  { title: "Small", Icon: <SmallLogo /> },
  { title: "Medium", Icon: <MediumLogo /> },
  { title: "Large", Icon: <LargeLogo /> },
  { title: "MVP", Icon: <MVPLogo /> },
  { title: "Basic", Icon: <BasicLogo /> },
  { title: "Final", Icon: <FinalLogo /> },
];

const Section3 = [
  { title: "User Access", Icon: <UserAccessLogo /> },
  { title: "Media Content", Icon: <MediaContentLogo /> },
  { title: "Ratings", Icon: <RatingsLogo /> },
  { title: "Search", Icon: <SearchLogo /> },
  { title: "Calendar", Icon: <CalenderLogo /> },
  { title: "Booking", Icon: <BookingLogo /> },
];

const Section4 = [
  { title: "Shopping", Icon: <ShoppingLogo /> },
  { title: "Payments", Icon: <PaymentLogo /> },
  { title: "Messaging", Icon: <MessagingLogo /> },
  { title: "Forms", Icon: <FormLogo /> },
  { title: "Social Sharing", Icon: <SocialSharingLogo /> },
  { title: "Email / Notifications", Icon: <EmailLogo /> },
];

const Section5 = [
  { title: "Hardware Sensors", Icon: <HardwareLogo /> },
  { title: "Healthcare", Icon: <HealthCareLogo /> },
  { title: "Maps", Icon: <MapsLogo /> },
  { title: "Admin Panel", Icon: <AdminPanelLogo /> },
  { title: "Analytics", Icon: <AnalyticsLogo /> },
  { title: "3rd party integration", Icon: <ThirdPartyLogo /> },
];

const Section6 = [
  { title: "AR / VR / AI", Icon: <ARLogo /> },
  { title: "Security", Icon: <SecurityLogo /> },
  { title: "CNS", Icon: <CMSLogo /> },
  { title: "Multilingual", Icon: <MultilingualLogo /> },
];

const AllSections = [
  Section1,
  Section2,
  Section3,
  Section4,
  Section5,
  Section6,
];

export default AllSections;
