<template>
  <h1><span style="color: #CC0000">⚡ Upload</span><span style="color: #fac21b;"> Data ⚡</span></h1>
  <h2>1) Download</h2>
  <p style="font-size:1.4em">
  <span v-if="widgets.matchesDownloadLink === null">Matches (None)</span>
  <a v-else :download="`scouted-Matches.csv`" :href="widgets.matchesDownloadLink">Matches</a> |
  <span v-if="widgets.pitsDownloadLink === null">Pits (None)</span>
  <a v-else :download="`scouted-Pits.csv`" :href="widgets.pitsDownloadLink">Pits</a> |
  <span v-if="widgets.outreachDownloadLink === null">Outreach (None)</span>
  <a v-else :download="`scouted-Outreach.csv`" :href="widgets.outreachDownloadLink">Outreach</a></p>
  <h2 style="margin-top: 20px">2) Add to Drive</h2>
    <p style="font-size: 1.4em;">
      <a href="https://drive.google.com/drive/folders/1NtR30lREQ7iG0MDv68IyeY8xpLwR8bAr?usp=sharing" target="_blank" rel="noreferrer noopener">Matches</a> |
      <a href="https://drive.google.com/drive/folders/1v3QXy6MBwSYVFjoAW8mT6sXGdrq67-1z?usp=sharing" target="_blank" rel="noreferrer noopener">Pits</a> |
      <a href="https://drive.google.com/drive/folders/1HPsNYshzWU4ui0JbbwP4etr38vCQrwNm?usp=sharing" target="_blank" rel="noreferrer noopener">Outreach</a>
    </p>
  <p style="margin-top: 50px; font-size: 1.3em;"><RouterLink :to="{ name: 'home' }">🏠 Home</RouterLink></p>
  <p style="margin-top: 10px">Need help? Check out the <a href="https://youtu.be/UmP2YxNzfv4" target="_blank" rel="noreferrer noopener">tutorial</a>.</p>
  <p style="margin-top: 10px">Made with ❤️ by the NRG IT Team.</p>
</template>

<script setup lang="ts">


import { computed } from "vue";
import { useConfigStore, useWidgetsStore } from "@/common/stores";
import { useRouter } from "vue-router";

const config = useConfigStore();
const widgets = useWidgetsStore();
const router = useRouter();



function clearForm() {
  widgets.save();
  router.go(0); // Reload the page
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
</style>
