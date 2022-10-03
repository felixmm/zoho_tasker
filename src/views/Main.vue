<template>
  <div>
    <date-picker @on-date-change="onDateChange($event)" />
    <task-item v-for="task in workDay.tasks" :key="task.task" :item="task" />
    <add-task-item
      v-if="viewAddTask"
      @on-save="save($event)"
      @on-cancel="hideAddTask()"
    />

    <!-- Dev buttons -->
    <div class="fixed-bottom">
      <button @click="clear()">Clear All</button>
      <button @click="viewAll()">View All</button>
    </div>
    <!-- Dev buttons End-->

    <div class="add-task-btn text-end">
      <button type="button" class="btn" @click="showAddTask()">
        <i class="fa-solid fa-circle-plus font-50 plus-btn" />
      </button>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted } from "vue";
import moment from "moment";
import DatePicker from "@/components/DatePicker.vue";
import TaskItem from "@/components/TaskItem.vue";
import AddTaskItem from "@/components/AddTaskItem.vue";

import {
  getWorkDay,
  setWorkDay,
  dateKeyExists,
  saveTask,
  clearAll,
  getAll,
} from "@/data/storeManager";

export default {
  name: "MainView",
  components: {
    DatePicker,
    TaskItem,
    AddTaskItem,
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
    const dateKey = computed(() => moment(date.value).format("YYYYMMDD"));
    const onDateChange = (d) => {
      date.value = d;
      checkWorkDay();
    };

    // Add Tasks
    const viewAddTask = ref(false);

    function showAddTask() {
      viewAddTask.value = true;
    }

    function hideAddTask() {
      viewAddTask.value = false;
    }

    function save(input) {
      saveTask(dateKey.value, input);
      this.model;
      checkWorkDay();
    }

    /********** For development **************/

    function clear() {
      clearAll();
      checkWorkDay();
    }

    function viewAll() {
      const allTasks = getAll();
      console.log("All Workdays and tasks: ", allTasks);
    }

    onMounted(() => checkWorkDay());

    return {
      onDateChange,
      workDay,
      viewAddTask,
      showAddTask,
      hideAddTask,
      save,
      clear,
      viewAll,
    };
  },
};
</script>

<style scoped>
.add-task-btn {
  position: fixed;
  right: 20px;
  bottom: 15px;
  left: 0;
  z-index: 1030;
}
</style>
