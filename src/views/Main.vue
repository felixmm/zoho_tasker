<template>
  <div class="row h-100">
    <div class="col-1 border-right black-bg">
      <action-menu
        :tasks="workDay.tasks"
        @on-zoho-text="showModal"
        @on-pr-text="showModal"
      />
    </div>
    <vue-final-modal
      v-model="viewModal"
      class="w-75 h-75 m-auto modal-wrap"
      :click-to-close="false"
    >
      <div class="position-sticky top-0 end-0 text-end">
        <button type="button" class="btn" @click="closeModal">
          <i class="fa-solid fa-circle-xmark del-btn font-26" />
        </button>
      </div>
      <div class="px-4">
        <div
          v-for="(message, index) in messageList"
          :key="index"
          class="p-3 modal-text"
        >
          <div class="text-end">
            <button
              :id="'copy-clipboard-' + index"
              class="btn copy-clipboard-btn"
              @click="copyToClipboard(message.text, index)"
            >
              <i class="fa-regular fa-copy" />
              <label>Copy to Clipboard</label>
            </button>
          </div>
          <span v-if="message.us" class="bold blue-us" v-html="message.us" />
          <span v-html="message.text" />
          <span
            v-if="message.hours"
            class="bold yellow-us"
            v-html="message.hours"
          />
        </div>
      </div>
    </vue-final-modal>
    <div class="col-11">
      <date-picker @on-date-change="onDateChange($event)" />
      <div>
        <!-- Headers -->
        <div
          class="
            row
            font-24
            text-center
            border-bottom
            white
            fw-bold
            py-3
            black-bg
          "
        >
          <div class="col-2">
            <label>US</label>
          </div>
          <div class="col-2">
            <label>Task</label>
          </div>
          <div class="col-5">
            <label>Title</label>
          </div>
          <div class="col-2">
            <label>
              Time
              <span class="fw-normal">({{ totalTime }}h)</span>
            </label>
          </div>
        </div>
        <!-- Headers End -->

        <!-- Task List -->
        <task-item
          v-for="task in workDay.tasks"
          :key="task.task"
          :item="task"
          @on-edit="editItem($event)"
          @on-delete="deleteItem($event)"
        />
        <!-- Task List End -->
      </div>

      <add-task-item
        v-if="viewAddTask"
        :item="currentTask"
        @on-save="saveItem($event)"
        @on-cancel="hideAddTask()"
      />

      <!-- Dev buttons -->
      <div v-if="isDevelopment" class="fixed-bottom">
        <button @click="clear()">Clear All</button>
        <button @click="viewAll()">View All</button>
      </div>
      <!-- Dev buttons End-->

      <div v-if="!viewAddTask" class="position-fixed bottom-0 end-0 text-end">
        <button type="button" class="btn" @click="addNewTask">
          <i class="fa-solid fa-circle-plus font-50 p-3 plus-btn" />
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed, onMounted, inject } from "vue";
import moment from "moment";
import DatePicker from "@/components/DatePicker.vue";
import TaskItem from "@/components/TaskItem.vue";
import AddTaskItem from "@/components/AddTaskItem.vue";
import ActionMenu from "@/components/ActionMenu.vue";

import {
  getWorkDay,
  setWorkDay,
  dateKeyExists,
  saveTask,
  deleteTask,
  clearAll,
  getAll,
} from "@/data/storeManager";

export default {
  name: "MainView",
  components: {
    DatePicker,
    TaskItem,
    AddTaskItem,
    ActionMenu,
  },
  setup() {
    const workDay = ref({
      dateKey: "",
      tasks: [],
    });

    // Date
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

    // Time
    const totalTime = computed(() =>
      workDay.value.tasks.reduce((total, item) => total + item.time, 0)
    );

    // Tasks
    const viewAddTask = ref(false);
    const currentTask = ref({});

    function addNewTask() {
      currentTask.value = null;
      viewAddTask.value = true;
    }

    function hideAddTask() {
      viewAddTask.value = false;
    }

    function saveItem(input) {
      saveTask(dateKey.value, input);
      hideAddTask();
      checkWorkDay();
    }

    function editItem(input) {
      deleteItem(input);
      currentTask.value = input;
      viewAddTask.value = true;
    }

    function deleteItem(input) {
      deleteTask(dateKey.value, input);
      checkWorkDay();
    }

    // Modal
    const viewModal = ref(false);
    const messageList = ref([]);

    function showModal(value) {
      messageList.value = value;
      viewModal.value = true;
    }

    function closeModal() {
      messageList.value = [];
      viewModal.value = false;
    }

    function copyToClipboard(text, index) {
      const button = document.getElementById("copy-clipboard-" + index);
      button.children[1].innerHTML = "Copied!";
      setTimeout(() => {
        button.children[1].innerHTML = "Copy to Clipboard";
      }, 1200);

      const cleanText = text.replace(/(<([^>]+)>)/gi, "").trim();
      navigator.clipboard.writeText(cleanText);
    }

    /********** For development **********/

    const isDevelopment = inject("isDevelopment");

    function clear() {
      clearAll();
      checkWorkDay();
    }

    function viewAll() {
      const allTasks = getAll();
      console.log("All Workdays and tasks: ", allTasks);
    }

    /********** For development End **********/

    onMounted(() => checkWorkDay());

    return {
      onDateChange,
      workDay,
      totalTime,
      viewAddTask,
      addNewTask,
      hideAddTask,
      editItem,
      saveItem,
      currentTask,
      deleteItem,
      viewModal,
      showModal,
      closeModal,
      copyToClipboard,
      messageList,
      isDevelopment,
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

.modal-wrap {
  height: 75%;
  overflow-y: scroll;
}

.modal-text {
  background-color: var(--bs-body-bg);
}
</style>
