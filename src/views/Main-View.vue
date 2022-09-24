<template>
  <div>
    <date-picker @on-date-change="onDateChange($event)" />
    <div v-for="task in tasks" :key="task.taskId">
      <task :item="task" />
    </div>
    <button @click="getStory">Try and get a story QQ</button>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import moment from "moment";
import DatePicker from "@/components/Datepicker-Component.vue";
import Task from "@/components/Task-Component.vue";

import { setUserStory, getUserStory } from "@/data/storeManager";

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

    const getStory = () => {
      const story = getUserStory(dateKey);
      console.log("From db then? ", story);
    };

    onMounted(() => {
      const userStory = {
        dateKey: dateKey.value,
        us: 123,
        task: 1123,
        title: "came from db?",
        time: 1,
      };
      console.log("trying to save this ", userStory);
      setUserStory(userStory);
    });

    return {
      onDateChange,
      dateKey,
      tasks,
      getStory,
    };
  },
};
</script>

<style scoped></style>
