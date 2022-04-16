<template>
  <div>
    <h4 class="text-center mt-20">
      <small>
        <button class="btn btn-success" v-on:click="navigate()">To Journals</button>
      </small>
    </h4>
    <div class="col-md-12 form-wrapper">
      <h2>Edit journal`s data</h2>
      <form id="create-post-form" @submit.prevent="editJournal">
          <div class="form-group col-md-12">
          <input type="text" id="content" v-model="journal.content" name="content" class="form-control" placeholder="Enter content">
        </div>       
        <div class="form-group col-md-4 pull-right">
          <button class="btn btn-success" type="submit">Edit</button>
        </div>
      </form>
    </div>
  </div>
</template>


// <script>
import axios from "axios";
import router from "../../router";
export default {
  data() {
    return {
      id: 0,
      journal: {}
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getJournal();
  },
  methods: {
    editJournal() {
      let journalData = {
        content: this.journal.content,
        
      };
      axios
        .put(
          `http://127.0.0.1:8000/api/journal/edit/${this.id}`,journalData)
        .then(() => {
          router.push({ name: "journals" });
        });
    },
    getJournal() {
      axios
        .get(`http://127.0.0.1:8000/api/journal/${this.id}`)
        .then(data => (this.journal = data.data));
    },
    navigate() {
      router.go(-1);
    }
  }
};
</script>