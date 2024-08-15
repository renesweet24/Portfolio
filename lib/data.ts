import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import bittexsubnet from "@/public/bittex-subnet.png"
import blockchaininsights from "@/public/blockchain-insights.png"
import dataexchange from "@/public/dataexchange.webp"
import weightloss from "@/public/weightloss.webp"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Python Engineer | Subnet Developer",
    location: "BITTENSOR - San Francisco, CA",
    description: "Led development of Bittex on the Bittensor ecosystem, enhancing blockchain accessibility with LLM-based solutions and implementing algorithms to improve efficiency and security.",
    icon: React.createElement(CgWorkAlt),
    date: "December 2023 - Present"
  },
  {
    title: "Python Full Stack Developer",
    location: "Adapt Mobility Inc - San Francisco, CA",
    description: "Built a high-volume telematics data exchange platform on AWS and introduced a carbon emission analytics model using AWS Sagemaker, enhancing industry efficiency.",
    icon: React.createElement(CgWorkAlt),
    date: "September 2022 - November 2023"
  },
  {
    title: "Full Stack Next.js Developer",
    location: "Persona Doctors - Bethesda, MD",
    description: "Architected an interactive weight loss program platform with real-time updates and optimized customer support with a chatbot, improving user engagement.",
    icon: React.createElement(CgWorkAlt),
    date: "October 2021 - September 2022"
  },
  {
    title: "Backend Lead",
    location: "Tivix - Los Angeles, CA",
    description: "Streamlined healthcare processes with Django applications and managed agile team operations, significantly reducing system bottlenecks and improving performance.",
    icon: React.createElement(CgWorkAlt),
    date: "February 2020 - October 2021"
  },
  {
    title: "Python Developer II",
    location: "Tivix - Los Angeles, CA",
    description: "Developed interactive forms for email marketing campaigns and optimized legacy systems, improving system response times and increasing revenue.",
    icon: React.createElement(CgWorkAlt),
    date: "April 2018 - February 2020"
  },
  {
    title: "Python Developer",
    location: "Tivix - Los Angeles, CA",
    description: "Automated data extraction tasks for healthcare systems using Selenium, enhancing data accuracy and efficiency.",
    icon: React.createElement(CgWorkAlt),
    date: "January 2016 - April 2018"
  },
  {
    title: "Summer Intern",
    location: "Tivix - Los Angeles, CA",
    description: "Assisted in data cleaning tasks as an intern, contributing to data quality improvements.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2015 - August 2015"
  },
] as const;

export const projectsData = [
  {
    title: "Bittex Subnet",
    description: "Bittex is a decentralized exchange (DEX) on the Bittensor network, offering competitive exchange rates through atomic swaps. Miners deposit funds for each swap, reducing impermanent loss and optimizing liquidity. The platform features a competitive bidding process for transactions, enhancing efficiency and exchange rates.",
    imageUrl: bittexsubnet,
    githubLink: "https://github.com/renesweet24/bittex-subnet/",
  },
  {
    title: "Bittensor Blockchain Insights Subnet",
    description: "The Blockchain Insights Subnet transforms raw blockchain data into structured graph models, offering insights into transactions, DeFi, and NFTs. Features include data analytics through a desktop app, customizable queries, and integration with Bitcoin-like and EVM-compatible blockchains.",
    imageUrl: blockchaininsights,
    githubLink: "https://github.com/renesweet24/sn15-blockchain-data-subnet/",
  },
  {
    title: "Telematics Data Exchange Platform",
    description: "Developed a telematics data exchange platform on AWS to manage 300k+ daily raw data. The platform emphasizes user-friendly design and efficient data presentation, resulting in a 25% increase in data processing efficiency. Integrated AWS services such as S3, Lambda, and EC2 for optimal performance and scalability.",
    imageUrl: dataexchange,
  },
  {
    title: "Interactive Weight Loss Platform",
    description: "Architected an interactive platform for individual weight loss programs using Next.js and TypeScript. The platform offers real-time updates and personalized recommendations, reducing program selection time by 30%. It includes an enrollment and plan customization system powered by Redux Toolkit.",
    imageUrl: weightloss,
  },
] as const;

export const skillsData = [
  {
    name: "Python",
    icon: "python",
  },
  {
    name: "Django",
    icon: "django",
  },
  {
    name: "FastAPI",
    icon: "fastAPI",
  },
  {
    name: "React",
    icon: "react",
  },
  {
    name: "Next.js",
    icon: "next",
  },
  {
    name: "Redux",
    icon: "redux",
  },
  {
    name: "Pandas",
    icon: "pandas",
  },
  {
    name: "TensorFlow",
    icon: "tensorFlow",
  },
  {
    name: "PyTorch",
    icon: "pyTorch",
  },
  {
    name: "Numpy",
    icon: "numpy",
  },
  {
    name: "Selenium",
    icon: "selenium",
  },
  {
    name: "Git",
    icon: "git",
  },
  {
    name: "Bitbucket",
    icon: "bitbucket",
  },
  {
    name: "Jira",
    icon: "jira",
  },
  {
    name: "GraphQL",
    icon: "graphQL",
  },
  {
    name: "PostgreSQL",
    icon: "postgreSQL",
  },
  {
    name: "MongoDB",
    icon: "mongoDB",
  },
  {
    name: "AWS",
    icon: "aws",
  },
  {
    name: "Azure",
    icon: "azure",
  },
] as const;
