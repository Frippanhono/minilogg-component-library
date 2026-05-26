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

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "elevated", "outline", "ghost"],
    },
    tone: {
      control: { type: "select" },
      options: ["neutral", "info", "success", "warning", "danger"],
    },
    interactive: { control: "boolean" },
    selected: { control: "boolean" },
  },
};

export const Default = {
  args: {
    variant: "default",
    tone: "neutral",
  },
  render: (args) => (
    <Card {...args} style={{ maxWidth: 360 }}>
      <CardHeader>
        <CardTitle>Veckans tema</CardTitle>
        <CardSubtitle>Måndag – fredag</CardSubtitle>
      </CardHeader>
      <CardBody>
        Vi utforskar färger och former genom lek, sång och skapande aktiviteter.
      </CardBody>
      <CardFooter>
        <CardMeta>Uppdaterad idag</CardMeta>
      </CardFooter>
    </Card>
  ),
};

export const Elevated = {
  ...Default,
  args: { ...Default.args, variant: "elevated" },
};

export const Outline = {
  ...Default,
  args: { ...Default.args, variant: "outline" },
};

export const Ghost = {
  ...Default,
  args: { ...Default.args, variant: "ghost" },
};

export const ToneSuccess = {
  ...Default,
  args: { ...Default.args, tone: "success" },
};

export const ToneWarning = {
  ...Default,
  args: { ...Default.args, tone: "warning" },
};

export const ToneDanger = {
  ...Default,
  args: { ...Default.args, tone: "danger" },
};

export const ToneInfo = {
  ...Default,
  args: { ...Default.args, tone: "info" },
};

export const Interactive = {
  args: {
    variant: "elevated",
    interactive: true,
  },
  render: (args) => (
    <Card
      {...args}
      onClick={() => alert("Kortet klickades")}
      style={{ maxWidth: 360 }}
    >
      <CardHeader>
        <CardTitle>Klickbart kort</CardTitle>
      </CardHeader>
      <CardBody>
        Hela kortet är klickbart och kan användas med tangentbordet (Enter / Space).
      </CardBody>
    </Card>
  ),
};

export const Selected = {
  args: {
    variant: "outline",
    interactive: true,
    selected: true,
  },
  render: (args) => (
    <Card {...args} style={{ maxWidth: 360 }}>
      <CardHeader>
        <CardTitle>Valt kort</CardTitle>
        <CardSubtitle>Markerat som valt</CardSubtitle>
      </CardHeader>
      <CardBody>Visuell indikation för aktivt/valt tillstånd.</CardBody>
    </Card>
  ),
};

export const WithActions = {
  render: () => (
    <Card variant="elevated" style={{ maxWidth: 360 }}>
      <CardHeader>
        <CardTitle>Föräldramöte</CardTitle>
        <CardSubtitle>Torsdag 18:00</CardSubtitle>
      </CardHeader>
      <CardBody>
        Vi går igenom terminens upplägg och svarar på era frågor.
      </CardBody>
      <CardFooter>
        <CardActions>
          <button type="button">Avböj</button>
          <button type="button">Anmäl</button>
        </CardActions>
      </CardFooter>
    </Card>
  ),
};

export const WithMedia = {
  render: () => (
    <Card variant="elevated" style={{ maxWidth: 360 }}>
      <CardHeader>
        <CardMedia aria-hidden="true">
          <img
            src="/images/card-default.svg"
            alt=""
            style={{ width: 48, height: 48 }}
          />
        </CardMedia>
        <div>
          <CardTitle>Snäckan</CardTitle>
          <CardSubtitle>Avdelning</CardSubtitle>
        </div>
      </CardHeader>
      <CardBody>16 barn · 3 pedagoger</CardBody>
    </Card>
  ),
};

export const PostCardDefault = {
  name: "PostCard / Default",
  render: () => (
    <PostCard
      image="/images/card-default.svg"
      title="Utflykt till skogen"
      date="23 april"
      href="#"
      onReadMore={(e) => {
        e.preventDefault();
        alert("Läs mer");
      }}
    />
  ),
};

export const PostCardList = {
  name: "PostCard / Lista",
  render: () => (
    <div style={{ display: "grid", gap: 12, maxWidth: 480 }}>
      <PostCard
        image="/images/card-default.svg"
        title="Vårens första utflykt"
        date="2 maj"
      />
      <PostCard
        image="/images/card-default.svg"
        title="Vi bakar bullar tillsammans"
        date="28 april"
      />
      <PostCard
        image="/images/card-default.svg"
        title="Tema: havet"
        date="23 april"
      />
    </div>
  ),
};
