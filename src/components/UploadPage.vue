<template>
  <h1><span style="color: #CC0000">⚡ Download</span><span style="color: #fac21b;"> Data ⚡</span></h1>
  <h2>1) Download</h2>
  <p style="font-size:1.4em">
  <span @click="noDataAlert()" v-if="widgets.matchesDownloadLink === null">Matches</span>
  <a v-else :download="`matches-` + currenttime + `.csv`" :href="widgets.matchesDownloadLink"><button @click="clearMatchesData()">Matches</button></a> |
  <span @click="noDataAlert()" v-if="widgets.pitsDownloadLink === null">Pits</span>
  <a v-else :download="`pits-` + currenttime + `.csv`" :href="widgets.pitsDownloadLink"><button @click="clearPitsData()">Pits</button></a>
  </p>
  <h2 style="margin-top: 20px">2) Add to Drive</h2>
    <p style="font-size: 1.4em;">
      <a href="https://drive.google.com/drive/folders/1NtR30lREQ7iG0MDv68IyeY8xpLwR8bAr?usp=sharing" target="_blank" rel="noreferrer noopener">Matches</a> |
      <a href="https://drive.google.com/drive/folders/1v3QXy6MBwSYVFjoAW8mT6sXGdrq67-1z?usp=sharing" target="_blank" rel="noreferrer noopener">Pits</a>
    </p>
  <p style="margin-top: 50px; font-size: 1.3em;"><RouterLink style="text-decoration: none;" :to="{ name: 'home' }">🏠 Home</RouterLink></p>
  <p style="margin-top: 10px">Made with ❤️ by the NRG IT Team.</p>
</template>

<script setup lang="ts">


import { computed } from "vue";
import { useConfigStore, useWidgetsStore } from "@/common/stores";
import { useRouter } from "vue-router";

const config = useConfigStore();
const widgets = useWidgetsStore();
const router = useRouter();
const date = new Date();
const currenttime = date.getTime().toString()

// These are all hard-coded b/c for some stupid reason @click can't take an argument
function clearMatchesData() {
  widgets.savedData.delete("Matches");
}

// These are all hard-coded b/c for some stupid reason @click can't take an argument
function clearPitsData() {
  widgets.savedData.delete("Pits");
}
// These are all hard-coded b/c for some stupid reason @click can't take an argument
function clearOutreachData() {
  widgets.savedData.delete("Outreach");
}

function noDataAlert() {
  alert("Please check your downloads folder. You either just downloaded data, or never had any stored in the first place.");
}
</script>

<style lang="postcss">

p,a {
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

button {
  background: none!important;
  border: none;
  font-family: Verdana, sans-serif;
  padding: 0!important;
  text-decoration: underline;
  cursor: pointer;
}
span {
  color: #4d4d4d;
}
</style>
