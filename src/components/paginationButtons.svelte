<div
  class="flex flex-row w-full h-[64px] bg-passe-dark border border-passe-border rounded-bl-lg rounded-br-lg items-center font-inter">
  <div class="flex flex-row w-full place-content-center items-center gap-x-2">
    <div
      class="flex flex-col place-content-center h-[24px] w-[24px] bg-passe-dark border border-passe-border drop-shadow-md rounded-sm text-passe-white cursor-pointer select-none"
      on:click={paginate_left}>
      <Fa icon={faChevronLeft}></Fa>
    </div>
    <div
      class="flex flex-col place-content-center h-[24px] w-[24px] bg-passe-dark text-passe-white font-inter items-center"
      class:border-b={$current_page  === 1} class:border-passe-white={$current_page  === 1}>
      {buttons[0]}
    </div>
    <div
      class="flex flex-col place-content-center h-[24px] w-[24px] bg-passe-dark text-passe-white font-inter items-center"
      class:border-b={$current_page  === 2} class:border-passe-white={$current_page  === 2}
      class:text-passe-unfocused={buttons[2] > max_pages}>
      {buttons[1]}
    </div>
    <div
      class="flex flex-col place-content-center h-[24px] w-[24px] bg-passe-dark text-passe-white font-inter align-middle items-center"
      class:border-b={$current_page  === 3 || cycle_buttons}
      class:border-passe-white={$current_page  === 3 || cycle_buttons}
      class:text-passe-unfocused={buttons[3] > max_pages}>
      {#if $current_page === 3 || cycle_buttons}
        <input on:keydown={handle_input}
               class="flex flex-col text-passe-white w-full h-full outline-0 align-middle items-center place-content-center bg-passe-dark border-0 place-content-center text-center"
               value={$current_page } />
      {:else}
        {buttons[2]}
      {/if}
    </div>
    <div
      class="flex flex-col place-content-center h-[24px] w-[24px] bg-passe-dark text-passe-white font-inter align-middle items-center"
      class:text-passe-unfocused={buttons[3] > max_pages}>
      {buttons[3]}
    </div>
    <div
      class="flex flex-col place-content-center h-[24px] w-[24px] bg-passe-dark text-passe-white font-inter align-middle items-center"
      class:text-passe-unfocused={buttons[4] > max_pages}>
      {buttons[4]}
    </div>
    <div
      class="flex flex-col place-content-center h-[24px] w-[24px] bg-passe-dark border border-passe-border drop-shadow-md rounded-sm text-passe-white cursor-pointer select-none"
      on:click={paginate_right}>
      <Fa icon={faChevronRight}></Fa>
    </div>
  </div>
</div>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<script lang="ts">
  import Fa from "svelte-fa/src/fa.svelte";
  import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
  import { current_page, current_vault } from "../utils/stores.js";

  let max_pages;

  let inputted_number = "1";
  let cycle_buttons = false; // when inputted number == 3 toggle
  let buttons = [1, 2, 3, 4, 5];
  // Press right button -> [2, 3, 4, 5, 6]
  // Press right button -> [3, 4, 5, 6, 7]
  // Press right button -> [4, 5, 6, 7, 8]
  // Press left button -> [3, 4, 5, 6, 7]
  // Press left button -> [2, 3, 4, 5, 6]
  // Press left button -> [1, 2, 3, 4, 5]

  const cycle_to_page = (page) => {
    buttons = [page - 2, page - 1, page, page + 1, page + 2];
  };

  const cycle_if_needed = (page: number) => {
    if (page > 3) {
      if (cycle_buttons) {
        cycle_to_page(page);
      }
    } else {
      buttons = [1, 2, 3, 4, 5];
    }
  };

  const paginate_by_number = (page: string) => {
    if (page !== "") {
      const parsed_num = parseInt(page.trim());
      if (!isNaN(parsed_num)) {
        if (parsed_num > max_pages) {
          $current_page = max_pages;
        } else if (parsed_num < 1) {
          $current_page = 1;
        } else {
          $current_page = parsed_num;
        }
      }
    }
  };

  const paginate_left = () => {
    if ($current_page > 1) {
      $current_page -= 1;
      inputted_number = $current_page.toString();
    }
  };

  const paginate_right = () => {
    if ($current_page < max_pages) {
      $current_page += 1;
      inputted_number = $current_page.toString();
    }
  };

  const handle_input = (e) => {
    if (e.key === "Enter") {
      inputted_number = e.target.value;
    } else if (!["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "Backspace"].includes(e.key)) {
      e.preventDefault();
    }
  };

  $: {
    $current_page = 1;
    inputted_number = "1";
    cycle_buttons = false; // when inputted number == 3 toggle
    buttons = [1, 2, 3, 4, 5];
    max_pages = Math.ceil($current_vault.passwords.length / 10);
  }

  $: {
    let input = inputted_number.trim();
    paginate_by_number(input);
    cycle_if_needed($current_page);
    cycle_buttons = $current_page >= 3 || (!buttons.includes($current_page));
  }
</script>