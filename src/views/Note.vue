<template>
  <dir class="p-0 m-0">
    <add-card>
      <div class="flex text-sm mt-2">
        <button
          class="inline-flex items-center focus:outline-none"
          @click="focusIn"
        >
          <i class="material-icons mr-3">add</i>
          <p class="font-mono ">Click to add task</p>
        </button>
      </div>
      <form @submit.prevent="submitForm">
        <textarea
          placeholder="insert your note .."
          class="textArea ring-1 ring-gray-300"
          :class="{
            'bg-red-50 ring-red-500': invalidInput,
            'ring-blue-500': !invalidInput,
          }"
          type="text"
          v-model="noteText"
          @blur="validating"
        ></textarea>
        <button class="btn" @click="validating">Submit</button>
      </form>
    </add-card>

    <!-- <div :class="{ hidden: showNotes }">
      <span class="material-icons animate-spin delay-300:hidden">
        autorenew </span
      >Processing
    </div> -->
    <!-- 00000000000000000000000000000000000000000000000000000000000000000 -->
    <div class="flex flex-wrap justify-center ">
      <note-card v-for="notes in NoteBooks" :key="notes.datetime">
        <dir class="flex p-0 border-b">
          <span class="font-mono text-sm">Date: {{ notes.datetime }}</span>
          <button @click="showData(notes)" class="ml-auto">
            <span class="material-icons">edit</span>
          </button>
          <button @click="deleteData(notes.id)" class="ml-auto">
            <i class="material-icons">delete</i>
          </button>
        </dir>
        <ul>
          <li>
            <span>{{ notes.note }}</span>
          </li>
        </ul>
      </note-card>
    </div>
  </dir>
</template>

<script>
import AddCard from "@/components/AddCard.vue";

export default {
  components: {
    AddCard,
  },
  props: {},
  data() {
    return {
      noteText: "",
      datetime: "",
      invalidInput: false,
      NoteBooks: [],
    };
  },
  methods: {
    submitForm() {
      this.invalidInput = this.noteText === "" ? true : false;
      var time = new Date();
      if (this.noteText !== "") {
        this.NoteBooks.push({
          datetime: time.toLocaleString("en-GB", { hour12: true }),
          note: this.noteText,
        });
      }
      for (const i of this.NoteBooks) {
        console.log(`date-time: ${i.datetime}  note: ${i.note}`);
      }
      console.log("yess");
    },

    validating() {
      this.invalidInput = this.noteText === "" ? true : false;
    },
    focusIn() {
      this.invalidInput = !this.invalidInput === "" ? true : false;
    },
  }
};
</script>

<style></style>
