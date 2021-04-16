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

    <!-- 00000000000000000000000000000000000000000000000000000000000000000 -->
    
    <div class="flex flex-wrap justify-center ">
      <div class="container p-4 max-w-xs shadow rounded m-4 dark:bg-gray-800 dark:text-gray-200" 
        v-for="notes in NoteBooks" :key="notes.datetime">
      <note-item :notes="notes" @click-edit="showData" @click-delete="deleteData" />
      </div>
    </div>

</template>

<script>
import AddCard from "@/components/AddCard.vue";
const axios = require("axios");

export default {
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
    };
  },
  methods: {
    submitForm() {
      this.invalidInput = this.noteText === "" ? true : false;
      var time = new Date();
      if (this.noteText !== "") {
        // this.NoteBooks.push({
        //   datetime: time.toLocaleString("en-GB", { hour12: true }),
        //   note: this.noteText,
        // });
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

      //   for (const i of this.NoteBooks) {
      //     console.log(`date-time: ${i.datetime}  note: ${i.note}`);
      //   }
      //   console.log("yess");
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

    async editNote(editingNote) {
      try {
        const res = await fetch(`${this.url}/${editingNote.id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            note: editingNote.note,
            datetime: editingNote.datetime,
          }),
        });
        const data = await res.json();
        this.NoteBooks = this.NoteBooks.map((survey) =>
          survey.id === editingNote.id
            ? { ...survey, note: data.note, datetime: data.datetime }
            : survey
        );
        this.isEdit = false;
        this.editId = "";
        this.noteText = "";
        this.datetime = "";
      } catch (error) {
        console.log(`Could not edit! ${error}`);
      }
    },

    async getNoteResult() {
      try {
        const res = await fetch(this.url);
        const data = res.json();
        return data;
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
    },

    //  deleteData(deleteid) {
    //   try {
    //     await fetch(`${this.url}/${deleteid}`, {
    //       method: "DELETE",
    //     });
    //     this.NoteBooks = this.NoteBooks.filter(
    //       (suvrey) => suvrey.id !== deleteid
    //     );
    //   } catch (error) {
    //     console.log(`Could not save! ${error}`);
    //   }
    // },
    
    deleteData(id){
      axios.delete(this.url + '/' + id).then((response) => {
        return response.data
      }).catch((error) => {
        console.log(error)
      }).then(() => {
        this.NoteBooks = this.NoteBooks.filter(
        (note) => note.id !== id);
      })
    },

    async addNewNote(newNote) {
      try {
        const res = await fetch(this.url, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            note: newNote.note,
            datetime: newNote.datetime,
          }),
        });
        const data = await res.json();
        this.NoteBooks = [...this.NoteBooks, data];
      } catch (error) {
        console.log(`Could not save! ${error}`);
      }
    },
  },

  async created() {
    this.NoteBooks = await this.getNoteResult();
  },
};
</script>

<style></style>
