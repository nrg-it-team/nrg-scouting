<template>
  <ErrorList :errors="errors" />
  <RouterView />
</template>

<script setup lang="ts">
import ErrorList from "@/components/ErrorList.vue";
import { onErrorCaptured } from "vue";

const errors = $ref(new Array<string>());

// Set handler to capture errors and push them to an array
onErrorCaptured(obj => {
  const errorToString = (e: Error) => `${e.name}: ${e.message}`;

  if (Array.isArray(obj)) errors.push(...obj.map(errorToString));
  else errors.push(errorToString(obj));

  return false;
});
</script>

<style>
:root {
  --text-color: #ddd;
  --bg-color: #292929;
  --button-color: #616161;
  --input-color: #1c1c1c;
}

* {
  color: var(--text-color);
  box-sizing: border-box;
}

img {
  display: block;
  user-select: none;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  background-image: url("https://doc-0c-c0-docs.googleusercontent.com/docs/securesc/t7b2pd65eovdvcmniskbp29lfnkafj05/ap9c2f3nqf1od5op2oj5325u8n3c20kn/1685916375000/14022008921827459023/09646710593562453047/1mxEZy2cQ_khO5iSGLJNgRssrT9ypPuuz?e=view&ax=ADWCPKDYKyl46n7oXl8ph1Z5cX7t2TapgsRbQvf-YuxsFP2HCdrlNVEZQ1q8aM3uUQiDJfqznKWHlksxckW-SBpQhl6_MzLNprcT0U50jKCEvl1gUd19QBlGzstZWvcad9dGLJwPoPW8kmrMjo91c0qe9UdinnUevtqt1YIhUAb7P0Sa7s2B7bnR-e-422V8O4t8cU-L0VNEgVZiVuzwtFOP1zkxXQtUNUIkuwWcar5NtkIkBBstZTA0NZ8vuta_Ryt3naX9uE-_kj4Jpw02zYvIs6cgXiS-bdT49_Ia51hMyZI349FbrW9ivsABM6lMuc29fMxVuKaBWhfiYXzPqFoSNrhgqlz90OYO2dKYPBsgR58fY-_F-uC73-iAL-nDZbGlYrmigI_ddM6gpVajf3UAVY5JXPxaG2S9aA68b-ZlAJ5GUMT-K_EKqSEMeqdPg4q8J265bOUYMe7E6aE8WDqSt18o1Sb2tT2Yc9NLsbbK6BSdHeHewO1Oyawrg4FbZE4Qi7H-PKvSQMJYCusD4ciIiPqEHpCjEhce72eXo_fkIrmR9Uz3XP5dn62sUj0TI-vT0j21aarbpMFGpZx3S0GB8p9CKbEWjcoFriI6dMzgnEpxlbIA6n0992jaY8oMTQ9Y06H_qU62OUSBANoTYETiQvFYQIGaN9ZcCy7HZ8cmpcMeGlnHJi6NPiJ6g1rzDM8ICTtAKZu-EvQ7lo7g0kMe_RQ2L1X_G0dmB4wmpQp5ck9zq1K3cy7xCvwxI8ytC5L_z5w2yI8T45-OHZK8YhOsdRHYj845yydAma7T6oYWukBmHD52ucOCp3Zje2FQtStpEgh8-4GpN874W-Iuzq9euG42nMl_jYjCvGDEaVqYNH5rPh9l5KLY6mGN7QVZdnlE7TW4d-fsxttx_aizfbI5Dg2ysvDmyZ5hLcwaPAu8d9uwxeEm4C-sxe1sHBTynNd04dNdvaVhzXuVOfqc5L2-1irt7W2OCnHQ5U1aXTUTpxO6nsMw8kNnUQeOjcSMWjyTqUDNk74BJZunfUppNw&uuid=662bc96e-aa4b-425d-b2a5-88d759f5304e&authuser=0");
  margin: 0;
}

button {
  background-color: var(--button-color);
  user-select: none;
  cursor: pointer;
}

input, select, textarea {
  background-color: var(--input-color);
}

button, input, select, textarea {
  font-size: 100%;
  border: none;
}

table {
  border-collapse: collapse;
}

td, th {
  border: 1px solid var(--text-color);
  padding: 2px;
}

@media (pointer:none),
(pointer:coarse) {

  button,
  input,
  select,
  label {
    font-size: 120%;
  }
}
</style>
