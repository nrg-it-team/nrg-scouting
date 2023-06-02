<template>
  <h1>Welcome to NRG's scouting page!</h1>
  <h2>Please Select a Form:</h2>
  <ul v-if="list.length > 0" class="link-list">
    <li v-for="[i, name] of list.entries()" :key="i">
      <RouterLink :to="{ name: 'form', query: { name } }">{{ name }}</RouterLink>
    </li>
  </ul>
  <p v-else>No configurations specified.</p>
  <h2>Tools</h2>
  <ul class="link-list">
    <li>
      <RouterLink :to="{ name: 'inspector' }">See Saved Data</RouterLink>
    </li>
  </ul>
  <p style="margin-top: 50px">Need help? Check out the <a href="https://youtu.be/UmP2YxNzfv4" target="_blank" rel="noreferrer noopener">tutorial</a>.</p>
  <p style="margin-top: 20px">Version: 2023.5</p>
  <p style="margin-top: 1px">Made with ❤️ by the NRG IT Team.</p>
</template>

<script setup lang="ts">
import { FetchError } from "@/common/shared";

const version = APP_VERSION;

// Fetch configurations list
const fetchResult = await fetch(`${import.meta.env.BASE_URL}assets/configurations.txt`);

if (!fetchResult.ok) throw new FetchError("Configuration list", fetchResult);

// Get text data, then convert to array
const textData = await fetchResult.text();
const list = $ref(textData.split("\n").map(value => value.trim()).filter(value => value.length > 0));
</script>

<style lang="postcss">
.link-list {
  margin: 0;

  li {
    margin: 6px 0;
  }
}
</style>
