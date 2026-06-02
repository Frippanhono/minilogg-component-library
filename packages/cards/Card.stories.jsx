import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardSubtitle,
  CardMedia,
  CardMeta,
  CardActions,
  PostCard,
} from "./ui";

const DEFAULT_IMAGE = "/images/card-default.svg";
const CARD_VARIANTS = ["default", "elevated", "outline", "ghost"];
const CARD_TONES = ["neutral", "info", "success", "warning", "danger"];

function renderBaseCard(args) {
  const {
    maxWidth,
    title,
    subtitle,
    body,
    meta,
    showSubtitle,
    showFooter,
    showMeta,
    ...cardProps
  } = args;

  return (
    <Card {...cardProps} style={{ maxWidth }}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {showSubtitle ? <CardSubtitle>{subtitle}</CardSubtitle> : null}
      </CardHeader>
      <CardBody>{body}</CardBody>
      {showFooter ? (
        <CardFooter>{showMeta ? <CardMeta>{meta}</CardMeta> : null}</CardFooter>
      ) : null}
    </Card>
  );
}

function renderCardWithActions(args) {
  return (
    <Card variant={args.variant} tone={args.tone} style={{ maxWidth: args.maxWidth }}>
      <CardHeader>
        <CardTitle>{args.title}</CardTitle>
        <CardSubtitle>{args.subtitle}</CardSubtitle>
      </CardHeader>
      <CardBody>{args.body}</CardBody>
      <CardFooter>
        <CardActions>
          <button type="button">{args.secondaryActionLabel}</button>
          <button type="button">{args.primaryActionLabel}</button>
        </CardActions>
      </CardFooter>
    </Card>
  );
}

function renderCardWithMedia(args) {
  return (
    <Card variant={args.variant} tone={args.tone} style={{ maxWidth: args.maxWidth }}>
      <CardHeader>
        <CardMedia aria-hidden={args.mediaAlt ? undefined : "true"}>
          <img
            src={args.mediaSrc || DEFAULT_IMAGE}
            alt={args.mediaAlt}
            style={{ width: args.mediaWidth, height: args.mediaHeight }}
          />
        </CardMedia>
        <div>
          <CardTitle>{args.title}</CardTitle>
          <CardSubtitle>{args.subtitle}</CardSubtitle>
        </div>
      </CardHeader>
      <CardBody>{args.body}</CardBody>
    </Card>
  );
}

export default {
  title: "Components/Card",
  component: Card,
  parameters: {
    controls: { expanded: true },
  },
  args: {
    variant: "default",
    tone: "neutral",
    interactive: false,
    selected: false,
    maxWidth: 360,
    title: "Veckans tema",
    subtitle: "Måndag - fredag",
    body: "Vi utforskar färger och former genom lek, sång och skapande aktiviteter.",
    meta: "Uppdaterad idag",
    showSubtitle: true,
    showFooter: true,
    showMeta: true,
  },
  argTypes: {
    variant: {
      control: { type: "select" },
      options: CARD_VARIANTS,
    },
    tone: {
      control: { type: "select" },
      options: CARD_TONES,
    },
    interactive: { control: "boolean" },
    selected: { control: "boolean" },
    maxWidth: { control: { type: "number", min: 220, max: 800, step: 10 } },
    title: { control: "text" },
    subtitle: { control: "text" },
    body: { control: "text" },
    meta: { control: "text" },
    showSubtitle: { control: "boolean" },
    showFooter: { control: "boolean" },
    showMeta: { control: "boolean" },
    onClick: { action: "cardClicked" },
  },
};

export const Playground = {
  name: "Playground",
  render: renderBaseCard,
};

export const Interactive = {
  ...Playground,
  args: {
    variant: "elevated",
    interactive: true,
    title: "Klickbart kort",
    subtitle: "",
    body: "Hela kortet är klickbart och kan användas med tangentbordet (Enter / Space).",
    meta: "",
    showSubtitle: false,
    showFooter: false,
    showMeta: false,
  },
};

export const Selected = {
  ...Playground,
  args: {
    variant: "outline",
    interactive: true,
    selected: true,
    title: "Valt kort",
    subtitle: "Markerat som valt",
    body: "Visuell indikation för aktivt/valt tillstånd.",
    showFooter: false,
    showMeta: false,
  },
};

export const WithActions = {
  args: {
    variant: "elevated",
    tone: "neutral",
    maxWidth: 360,
    title: "Föräldramöte",
    subtitle: "Torsdag 18:00",
    body: "Vi går igenom terminens upplägg och svarar på era frågor.",
    secondaryActionLabel: "Avböj",
    primaryActionLabel: "Anmäl",
  },
  argTypes: {
    secondaryActionLabel: { control: "text" },
    primaryActionLabel: { control: "text" },
  },
  render: renderCardWithActions,
};

export const WithMedia = {
  args: {
    variant: "elevated",
    tone: "neutral",
    maxWidth: 360,
    mediaSrc: DEFAULT_IMAGE,
    mediaAlt: "",
    mediaWidth: 48,
    mediaHeight: 48,
    title: "Snäckan",
    subtitle: "Avdelning",
    body: "16 barn · 3 pedagoger",
  },
  argTypes: {
    mediaSrc: { control: "text" },
    mediaAlt: { control: "text" },
    mediaWidth: { control: { type: "number", min: 16, max: 200, step: 4 } },
    mediaHeight: { control: { type: "number", min: 16, max: 200, step: 4 } },
  },
  render: renderCardWithMedia,
};

export const PostCardDefault = {
  name: "PostCard / Default",
  args: {
    image: DEFAULT_IMAGE,
    imageAlt: "",
    title: "Utflykt till skogen",
    date: "23 april",
    href: "#",
    readMoreLabel: "Läs mer",
  },
  argTypes: {
    image: { control: "text" },
    imageAlt: { control: "text" },
    title: { control: "text" },
    date: { control: "text" },
    href: { control: "text" },
    readMoreLabel: { control: "text" },
    onClick: { action: "postCardClicked" },
    onReadMore: { action: "readMoreClicked" },
  },
  render: (args) => <PostCard {...args} />,
};

export const PostCardList = {
  name: "PostCard / Lista",
  args: {
    gap: 12,
    maxWidth: 480,
    image: DEFAULT_IMAGE,
    item1Title: "Vårens första utflykt",
    item1Date: "2 maj",
    item2Title: "Vi bakar bullar tillsammans",
    item2Date: "28 april",
    item3Title: "Tema: havet",
    item3Date: "23 april",
  },
  argTypes: {
    gap: { control: { type: "number", min: 0, max: 48, step: 1 } },
    maxWidth: { control: { type: "number", min: 220, max: 800, step: 10 } },
    image: { control: "text" },
    item1Title: { control: "text" },
    item1Date: { control: "text" },
    item2Title: { control: "text" },
    item2Date: { control: "text" },
    item3Title: { control: "text" },
    item3Date: { control: "text" },
  },
  render: (args) => (
    <div style={{ display: "grid", gap: args.gap, maxWidth: args.maxWidth }}>
      <PostCard image={args.image} title={args.item1Title} date={args.item1Date} />
      <PostCard image={args.image} title={args.item2Title} date={args.item2Date} />
      <PostCard image={args.image} title={args.item3Title} date={args.item3Date} />
    </div>
  ),
};
