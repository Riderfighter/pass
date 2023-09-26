<div class="flex flex-row h-screen">
  <div class="bg-passe-dark h-full w-1/5 border-r border-passe-border">
    <div class="flex flex-row w-full h-1/6 place-content-center place-items-center align-middle gap-1 text-[2.75rem]">
      <Fa color="#DCDCDC" icon={faVault} />
      <h1 class="place-self-center lg:text-6xl md:text-3xl text-passe-white font-inter font-bold">PASS</h1>
    </div>
    <div class="flex flex-col place-content-center w-full h-5/6">
      <ol class="w-[80%] h-full self-center p-5 font-inter font-medium text-xl text-passe-unfocused space-y-10">
        <li class="flex flex-row justify-between items-center cursor-pointer"
            class:text-passe-focused={show_list === -1}
            on:click={()=>{show_list=-1; curr_vault = get_all_vault(); curr_password = get_all_vault().passwords[0]}}>
          <h1>All</h1>
          <h2 class="text-sm align-middle">{get_all_vault().passwords.length}</h2>
        </li>
        <li class="flex flex-row justify-between items-center cursor-pointer" class:text-passe-focused={show_list === 0}
            on:click={()=>{show_list = 0; curr_vault = get_favorite_vault(); if (curr_vault.passwords.length > 0) curr_password = get_favorite_vault().passwords[0]}}>
          <h1>Favorites</h1>
          <h2 class="text-sm align-middle">
            <Fa icon={faStar} />
          </h2>
        </li>
        <li class="flex flex-row justify-between items-center">
          <h1>Trash</h1>
          <h2 class="text-sm align-middle">
            <Fa icon={faTrash} />
          </h2>
        </li>
        <li class="group flex flex-col justify-between select-none">
          <div class="flex flex-row justify-between items-center cursor-pointer"
               class:text-passe-focused={show_list === 1} on:click={()=>{show_list = 1}}>
            <h1>Secure</h1>
            <div class="flex flex-row text-passe-unfocused place-items-center gap-2">
              {#if show_list === 1}
                <h2 class="text-sm font-sans">Hide</h2>
                <Fa icon={faCaretDown} translateY={-0.1} />
              {:else}
                <h2 class="text-sm font-sans">Show</h2>
                <Fa icon={faCaretUp} translateY={0.1} />
              {/if}
            </div>
          </div>
          {#if show_list === 1}
            <ol class="text-[1rem] pl-3.5 mt-10 space-y-10" transition:slide="{{ duration: 500 }}">
              {#each secure_vaults as secure_vault}
                <li class="flex flex-row justify-between items-center cursor-pointer"
                    class:text-passe-focused={curr_vault === secure_vault}
                    on:click={()=>{curr_vault = secure_vault; curr_password = curr_vault.passwords[0]}}>
                  <h1>{secure_vault.name}</h1>
                  <Fa icon={faLock} />
                  <!--                  <h2 class="align-middle">{secure_vault.passwords.length}</h2>-->
                </li>
              {/each}
            </ol>
          {/if}
        </li>
        <li class="group flex flex-col justify-between select-none">
          <div class="flex flex-row justify-between items-center cursor-pointer"
               class:text-passe-focused={show_list === 2}
               on:click={()=>{show_list = 2; curr_vault = vaults[0]; curr_password = curr_vault.passwords[0]}}>
            <h1>Vaults</h1>
            <div class="flex flex-row place-items-center gap-2">
              {#if show_list === 2}
                <h2 class="text-sm font-sans">Hide</h2>
                <Fa icon={faCaretDown} translateY={-0.1} />
              {:else}
                <h2 class="text-sm font-sans">Show</h2>
                <Fa icon={faCaretUp} translateY={0.1} />
              {/if}
            </div>
          </div>
          {#if show_list === 2}
            <ol class="text-[1rem] pl-3.5 mt-10 space-y-10" transition:slide="{{ duration: 500 }}">
              {#each vaults as vault}
                <li class="flex flex-row justify-between items-center cursor-pointer"
                    class:text-passe-focused={curr_vault === vault}
                    on:click={()=>{curr_vault = vault; curr_password = curr_vault.passwords[0]}}>
                  <h1>{vault.name}</h1>
                  <h2 class="align-middle">{vault.passwords.length}</h2>
                </li>
              {/each}
            </ol>
          {/if}
        </li>
        <li class="group flex flex-col justify-between select-none" class:mt-10={show_list === 3}>
          <div class="flex flex-row justify-between items-center cursor-pointer"
               class:text-passe-focused={show_list === 3}
               on:click={()=>{show_list = 3; curr_vault = shared_vaults[0]; curr_password = curr_vault.passwords[0]}}>
            <h1>Shared</h1>
            <div class="flex flex-row place-items-center gap-2">
              {#if show_list === 3}
                <h2 class="text-sm font-sans">Hide</h2>
                <Fa icon={faCaretDown} translateY={-0.1} />
              {:else}
                <h2 class="text-sm font-sans">Show</h2>
                <Fa icon={faCaretUp} translateY={0.1} />
              {/if}
            </div>
          </div>
          {#if show_list === 3}
            <ol class="text-[1rem] pl-3.5 mt-10 space-y-10" transition:slide="{{ duration: 500 }}">
              {#each shared_vaults as vault}
                <li class="flex flex-row justify-between items-center cursor-pointer"
                    class:text-passe-focused={curr_vault === vault}
                    on:click={()=>{curr_vault = vault; curr_password = curr_vault.passwords[0]}}>
                  <h1>{vault.name}</h1>
                  <h2 class="align-middle">{vault.passwords.length}</h2>
                </li>
              {/each}
            </ol>
          {/if}
        </li>
      </ol>
    </div>
  </div>
  <div class="h-full w-1/12 bg-passe-darkest"></div>
  <div class="flex flex-col bg-passe-darkest h-full w-full">
    <!--START SEARCH BAR CONNECT BUTTON-->
    <div class="flex flew-row h-1/6 w-full place-items-center justify-between">
      <div class="flex flex-row w-3/4 h-1/3 bg-passe-dark text-passe-unfocused rounded-lg drop-shadow-md">
        <div class="flex h-full w-1/12 place-content-center place-items-center">
          <Fa icon={faSearch} />
        </div>
        <input bind:value={curr_search}
               class="w-11/12 h-full font-inter font-medium outline-0 rounded-lg bg-passe-dark placeholder-passe-unfocused"
               placeholder="Search by email, username, or website...">
      </div>
      <button
        class="flex w-1/6 h-1/3 bg-passe-dark rounded-lg font-inter font-medium text-passe-white items-center place-content-center gap-4 border border-passe-border">
        <span><Fa icon={faWallet} /></span>Connect Wallet
      </button>
    </div>
    <!--END-->
    <!--BODY OF CONTAINERS-->
    <div class="flex flex-row h-[768px] w-full place-items-start gap-14 justify-between">
      <PasswordTableView />
      <PasswordInfoView />
    </div>
  </div>
  <div class="h-full w-1/12 bg-passe-darkest"></div>
</div>

<style>
    @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap");

    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>

<script lang="ts">
  // @ts-check
  import { slide } from "svelte/transition";
  import {
    faCaretDown,
    faCaretUp,
    faLock,
    faSearch,
    faSquarePlus,
    faStar,
    faTrash,
    faUserPlus,
    faVault,
    faWallet
  } from "@fortawesome/free-solid-svg-icons";
  import Fuse from "fuse.js";

  import { current_password, password_list, current_vault } from "../utils/stores.js";

  import PasswordTableView from "../components/passwordTableView.svelte";
  import PasswordInfoView from "../components/passwordInfoView.svelte";
  import Fa  from "svelte-fa";

  import type IVault from "../interfaces/IVault";
  import type IPassword from "../interfaces/IPassword";
  import { shared_vaults } from "../mock_data/vaults/mockSharedVaults";
  import { vaults } from "../mock_data/vaults/mockRegularVaults";
  import { secure_vaults } from "../mock_data/vaults/mockSecureVaults";

  const get_all_vault = (): IVault => {
    let passwords = [...new Set(vaults.concat(shared_vaults).concat(secure_vaults).map(v => v.passwords).flat())];

    return {
      name: "All",
      passwords: passwords
    };
  };

  const get_favorite_vault = (): IVault => {
    let passwords = [...new Set(vaults.concat(shared_vaults).map(v => v.passwords).flat().filter(x => x.starred))];

    return {
      name: "Favorites",
      passwords: passwords
    };
  };

  let curr_search = "";

  let show_list = -1;
  let curr_vault: IVault = get_all_vault();
  let curr_password: IPassword = curr_vault.passwords[0];
  let show_passwords: IPassword[] = curr_vault.passwords;

  $: {
    $current_password = curr_password;
    $current_vault = curr_vault;
    $password_list = show_passwords;
  }

  $: {
    let fuse = new Fuse(show_passwords, {
      keys: ["website", "url", "username", "email"]
    });

    if (curr_search.length > 0) {
      show_passwords = fuse.search(curr_search).map(a => a.item);
    } else {
      show_passwords = curr_vault.passwords;
    }
  }
</script>