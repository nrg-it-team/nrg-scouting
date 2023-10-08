<template>
  <h1><span style="color: #CC0000">⚡ NRG</span><span style="color: #fac21b;"> Scouting ⚡</span></h1>
  <h2>Record</h2>
  <ul v-if="list.length > 0" class="link-list">
    <li v-for="[i, name] of list.entries()" :key="i">
      <RouterLink :to="{ name: 'form', query: { name } }">{{ name }}</RouterLink>
    </li>
  </ul>
  <p v-else>No configurations specified.</p>
  <h2 style="margin-top: 20px">Download</h2>
  <ul class="link-list">
    <li>
      <RouterLink :to="{ name: 'upload' }">Download</RouterLink>
    </li>
    <li>
      <RouterLink :to="{ name: 'inspector' }">Saved Data</RouterLink>
    </li>
  </ul>
  <!--<p style="margin-top: 50px">Need help? Check out the <a href="https://youtu.be/UmP2YxNzfv4" target="_blank" rel="noreferrer noopener">tutorial</a>.</p>-->
  <p style="margin-top: 20px">Made with ❤️ by the NRG IT Team.</p>
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
  margin: auto;
  list-style-type: "\1F5F2  ";
  font-size: 1.3em;

  li {
    margin: 0px;
    margin-top: 10px;
    color: #ffd966;

  }
}
p {
  margin: auto;
}
h2 {
  margin: auto;
  margin-bottom: 10px;
}
h1{
  margin: auto;
  margin-top: 20px;
  margin-bottom: 20px;

}
</style>
