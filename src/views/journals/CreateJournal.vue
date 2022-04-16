<template>
  <div class="d-flex">
    <div class="col-md-12 form-wrapper">
      <h2> Add shop</h2>
      <form id="create-post-form" @submit.prevent="createJournal">
        <div class="form-group col-md-12">
          
          <input type="text" id="name" v-model="content" name="name" class="form-control" placeholder="Enter content">
        </div>
                
        <div class="form-group col-md-4 pull-right">
            <button class="btn btn-success" type="submit">Add</button>
        </div>
      </form>
    </div>
  </div>
</template>




<script>
import axios from "axios";
import router from "../../router";
export default {
  
  data() {
      return {
        content: "",        
      }
  },
  
  methods: {
    createJournal() {
      let JournalData = {
        content: this.content,
        
      };
      this.submitToServer(JournalData);
    },

    /* eslint-disable */

    submitToServer(data) {
      axios.post(`http://127.0.0.1:8000/api/journal/add`, data)
      
      .then ( data => {
        router.push({ name: "journals" });
      });
    },
  }
};
</script>