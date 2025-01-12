import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import appStore from "@/public/App Store.png";
import playstore from "@/public/Play Store.png";
import feature1 from "@/public/roadmap.svg";
import feature2 from "@/public/users-wm.svg";
import feature3 from "@/public/share-91.svg";
import feature4 from "@/public/video_meeting.svg";
import feature5 from "@/public/opening-times.svg";
import feature6 from "@/public/card-favorite.svg";
import experience1 from "@/public/Oval-ex1.svg";
import experience2 from "@/public/Ovalex2.svg";
import experience3 from "@/public/Ovalex3.svg";

export type NavItem = {
  name: string;
  link: string;
};

export const navItems: NavItem[] = [
  { name: "About", link: "/#about" },
  { name: "Pricing", link: "/#pricing" },
  { name: "Features", link: "/#features" },
  { name: "Contact", link: "/#footer" },
];

export const how = [
  { number: 1, title: "Install App", text: "With lots of unique blocks, you can easily build a page easily without any coding. ", bgColor: "#F64B4B" },
  { number: 2, title: "Add Team Members", text: "With lots of unique blocks, you can easily build a page easily without any coding.", bgColor: "#68D585" },
  { number: 3, title: "Start Rolling!", text: "With lots of unique blocks, you can easily build a page easily without any coding.", bgColor: "#473BF0" },
];

export const features = [
  {
    img: feature1,
    title: "Unlimited Projects",
    text: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
  {
    img: feature2,
    title: "Team Management",
    text: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
  {
    img: feature3,
    title: "Testimonial",
    text: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
  {
    img: feature4,
    title: "Video Meetings",
    text: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
  {
    img: feature5,
    title: "Time Tracking",
    text: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
  {
    img: feature6,
    title: "Payment System",
    text: "With lots of unique blocks, you can easily build a page without coding. Build your next landing page.",
  },
];

export const experience = [
  { img: experience1, text: "“OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.”", author: "Isaac Olson" },
  { img: experience2, text: "“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users who want success.”", author: "Barry Young" },
  { img: experience3, text: "“Must have book for all, who want to be Product Designer or Interaction Designer.”", author: "Esther Allison" },
];

export const pricing = [
  {
    plan: "Starter",
    amount: "19",
    duration: "/ mo",
    features1: "Upto 100 Team Member",
    features2: "100 GB Cloud Storage",
    features3: "Unlimited Meetings",
    features4: "Premium Support",
    bgColor: "#161C2D",
  },

  {
    plan: "Unlimited",
    amount: "99",
    duration: "/ mo",
    features1: "Unlimited Team Member",
    features2: "Unlimited Cloud Store",
    features3: "Unlimited Meetings",
    features4: "Premium Support",
    bgColor: "#F74D4D",
  },
];

export const footer = [
  {
    title: "Company",
    links: [
      { name: "About us", link: "/" },
      { name: "Contact us", link: "/" },
      { name: "Careers", link: "/" },
      { name: "Press", link: "/" },
    ],
  },

  {
    title: "Product",
    links: [
      { name: "Features", link: "/" },
      { name: "Pricing", link: "/" },
      { name: "News", link: "/" },
      { name: "Help desk", link: "/" },
      { name: "Support", link: "/" },
    ],
  },

  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", link: "/" },
      { name: "Terms & Conditions", link: "/" },
      { name: "Return Policy", link: "/" },
    ],
  },

  {
    title: "Download Our App",
    images: [
      {
        img: appStore,
      },
      {
        img: playstore,
      },
    ],
  },
];

export const social = [{ image: FaTwitter }, { image: FaFacebook }, { image: FaLinkedin }, { image: FaInstagram }];
