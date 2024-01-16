import {
    aishirt,
    financedashboard,
    metoobe,
    website
} from "../assets";

const projects = [
    {
      name: "T-Shirt designer with AI",
      description:
        "Design a shirt uploading your own logo or background, or type in a prompt for the AI to generate those for you.",
      tags: [
        {
          name: "react",
          color: "text-[#e79c25]",
        },
        {
          name: "threejs",
          color: "text-[#c38423]",
        },
        {
          name: "openAI",
          color: "text-[#d3fbd8]",
        },
      ],
      image: aishirt,
      webicon: website,
      source_code_link: "https://github.com/andrejs-is-on-the-computer/AI-tshirt-designer--react-3js",
      live_web_link: 'https://teal-bublanina-352d32.netlify.app/'
    },
    {
        name: "YouTube Homepage Clone",
        description:
          "Recreation of YouTube's Homepage.",
        tags: [
          {
            name: "react",
            color: "text-[#e79c25]",
          },
          {
            name: "tailwind",
            color: "text-[#00c9af]",
          },
        ],
        image: metoobe,
        webicon: website,
        source_code_link: "https://github.com/andrejs-is-on-the-computer/youtube-clone",
        live_web_link: "https://celadon-dragon-007068.netlify.app/"
      },
    {
      name: "Finance Dashboard",
      description:
        "Web application that allows a user to view the status of their investments easily, with Social Media metrics provided.",
      tags: [
        {
          name: "react",
          color: "text-[#e79c25]",
        },
        {
          name: "tailwind",
          color: "text-[#00c9af]",
        },
        {
          name: "tremor",
          color: "text-[#00ac94]",
        },
      ],
      image: financedashboard,
      webicon: website,
      source_code_link: "https://github.com/andrejs-is-on-the-computer/react-dash-tremor-tailwind",
      live_web_link: "https://wondrous-quokka-37b4cb.netlify.app/"
    },
  ];

  const experiences = [
    {
      title: "Software Application Developer",
      company_name: "Lawcadia",
    //   icon: lawcadia,
      iconBg: "#fff",
      date: "January 2017 - March 2020",
      points: [
        "Developing and maintaining the web application using a custom framework and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create a high-quality product.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Senior Application Manager",
      company_name: "Alight",
    //   icon: alight,
      iconBg: "#000000",
      date: "August 2021 - Present",
      points: [
        "Developing and maintaining client's information, workflows and environments.",
        "Ensuring the continuous enhacement and availability of services.",
        "Cooperating with teams to maintain useful interfaces and reports.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];

  export  { experiences, projects };