<template>
  <div>
    <date-picker @on-date-change="onDateChange($event)" />
    <task-item v-for="task in workDay.tasks" :key="task.task" :item="task" />
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import moment from "moment";
import DatePicker from "@/components/DatePicker.vue";
import TaskItem from "@/components/TaskItem.vue";

import { getWorkDay, setWorkDay, dateKeyExists } from "@/data/storeManager";

export default {
  name: "MainView",
  components: {
    DatePicker,
    TaskItem,
  },
  setup() {
    const workDay = ref({
      dateKey: "",
      tasks: [],
    });

    // Date logic
    const checkWorkDay = () => {
      const keyExists = dateKeyExists(dateKey.value);
      if (!keyExists) {
        const currentDay = {
          dateKey: dateKey.value,
          tasks: [],
        };
        setWorkDay(currentDay);
      }

      workDay.value = getWorkDay(dateKey.value);
    };

    const date = ref(new Date());
    const dateKey = computed(() => moment(date.value).format("YYYYmmDD"));
    const onDateChange = (d) => {
      date.value = d;
      checkWorkDay();
    };

    onMounted(() => checkWorkDay());

    return {
      onDateChange,
      workDay,
    };
  },
};
</script>

<style scoped></style>
