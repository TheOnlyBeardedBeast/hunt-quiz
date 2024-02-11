import { FunctionComponent } from "preact";
import { Question } from "./Question";
import { dogBreeds } from "../stores/dogsStore";
import { useSignal } from "@preact/signals";


export const Quiz: FunctionComponent = () => {
    const state = useSignal(0);

    const next = () => {
        if(state.value === dogBreeds.value.length-1)
        {
            state.value = 0;
        }

        state.value++;
    }

  return (
    <div
      class="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md mx-auto"
      data-v0-t="card"
    >
      <div class="p-6 flex flex-col items-center space-y-2">
        <div class="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-6 w-6"
          >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
          </svg>
          <div class="text-sm font-medium">Quiz</div>
        </div>
        <div class="text-2xl font-bold">Poľovnícka kynológia</div>
        <div class="text-sm text-center">
          Psy
        </div>
      </div>
      <div class="p-6 grid gap-4">
        {<Question onSucces={next} answer={dogBreeds.value[state.value].answer} question={dogBreeds.value[state.value].question} image={dogBreeds.value[state.value].image} options={dogBreeds.value[state.value].options}/>}
        <div class="flex items-center justify-center">
          <button onClick={next} class="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
            Preskočiť
          </button>
        </div>
      </div>
    </div>
  );
};
