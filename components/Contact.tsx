import {
  Paper,
  Text,
  TextInput,
  Textarea,
  Button,
  Group,
  SimpleGrid,
  createStyles,
  Container,
} from "@mantine/core";
import React from "react";
//   import { ContactIconsList } from '../ContactIcons/ContactIcons';
import bg from "./bg.svg";

const useStyles = createStyles((theme) => {
  const BREAKPOINT = theme.fn.smallerThan("sm");

  return {
    wrapper: {
      display: "flex",
      backgroundColor:
        theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
      borderRadius: theme.radius.lg,
      padding: 4,
      border: `1px solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[8]
          : theme.colors.gray[2]
      }`,

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    form: {
      boxSizing: "border-box",
      flex: 1,
      padding: theme.spacing.xl,
      paddingLeft: theme.spacing.xl * 2,
      borderLeft: 0,

      [BREAKPOINT]: {
        padding: theme.spacing.md,
        paddingLeft: theme.spacing.md,
      },
    },

    fields: {
      marginTop: -12,
    },

    fieldInput: {
      flex: 1,

      "& + &": {
        marginLeft: theme.spacing.md,

        [BREAKPOINT]: {
          marginLeft: 0,
          marginTop: theme.spacing.md,
        },
      },
    },

    fieldsGroup: {
      display: "flex",

      [BREAKPOINT]: {
        flexDirection: "column",
      },
    },

    contacts: {
      boxSizing: "border-box",
      position: "relative",
      borderRadius: theme.radius.lg - 2,
      backgroundImage: `url(${bg.src})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      border: "1px solid transparent",
      padding: theme.spacing.xl,
      flex: "0 0 280px",

      [BREAKPOINT]: {
        marginBottom: theme.spacing.sm,
        paddingLeft: theme.spacing.md,
      },
    },

    title: {
      marginBottom: theme.spacing.xl * 1.5,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,

      [BREAKPOINT]: {
        marginBottom: theme.spacing.xl,
      },
    },

    control: {
      [BREAKPOINT]: {
        flex: 1,
      },
    },
  };
});

const GetInTouch = React.forwardRef((props: any, ref: any) => {
  const { classes } = useStyles();

  return (
    <Container size="sm" py="xl" ref={ref}>
      <div className={classes.wrapper}>
        <div className={classes.contacts}>
          <Text
            size="lg"
            weight={700}
            className={classes.title}
            sx={{ color: "#fff" }}
          >
            What are you waiting for ?
          </Text>
          <Text
            size="sm"
            weight={300}
            className={classes.title}
            sx={{ color: "#fff" }}
          >
            Register now and take advantage of our pre-order sale prices and be
            one of the first to get these amazing materials.
          </Text>

          {/* <ContactIconsList variant="white" /> */}
        </div>

        <form
          className={classes.form}
          onSubmit={(event) => event.preventDefault()}
        >
          <Text size="lg" weight={700} className={classes.title}>
            Get in touch
          </Text>

          <div className={classes.fields}>
            <SimpleGrid cols={1} breakpoints={[{ maxWidth: "sm", cols: 1 }]}>
              <TextInput
              name="name"
                label="Your name"
                onChange={props.handleChange}
                placeholder="Your name"
                value={props.form.name}
              />
              <TextInput
                label="Your email"
                name="email"
                onChange={props.handleChange}
                value={props.form.email}

                placeholder="hello@mantine.dev"
                required
              />
            </SimpleGrid>
        <Text size={'sm'} color={'teal'}>
          {props.msg}
        </Text>
            <Group position="right" mt="md">
              <Button type="submit" className={classes.control} onClick={props.handleSubmit}>
                Register
              </Button>
            </Group>
          </div>
        </form>
      </div>
    </Container>
  );
});

GetInTouch.displayName = "getintouch";

export default GetInTouch;
