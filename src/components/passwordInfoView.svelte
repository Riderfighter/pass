<div class="flex flex-col w-1/2">
  <div
    class="flex flex-col gap-2 w-full border border-passe-border rounded-t-lg h-[64px] bg-passe-dark place-content-center">
    <div class="flex flex-row w-full justify-between items-baseline self-center px-6">
      <div class="flex flex-row place-items-center gap-2 text-passe-focused text-[1.25rem]">
        <h1 class="font-sans font-bold text-3xl overflow-y-clip">{$current_password.website}</h1>
        <Fa color="#777885" icon={faEdit} />
      </div>
      <h2 class="text-passe-unfocused font-sans font-bold text-sm">Edited {$current_password.updated}</h2>
    </div>
  </div>
  <div
    class="flex flex-col h-[640px] w-full bg-passe-dark border-x border-passe-border place-content-center place-items-center justify-evenly">
    <div class="flex flex-col w-full gap-y-2 place-items-center place-content-center">
      <div class="flex flex-row w-full justify-between px-8">
        <h1 class="text-passe-focused font-sans font-medium text-lg">Username</h1>
        <div class="flex flex-row">
          <input bind:value={$current_password.username}
                 class="text-passe-unfocused placeholder:text-passe-unfocused font-sans bg-passe-darkest border-passe-border border-y border-l outline-0 pl-6 rounded-l-md"
                 placeholder="Enter a username..." type="text">
          <div
            class="flex flex-row bg-passe-darkest border-passe-border border-y border-r rounded-r-md text-passe-white place-items-center gap-x-2 pr-6 text-passe-unfocused w-[96px] place-content-end">
            <Fa icon={faCopy} />
          </div>
        </div>
      </div>
      <div class="flex flex-row w-full justify-between px-8">
        <h1 class="text-passe-focused font-sans font-medium text-lg">Password</h1>
        <div class="flex flex-row">
          <input
            class="text-passe-unfocused placeholder:text-passe-unfocused font-sans bg-passe-darkest border-passe-border border-y border-l outline-0 pl-6 rounded-l-md"
            placeholder="Enter a password..." type="password" value="password">
          <div
            class="flex flex-row bg-passe-darkest border-passe-border border-y border-r rounded-r-md text-passe-white place-items-center gap-x-2 pr-6 text-passe-unfocused w-[96px] place-content-end">
            <Fa icon={faEyeSlash} />
            <Fa icon={faRotate} />
            <Fa icon={faCopy} />
          </div>
        </div>
      </div>
      <div class="flex flex-row w-full justify-between px-8">
        <h1 class="text-passe-focused font-sans font-medium text-lg">Website</h1>
        <div class="flex flex-row">
          <input bind:value={$current_password.url}
                 class="text-passe-unfocused placeholder:text-passe-unfocused font-sans bg-passe-darkest border-passe-border border-y border-l outline-0 pl-6 rounded-l-md"
                 placeholder="Enter a website..." type="text">
          <div
            class="flex flex-row bg-passe-darkest border-passe-border border-y border-r rounded-r-md text-passe-white place-items-center gap-x-2 pr-6 text-passe-unfocused w-[96px] place-content-end">
            <Fa icon={faCopy} />
          </div>
        </div>
      </div>
    </div>
    <div class="flex flex-col gap-2 h-3/4 w-3/4 place-self-center">
      <h1 class="text-passe-focused font-sans font-medium text-2xl pl-4">Note</h1>
      <textarea bind:value={$current_password.note}
                class="bg-passe-darkest text-passe-unfocused placeholder:text-passe-unfocused font-sans font-medium rounded-lg resize-none outline-0 p-4 h-full border-passe-border border"
                placeholder="Create note..."></textarea>
    </div>
  </div>
  <!--TODO: MAKE THIS SECTION SLIDE UP ON SHOW-->
  <div
    class="flex flex-col w-full h-[64px] bg-passe-dark border border-passe-border rounded-b-lg items-center cursor-pointer place-items-center place-content-center">
    <div class="flex flex-row w-3/4 justify-between items-baseline">
      <div class="flex flex-row items-baseline gap-2">
        <h1 class="text-passe-focused font-sans font-medium text-2xl">History</h1>
        <h2 class="text-passe-unfocused font-sans font-medium text-sm">{$current_password.revisions}
          revision{$current_password.revisions > 1 || !current_password.revisions ? "s" : ""}</h2>
      </div>
      <div class="flex flex-row text-passe-unfocused pr-2 place-items-center gap-2">
        <h2 class="text-sm font-sans">Show</h2>
        <Fa icon={faCaretUp} translateY={0.1} />
      </div>
    </div>
  </div>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap');

    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<script lang="ts">
  import { faCaretUp, faCopy, faEdit, faEyeSlash, faRotate } from "@fortawesome/free-solid-svg-icons";
  import { current_password } from "../utils/stores.js";
  import { Fa } from "svelte-fa";
</script>