import React from "react";

// Example Input component import
import { Input, Textarea } from "./ui/index.jsx";

export default {
  title: "Inputs/Inputs",
};


export const TextInput = () => (
  <Input label="Namn" placeholder="Skriv ditt namn" />
);

export const TextInputWithHint = () => (
  <Input label="E-post" type="email" hint="Vi delar aldrig din adress" placeholder="namn@exempel.se" />
);

export const TextInputWithError = () => (
  <Input label="Lösenord" type="password" error="Lösenordet är för kort" placeholder="Minst 8 tecken" />
);

export const TextareaDefault = () => (
  <Textarea label="Meddelande" placeholder="Skriv ett meddelande..." />
);

export const TextareaWithHint = () => (
  <Textarea label="Beskrivning" hint="Max 500 tecken" rows={6} placeholder="Beskriv din fråga" />
);

export const TextareaWithError = () => (
  <Textarea label="Kommentar" error="Kommentar krävs" />
);
