import { Container, List, Text } from "@mantine/core";
import React from "react";
import { SectionTitle } from "./SectionTitle/SectionTitle";
import { Accordion, useMantineTheme } from "@mantine/core";
import {
  IconApps,
  IconBuilding,
  IconClock,
  IconDatabase,
  IconInfinity,
} from "@tabler/icons";

const PROGRAM_OUTLINE = [
  {
    title: "Infrastructure and applications (~5.5h)",
    Icon: IconApps,
    color: "red",
    children: [
      {
        title: "Internet",
        children: [
          { title: "What is the internet?" },
          { title: "Servers and IP address" },
        ],
      },
      {
        title: "Cloud",
        children: [
          { title: "Cloud and cloud computing" },
          { title: "The scaling problem" },
          { title: "Vertical and horizontal scaling" },
          { title: "Deployment" },
        ],
      },
      {
        title: "Frontend vs backend",
        children: [{ title: "Basic difference" }, { title: "Http" }],
      },
      {
        title: "Api's",
        children: [
          { title: "Understanding data interaction via API" },
          { title: "Components of APIs (request, response, headers, body)" },
        ],
      },
      {
        title: "Tech stacks",
        children: [
          { title: "Frameworks and libs" },
          { title: "Web servers" },
          {
            title:
              "libraries, open-source, importing libs, versioning libs, updating libs",
          },
        ],
      },
    ],
  },
  {
    title: "Latency/Speed (~3h)",
    Icon: IconClock,
    color: "blue",
    children: [
      {
        title: "Networking",
        children: [{ title: "Packets, bandwidth" }],
      },
      {
        title: "Process execution",
        children: [
          { title: "Concurrent processing" },
          { title: "How a browser renders a website" },
          { title: "Client-side rendering vs server-side rendering" },
        ],
      },
      {
        title: "Physical limitations",
        children: [
          { title: "Internet cables" },
          { title: "Content delivery network" },
        ],
      },
    ],
  },
  {
    title: "Data and databases (~4h)",
    Icon: IconDatabase,
    color: "green",
    children: [
      {
        title: "SQL and NoSQL",
        children: [
          { title: "Relational databases" },
          { title: "Non-relational DBS" },
          { title: "Where is data stored" },
          { title: "Db communication with API." },
        ],
      },
      {
        title: "Caching",
        children: [
          { title: "Importance of caching" },
          { title: "When and when not" },
        ],
      },
      {
        title: "Security, latency",
      },
      {
        title: "SDK",
      },
    ],
  },
  {
    title: "Architecture and diagrams (~5h)",
    Icon: IconBuilding,
    color: "grape",
    children: [
      {
        title: "Software architecture",
        children: [
          { title: "Monoliths vs microservices" },
          { title: "Centralized vs distributed systems" },
          { title: "Use cases" },
        ],
      },
      {
        title: "Software planning",
        children: [{ title: "Diagrams" }, { title: "Tools" }],
      },
      {
        title: "Load balancing",
        children: [
          { title: "Benefits" },
          { title: "High traffic handling" },
          { title: "Auto Scaling" },
        ],
      },
      {
        title: "Cron jobs",
        children: [{ title: "Schedulers" }, { title: "Batch processing" }],
      },
      {
        title: "Fault-tolerant systems",
        children: [{ title: "Async processing" }],
      },
    ],
  },
  {
    title: "The software development lifecycles. (~5h)",
    Icon: IconInfinity,
    color: "indigo",
    children: [
      {
        title: "Planning",
        children: [{ title: "Planning apps keeping tech in mind" }],
      },
      {
        title: "Technical design",
        children: [
          { title: "Proof of concept" },
          { title: "Design document" },
          { title: "Architecture diagram" },
        ],
      },
      {
        title: "Build",
        children: [
          { title: "Local env, production env, testing env" },
          { title: "Code editors, code repository" },
          { title: "Version control, git" },
          { title: "Cli" },
        ],
      },
      {
        title: "Testing",
        children: [
          { title: "Manual testing and automated testing" },
          { title: "Unit and integration testing" },
        ],
      },
      {
        title: "Deployment",
        children: [
          { title: "Compilation" },
          { title: "Packaging code" },
          { title: "Ci cd  pipelines" },
        ],
      },
      {
        title: "Tech debt",
        children: [{ title: "what ." }, { title: "Solutions to tech debts" }],
      },
    ],
  },
];

function ProgramOutline() {
  const theme = useMantineTheme();
  const getColor = (color: string) => {
    return theme.colors[color][theme.colorScheme === "dark" ? 5 : 7];
  };

  const renderList = (ch: any[], pad = false) => {
    return ch.map((c) => {
      return (
        <List listStyleType="disc" withPadding={pad} key={c.title}>
          <List.Item>{c.title}</List.Item>
          {c.children ? renderList(c.children, true) : null}
        </List>
      );
    });
  };

  const program = PROGRAM_OUTLINE.map((item) => {
    let { Icon } = item;
    return (
      <Accordion.Item value={item.title} key={item.title}>
        <Accordion.Control
          icon={<Icon size={20} color={getColor(item.color)} />}
        >
          <Text weight={550}>{item.title}</Text>
        </Accordion.Control>
        <Accordion.Panel>{renderList(item.children)}</Accordion.Panel>
      </Accordion.Item>
    );
  });

  return (
    <Container size="lg" py="xl" mt="md">
      <SectionTitle>Program outline (~22h)</SectionTitle>
      <Accordion variant="contained">{program}</Accordion>
    </Container>
  );
}

export default ProgramOutline;
