<template>
    <div class="flex p-0 border-b">
        <span class="font-mono text-sm">Date: {{ noteb.datetime }}</span>
        <button @click="showData(noteb)" class="ml-auto">
        <span class="material-icons">edit</span>
        </button>
        <button @click="deleteData(noteb.id)" class="ml-auto">
        <i class="material-icons">delete</i>
        </button>
    </div>
    <ul>
        <li>
        <pre>{{ noteb.note }}</pre>
        </li>
    </ul>
</template>

<script>
export default {
    name: "noteb item",
    props:{
        noteb:Object,
    },
    methods: {
        showData(){
            this.$emit('click-edit',this.noteb)
        },
        deleteData(){
            this.$emit('click-delete', this.noteb.id)
        }
    },
}
</script>
