<template>
  <div>
    <date-picker @on-date-change="onDateChange($event)" />
    <div v-for="task in tasks" :key="task.taskId">
      <task :task="task" />
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";
import moment from "moment";
import DatePicker from "@/components/Datepicker-Component.vue";
import Task from "@/components/Task-Component.vue";

export default {
  name: "MainView",
  components: {
    DatePicker,
    Task,
  },
  setup() {
    const date = ref(new Date());
    const dateKey = computed(() => moment(date.value).format("YYYYmmDD"));
    const onDateChange = (d) => (date.value = d);

    const tasks = ref([
      {
        dateKey: "20220922",
        usId: 123,
        taskId: 1123,
        title: "First Task",
        time: 3,
      },
      {
        dateKey: "20220923",
        usId: 456,
        taskId: 4456,
        title: "Second Task",
        time: 5,
      },
    ]);

    return {
      onDateChange,
      dateKey,
      tasks,
    };
  },
};
</script>

<style scoped>
</style>