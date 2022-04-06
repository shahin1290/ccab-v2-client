import { Box } from "@mui/system";
import React from "react";
import CustomServiceCard from "./CustomServiceCard";
import service3 from "../../../public/career-support.png";
import service1 from "../../../public/service1.png";
import service2 from "../../../public/service2.png";

const moileDevelopment = {
  title: "Mobile Development",
  paragraphs: [
    {
      id: 1,
      content:
        "Mobile application development is the process to making software for smartphones and digital assistants, most commonly for Android and iOS. The software can be preinstalled on the device.",
    },
    {
      id: 2,
      content:
        "Mobile app development is rapidly growing. From retail, telecommunications and e-commerce to insurance, healthcare and government, organizations across industries must meet user expectations for real-time, convenient ways to conduct transactions and access information. Today, mobile devices-and the mobile applications that unlock their value-are the most popular way for people and businesses to connect to the internet. To stay relevant, responsive and successful, organizations need to develop the mobile applications that their customers, partners and employees demand.",
    },
  ],
  imageUrl: "/career-support.png",
};

const webDevelopment = {
  title: "Web Development",
  paragraphs: [
    {
      id: 1,
      content:
        "Web development refers in general to the tasks associated with developing websites for hosting via intranet or internet. The web development process includes web design, web content development, client-side/server-side scripting and network security configuration, among other tasks.",
    },
    {
      id: 2,
      content:
        "In a broader sense, web development encompasses all the actions, updates, and operations required to build, maintain and manage a website to ensure its performance, user experience, and speed are optimal.",
    },
    {
      id: 3,
      content:
        "It might also, but not necessarily, include all those strategic actions needed to ensure its proper ranking on search engine results. Usually, those tasks pertain to a different specialization, namely search engine optimization (SEO).",
    },
  ],
  imageUrl: "/career-support.png",
};

const designSolutions = {
  title: "Design Solutions",
  paragraphs: [
    {
      id: 1,
      content:
        "Design Service is a process where designers create sustainable solutions and optimal experiences for both customers in unique contexts and any service providers involved. Designers break services into sections and adapt fine tuned solutions to suit all users' needs in context-based on actors, location and other factors. In service design, you work within a broad scope including user experience (UX) design and customer experience (CX) design. To design for everyone concerned.",
    },
    {
      id: 2,
      content:
        "The Design Solution Definition Process is used to translate the high-level requirements derived from the stakeholder expectations and the outputs of the Logical Decomposition Process into a design solution.",
    },
  ],
  imageUrl: "/career-support.png",
};

const hostingSolutions = {
  title: "Cloud/Hosting Solutions",
  paragraphs: [
    {
      id: 1,
      content:
        "Cloud hosting makes applications and websites accessible using cloud resources. Unlike traditional hosting, solutions are not deployed on a single server. Instead, a network of connected virtual and physical cloud servers hosts the application or website, ensuring greater flexibility and scalability.",
    },
    {
      id: 2,
      content:
        "Organizations today have enough experience with cloud hosting to prefer it to traditionally deploying their applications. It is not only quicker to deploy on cloud, but it also ensures the scalability, availability and performance needs of the deployment.",
    },
  ],
  imageUrl: "/career-support.png",
};

const shopifySolutions = {
  title: "Shopify Solutions",
  paragraphs: [
    {
      id: 1,
      content:
        "Shopify ecommerce solution comes with a monthly fee, but comes with peace of mind knowing your customers are shopping in a safe and secure space. If you want to manage inventory for your online and physical store presence, Shopify's ecommerce solution can be further configured with a point of sale system to manage both inventories seamlessly.",
    },
    {
      id: 2,
      content:
        "If you want to maintain an online store presence, and also operate a blog or other basic pages to promote your business, the Shopify ecommerce solution is set-up to handle that too!",
    },
  ],
  imageUrl: "/career-support.png",
};

const wordpressSolutions = {
  title: "Wordpress Solutions",
  paragraphs: [
    {
      id: 1,
      content:
        "WordPress is the simplest, most popular way to create your own website or blog. In fact, WordPress powers over 43.3% of all the websites on the Internet. Yes - more than one in four websites that you visit are likely powered by WordPress.",
    },
    {
      id: 2,
      content:
        "On a slightly more technical level, WordPress is an open-source content management system licensed under GPLv2, which means that anyone can use or modify the WordPress software for free. A content management system is basically a tool that makes it easy to manage important aspects of your website - like content - without needing to know anything about programming.",
    },
  ],
  imageUrl: "/career-support.png",
};

const Services = () => {
  return (
    <Box>
      <CustomServiceCard
        title={moileDevelopment.title}
        paragraphs={moileDevelopment.paragraphs}
        imageUrl={service1}
        bgcolor="#fff"
      />
      <CustomServiceCard
        title={webDevelopment.title}
        paragraphs={webDevelopment.paragraphs}
        imageUrl={service2}
        bgcolor="#F8F9FB"
      />
      <CustomServiceCard
        title={designSolutions.title}
        paragraphs={designSolutions.paragraphs}
        imageUrl={service3}
        bgcolor="#fff"
      />

      <CustomServiceCard
        title={hostingSolutions.title}
        paragraphs={hostingSolutions.paragraphs}
        imageUrl={service1}
        bgcolor="#F8F9FB"
      />

      <CustomServiceCard
        title={shopifySolutions.title}
        paragraphs={shopifySolutions.paragraphs}
        imageUrl={service2}
        bgcolor="#fff"
      />

      <CustomServiceCard
        title={wordpressSolutions.title}
        paragraphs={wordpressSolutions.paragraphs}
        imageUrl={service3}
        bgcolor="#F8F9FB"
      />
    </Box>
  );
};

export default Services;
