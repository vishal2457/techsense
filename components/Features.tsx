import {
  createStyles,
  Badge,
  Group,
  Title,
  Text,
  Card,
  SimpleGrid,
  Container,
} from "@mantine/core";
import {
  IconUsers,
  IconTools,
  IconDeviceLaptop,
  IconHelp,
} from "@tabler/icons";

const mockdata = [
  {
    title: "Improved Collaboration with Technical Teams",
    description:
      "Our program helps you bridge the communication gap on the technical front ensuring no inconsistencies in planning. This leads to correct decisions, better teamwork and successful execution of projects",
    icon: IconUsers,
  },
  {
    title: "Practical Knowledge of Tech Applications",
    description:
      "Our program is carefully curated keeping in mind real-life situations that managers from non-tech backgrounds face while handling technical teams",
    icon: IconTools,
  },
  {
    title: "A Self-Paced Course",
    description:
      "Our self-paced learning modules are quick and easy to navigate. So, you can learn anytime and anywhere according to your convenience - be it weekends or  a few hours between meetings",
    icon: IconDeviceLaptop,
  },
  {
    title: "Constant Support and Feedback",
    description:
      "If things don't quite make sense, our experts are always here to help you get through your doubts while providing valuable feedback on your progress",
    icon: IconHelp,
  },
];

const useStyles = createStyles((theme) => ({
  title: {
    fontSize: 34,
    fontWeight: 900,
    [theme.fn.smallerThan("sm")]: {
      fontSize: 24,
    },
  },

  description: {
    maxWidth: 600,
    margin: "auto",

    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  card: {
    border: `1px solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  cardTitle: {
    "&::after": {
      content: '""',
      display: "block",
      backgroundColor: theme.fn.primaryColor(),
      width: 45,
      height: 2,
      marginTop: theme.spacing.sm,
    },
  },
}));

export function FeaturesCards() {
  const { classes, theme } = useStyles();
  const features = mockdata.map((feature) => (
    <Card
      key={feature.title}
      shadow="md"
      radius="md"
      className={classes.card}
      p="xl"
    >
      <feature.icon size={50} stroke={2} color={theme.fn.primaryColor()} />
      <Text size="lg" weight={500} className={classes.cardTitle} mt="md">
        {feature.title}
      </Text>
      <Text size="sm" color="dimmed" mt="sm">
        {feature.description}
      </Text>
    </Card>
  ));
  return (
    <Container size="lg" py="xl">
      <Group position="center">
        <Badge variant="filled" size="lg">
          What&apos;s in it for you ?
        </Badge>
      </Group>
      <SimpleGrid
        cols={2}
        spacing="xl"
        mt={50}
        breakpoints={[{ maxWidth: "md", cols: 1 }]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
