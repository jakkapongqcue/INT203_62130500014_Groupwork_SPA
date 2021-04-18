<template>

    <add-card>
      <div class="flex text-sm mt-2">
        <button
          class="inline-flex items-center focus:outline-none"
          @click="focusIn" >
          <i class="material-icons mr-3">add</i>
          <p class="font-mono ">Click to add task</p>
        </button>
      </div>
      <form @submit.prevent="submitForm">
        <textarea
          placeholder="insert your note .."
          class="textArea ring-1 ring-gray-300"
          :class="{'bg-red-50 ring-red-500': invalidInput,'ring-blue-500': !invalidInput}"
          type="text"
          v-model="noteText"
          @blur="validating"
        ></textarea>
        <button class="btn" @click="validating">Submit</button>
      </form>
    </add-card>

    <div class="flex flex-wrap justify-center ">
      <div class="container p-4 max-w-xs shadow rounded m-4 dark:bg-gray-800 dark:text-gray-200" 
        v-for="notes in NoteBooks" :key="notes.datetime">
      <note-item :noteb="notes" @click-edit="showData" @click-delete="deleteData" />
      </div>
    </div>

</template>

<script>
import AddCard from "@/components/AddCard.vue";
const axios = require("axios");

export default {
  name: "note",
  components: {
    AddCard,
  },
  data() {
    return {
      url: "http://localhost:5000/NoteBooks",
      noteText: "",
      datetime: "",
      invalidInput: false,
      NoteBooks: [],
      isEdit: false,
    };
  },
  methods: {
    submitForm() {
      this.invalidInput = this.noteText === "" ? true : false;
      var time = new Date();
      if (this.noteText !== "") {
        if (this.isEdit) {
          this.editNote({
            id: this.editId,
            datetime: time.toLocaleString("en-GB", { hour12: true }),
            note: this.noteText,
          });
        } else {
          this.addNewNote({
            datetime: time.toLocaleString("en-GB", { hour12: true }),
            note: this.noteText,
          });
        }
      }
      this.noteText = "";
      this.datetime = "";
    },

    validating() {
      this.invalidInput = this.noteText === "" ? true : false;
    },
    focusIn() {
      this.invalidInput = !this.invalidInput === "" ? true : false;
    },
    showData(oldNote) {
      this.isEdit = true;
      this.editId = oldNote.id;
      this.noteText = oldNote.note;
      this.datetime = oldNote.datetime;
    },

    editNote(editingNote) {
      axios
        .put(`${this.url}/${editingNote.id}`, {
          note: editingNote.note,
          datetime: editingNote.datetime,
        })
        .catch((error) => {
          console.log(error);
        })
        .then((response) => {
          this.NoteBooks = this.NoteBooks.map((nb) =>
            nb.id === editingNote.id
              ? { ...nb, note: response.data.note, datetime: response.data.datetime }
              : nb
          );
          this.isEdit = false;
          this.editId = "";
          this.noteText = "";
          this.datetime = "";
          return response.data;
        });
    },

    deleteData(id) {
      axios
        .delete(`${this.url}/${id}`)
        .then((response) => {
          return response.data;
        })
        .then(() => {
          this.NoteBooks = this.NoteBooks.filter((n) => n.id !== id);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    addNewNote(newNote) {
      axios
        .post(this.url, {
          note: newNote.note,
          datetime: newNote.datetime,
        })
        .then((response) => {
          this.NoteBooks = [...this.NoteBooks, response.data];
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    getNoteResult() {
      axios
        .get(this.url)
        .then((response) => {
          this.NoteBooks = response.data;
          return response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  created() {
    this.NoteBooks = this.getNoteResult();
  },
  
};
</script>
