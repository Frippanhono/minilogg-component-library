import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  CardSubtitle,
  CardMeta,
  PostCard,
} from "./ui/index.jsx";

const DEFAULT_IMAGE = "/images/card-default.svg";

const CARD_VARIANTS = ["default", "elevated", "outline", "ghost"];
const CARD_TONES = ["neutral", "info", "success", "warning", "danger"];

function renderCard(args) {
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
    interactive: {
      control: "boolean",
    },
    selected: {
      control: "boolean",
    },
    maxWidth: {
      control: { type: "number", min: 220, max: 800, step: 10 },
    },
    title: {
      control: "text",
    },
    subtitle: {
      control: "text",
    },
    body: {
      control: "text",
    },
    meta: {
      control: "text",
    },
    showSubtitle: {
      control: "boolean",
    },
    showFooter: {
      control: "boolean",
    },
    showMeta: {
      control: "boolean",
    },
    onClick: {
      action: "cardClicked",
    },

    image: {
      control: "text",
    },
    imageAlt: {
      control: "text",
    },
    date: {
      control: "text",
    },
    href: {
      control: "text",
    },
    readMoreLabel: {
      control: "text",
    },
    onReadMore: {
      action: "readMoreClicked",
    },
  },
};

export const Default = {
  render: renderCard,
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
};

export const Custom = {
  render: renderCard,
  args: {
    variant: "elevated",
    tone: "info",
    interactive: true,
    selected: false,
    maxWidth: 360,
    title: "Anpassat kort",
    subtitle: "Valfri undertitel",
    body: "Valfritt innehåll",
    meta: "Valfri metadata",
    showSubtitle: true,
    showFooter: true,
    showMeta: true,
  },
};

export const PostCardDefault = {
  name: "PostCard / Default",
  render: (args) => <PostCard {...args} />,
  args: {
    image: DEFAULT_IMAGE,
    imageAlt: "",
    title: "Utflykt till skogen",
    date: "23 april",
    href: "#",
    readMoreLabel: "Läs mer",
  },
};

export const PostCardCustom = {
  name: "PostCard / Custom",
  render: (args) => <PostCard {...args} />,
  args: {
    image: DEFAULT_IMAGE,
    imageAlt: "Illustration",
    title: "Valfri nyhet",
    date: "1 juni",
    href: "#",
    readMoreLabel: "Visa mer",
  },
};
