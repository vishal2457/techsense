import {
  createStyles,
  Header,
  Container,
  Group,
  Burger,
  ActionIcon,
  useMantineColorScheme,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconMoonStars, IconSun } from "@tabler/icons";
import Image from "next/image";

const useStyles = createStyles((theme) => ({
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: "100%",
  },

  links: {
    [theme.fn.smallerThan("xs")]: {
      display: "none",
    },
  },

  burger: {
    [theme.fn.largerThan("xs")]: {
      display: "none",
    },
  },

  link: {
    display: "block",
    lineHeight: 1,
    padding: "8px 12px",
    borderRadius: theme.radius.sm,
    textDecoration: "none",
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: "light", color: theme.primaryColor })
        .color,
    },
  },
}));

interface HeaderSimpleProps {
  links: { link: string; label: string }[];
}

export function HeaderSimple() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  //   const [active, setActive] = useState(links[0].link);
  const { classes, cx } = useStyles();

  //   const items = links.map((link) => (
  //     <a
  //       key={link.label}
  //       href={link.link}
  //       className={cx(classes.link, { [classes.linkActive]: active === link.link })}
  //       onClick={(event) => {
  //         event.preventDefault();
  //         setActive(link.link);
  //       }}
  //     >
  //       {link.label}
  //     </a>
  //   ));

  return (
    <Header height={60} mb={80}>
      <Container className={classes.header}>
        <Text
          size="xl"
          variant="gradient"
          gradient={{ from: "blue", to: "cyan" }}
        >
          TECHSENSE
        </Text>
        {/* <Image src={'/logo.jpg'} alt="logo" width={70} height={60} /> */}
        {/* <MantineLogo size={28} /> */}
        {/* <Group spacing={5} className={classes.links}>
          {items}
        </Group> */}

        {/* <Burger opened={opened} onClick={toggle} className={classes.burger} size="sm" /> */}
        <ActionIcon
          onClick={() => toggleColorScheme()}
          size="lg"
          sx={(theme) => ({
            backgroundColor:
              theme.colorScheme === "dark"
                ? theme.colors.dark[6]
                : theme.colors.gray[0],
            color:
              theme.colorScheme === "dark"
                ? theme.colors.yellow[4]
                : theme.colors.blue[6],
          })}
        >
          {colorScheme === "dark" ? (
            <IconSun size={18} />
          ) : (
            <IconMoonStars size={18} />
          )}
        </ActionIcon>
      </Container>
    </Header>
  );
}
