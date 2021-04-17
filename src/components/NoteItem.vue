<template>
    <div class="flex p-0 border-b">
        <span class="font-mono text-sm">Date: {{ notes.datetime }}</span>
        <button @click="showData(notes)" class="ml-auto">
        <span class="material-icons">edit</span>
        </button>
        <button @click="deleteData(notes.id)" class="ml-auto">
        <i class="material-icons">delete</i>
        </button>
    </div>
    <ul>
        <li>
        <span>{{ notes.note }}</span>
        </li>
    </ul>
</template>

<script>
export default {
    name: "note item",
    props:{
        notes:Object,
    },
    methods: {
        showData(){
            this.$emit('click-edit',this.notes)
        },
        deleteData(){
            this.$emit('click-delete', this.notes.id)
        }
    },
}
</script>
