import {
    aishirt,
    financedashboard,
    metoobe
} from "../assets";

const projects = [
    {
      name: "T-Shirt designer with AI",
      description:
        "Design a shirt uploading your own logo or background, or type in a prompt for the AI to generate those for you.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "threejs",
          color: "pink-text-gradient",
        },
        {
          name: "openAI",
          color: "green-text-gradient",
        },
      ],
      image: aishirt,
      source_code_link: "https://github.com/andrejs-is-on-the-computer/AI-tshirt-designer--react-3js",
    },
    {
        name: "YouTube Homepage Clone",
        description:
          "Recreation of YouTube's Homepage.",
        tags: [
          {
            name: "react",
            color: "blue-text-gradient",
          },
          {
            name: "tailwind",
            color: "pink-text-gradient",
          },
        ],
        image: metoobe,
        source_code_link: "https://github.com/andrejs-is-on-the-computer/AI-tshirt-designer--react-3js",
      },
    {
      name: "Finance Dashboard",
      description:
        "Web application that allows a user to view the status of their investments easily, with Social Media metrics provided.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
        {
          name: "tremor",
          color: "green-text-gradient",
        },
      ],
      image: financedashboard,
      source_code_link: "https://github.com/andrejs-is-on-the-computer/react-dash-tremor-tailwind",
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