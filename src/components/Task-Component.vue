<template>
  <div class="row">
    <div class="col-2">
      {{ props.task.dateKey }}
    </div>
    <div class="col-2">
      {{ props.task.usId }}
    </div>
    <div class="col-2">
      {{ props.task.taskId }}
    </div>
    <div class="col-2">
      {{ props.task.title }}
    </div>
    <div class="col-2">
      {{ props.task.time }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  task: {
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