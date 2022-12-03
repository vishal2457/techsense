import { createStyles, Container, Text, Button, Group, SimpleGrid } from '@mantine/core';
import { IconScale, IconLifebuoy, IconRocket } from '@tabler/icons';
import { GetInTouch } from '../components/Contact';
import { FeaturesCards } from '../components/Features';
import { HeaderSimple } from '../components/Navbar';
import ProgramOutline from '../components/ProgramOutline';
import { SectionTitle } from '../components/SectionTitle/SectionTitle';

const BREAKPOINT = '@media (max-width: 755px)';

function getGradient(theme:any, variant: 'text' | 'bg') {
  if (variant === 'text') {
    return `linear-gradient(52deg, ${theme.colors.blue[theme.colorScheme === 'dark' ? 5 : 7]} 3%, ${
      theme.colors.cyan[theme.colorScheme === 'dark' ? 4 : 5]
    } 97%)`;
  }

  return `linear-gradient(52deg, ${theme.colors.blue[theme.colorScheme === 'dark' ? 7 : 7]} 3%, ${
    theme.colors.cyan[theme.colorScheme === 'dark' ? 7 : 5]
  } 97%)`;
}

const FEATURES_DATA = [
  {
    icon: IconScale,
    title: 'On-demand videos',
    description: 'All packages have MIT license, you can use Mantine in any project',
  },

  {
    icon: IconLifebuoy,
    title: 'Quick Technical readings',
    description: 'Build type safe applications, all components and hooks export types',
  },

  {
    icon: IconRocket,
    title: 'Doubt-solving support / QnA',
    description: 'Mantine supports all modern frameworks: Next.js, Remix, etc.',
  },
  {
    icon: IconRocket,
    title: 'Easy to understand',
    description: 'Mantine supports all modern frameworks: Next.js, Remix, etc.',
  },
];

const useStyles = createStyles((theme) => ({
  wrapper: {
    position: 'relative',
    boxSizing: 'border-box',
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.white,
  },

  inner: {
    position: 'relative',
    paddingBottom: 120,

    [BREAKPOINT]: {
      paddingBottom: 80,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: 62,
    fontWeight: 900,
    lineHeight: 1.1,
    margin: 0,
    padding: 0,
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,

    [BREAKPOINT]: {
      fontSize: 42,
      lineHeight: 1.2,
    },
  },

  description: {
    marginTop: theme.spacing.xl,
    fontSize: 24,

    [BREAKPOINT]: {
      fontSize: 18,
    },
  },

  controls: {
    marginTop: theme.spacing.xl * 2,

    [BREAKPOINT]: {
      marginTop: theme.spacing.xl,
    },
  },

  control: {
    height: 54,
    paddingLeft: 38,
    paddingRight: 38,

    [BREAKPOINT]: {
      height: 54,
      paddingLeft: 18,
      paddingRight: 18,
      flex: 1,
    },
  },
  feature: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',

    '@media (max-width: 800px)': {
      flexDirection: 'row',
    },
  },

  featureBody: {
    marginTop: theme.spacing.xs,

    '@media (max-width: 800px)': {
      marginTop: 0,
      marginLeft: theme.spacing.lg,
    },
  },

  featureTitle: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
  },

  featureIcon: {
    color: theme.white,
    borderRadius: theme.radius.md,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 50,
    height: 50,
    backgroundImage: getGradient(theme, 'bg'),

    '& svg': {
      display: 'block',
    },
  },
}));

const HeroTitle = () => {
  const { classes } = useStyles();


  const features = FEATURES_DATA.map((feature) => (
    <div className={classes.feature} key={feature.title}>
      <div className={classes.featureIcon}>
        <feature.icon size={28} stroke={1.5} />
      </div>

      <div className={classes.featureBody}>
        <Text size="sm" weight={350} className={classes.featureTitle}>
          {feature.title}
        </Text>
      </div>
    </div>
  ));

  return (
    <div className={classes.wrapper}>
        <HeaderSimple />

      <Container size={950} className={classes.inner}>
        <h1 className={classes.title}>
         Speak tech{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            fluently
          </Text>{' '}
        </h1>

        <Text className={classes.description} color="dimmed">
        Learn the technical details of application workflow and communicate effectively with developers
        </Text>
        <SimpleGrid
          cols={4}
          sx={{ maxWidth: 900 }}
          spacing={30}
          mt={40}
          breakpoints={[{ maxWidth: 800, cols: 1 }]}
        >
          {features}
        </SimpleGrid>
        <Group className={classes.controls}>
          <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
          >
            Register now
          </Button>
        </Group>
       
      </Container>
      <FeaturesCards />
      <ProgramOutline />
      <GetInTouch />
    </div>
  );
}

export default HeroTitle