import { signal } from "@preact/signals";
import dogs from "../data/dogs.json";
import { shuffle } from "../utils";

export const dogBreeds = signal(
  shuffle(dogs).map((dog, index) => ({
    question: "Na obrázku je:",
    image: dog.image,
    answer: dog.breed,
    options: shuffle([
        dog.breed,
        dogs[index === 0 ? dogs.length - 1 : index - 1].breed,
        dogs[index === dogs.length - 1 ? 0 : index + 1].breed,
      ]),
  }))
);
