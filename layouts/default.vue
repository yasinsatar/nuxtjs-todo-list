<template>
  <div>
    <nuxt/>
  </div>
</template>

<style>
    body {
      background-color: #dedede;
    }

    .update-container {
      background-color: rgba(0, 0, 0, .8);
      position: absolute;
      margin:0;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      z-index: 1;
      visibility: hidden;
    }

    .update-container.show{
      visibility: visible !important;
    }

    .main-container {
      z-index: 0;
    }

</style>
