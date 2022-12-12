<div class="flex flex-col w-1/2 font-inter">
  <div
    class="flex flex-col gap-2 w-full border border-passe-border rounded-t-lg h-[64px] bg-passe-dark place-content-center">
    <div class="flex flex-row w-full justify-between items-baseline px-6">
      <div class="flex flex-row w-full gap-2 items-baseline">
        <h1 class="text-passe-focused  font-bold text-3xl">{$current_vault.name}</h1>
        <h2 class="text-passe-unfocused  font-bold text-sm">{$current_vault.passwords.length} items</h2>
      </div>
      <div class="flex flex-row text-passe-unfocused gap-2 text-[1.25rem]">
        <Fa icon={faUserPlus} />
        <Fa icon={faSquarePlus} />
      </div>
    </div>
  </div>
  <div
    class="flex flex-col h-[640px] w-full bg-passe-dark border-x border-passe-border justify-start overflow-y-clip py-[5px]">
    <ol class="flex flex-col w-full bg-passe-dark space-y-[16px] place-content-center">
      {#each $password_list.slice(($current_page - 1) * 10, (($current_page - 1) * 10) + 10) as password}
        {#if password !== undefined}
          <li class="flex flex-row min-h-[48px] w-full place-items-center justify-between cursor-pointer"
              class:bg-passe-border={$current_password === password} on:click={()=>{$current_password = password}}>
            <div class="flex flex-row w-1/6 gap-8 place-content-center place-items-center pl-6">
              <div
                on:click={() => {password.starred = !password.starred; if ($current_vault.passwords.length > 0) $current_password = $current_vault.passwords[0]}}>
                <Fa icon={faStar} color={!password.starred ? "#777885" : "#DCDCDC"} />
              </div>
              <img src={password.image} class="rounded-full h-8 w-8" alt="" />
            </div>
            <div class="flex flex-row w-full justify-evenly">
              <div class="flex flex-col w-1/3">
                <h2 class=" font-medium text-passe-focused text-sm">Website</h2>
                <h1 class=" font-medium text-passe-unfocused text-md">{password.website}</h1>
              </div>
              <div class="flex flex-col w-1/3">
                <h2 class=" font-medium text-passe-focused text-sm">Login</h2>
                <h1 class=" font-medium text-passe-unfocused text-md">{password.email}</h1>
              </div>
            </div>
            <i class="flex w-1/6 place-content-end pr-6 text-[1.25rem]">
              <Fa icon={faCopy} color="#777885" />
            </i>
          </li>
        {/if}
      {/each}
    </ol>
  </div>
  <PaginationButtons />
</div>

<style>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<script lang="ts">
  import Fa from "svelte-fa/src/fa.svelte";
  import { faCopy, faSquarePlus, faStar, faUserPlus } from "@fortawesome/free-solid-svg-icons";
  import { current_page, password_list, current_password, current_vault } from "../utils/stores.js";
  import PaginationButtons from "./paginationButtons.svelte";
</script>