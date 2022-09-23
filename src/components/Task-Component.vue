<template>
  <div class="row font-22 py-3 my-3 border">
    <div class="col-2">
      {{ props.item.usId }}
    </div>
    <div class="col-2">
      {{ props.item.taskId }}
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
      dateKey: "",
      usId: 0,
      taskId: 0,
      title: "",
      time: 0,
    }),
  },
});
</script>