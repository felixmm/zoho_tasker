<template>
  <div class="row font-22 py-3 my-3 border">
    <div class="col-2">
      {{ props.item.us }}
    </div>
    <div class="col-2">
      {{ props.item.task }}
    </div>
    <div class="col-6">
      {{ props.item.title }}
    </div>
    <div class="col-2 text-center">
      {{ props.item.time }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  item: {
    type: Object,
    default: () => ({
      us: 0,
      task: 0,
      title: "",
      time: 0,
    }),
  },
});
</script>