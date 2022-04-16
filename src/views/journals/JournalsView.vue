<template>
    <div id="journals">
        <h1>Journals</h1>
        <p>CRUD for shops</p>
    <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Content</th>           
            <th scope="col">Actions</th>
          </tr>
        </thead>
         <tbody>
          <tr v-for="journal in journals" :key="journal._id">
            <td>{{ journal.content }}</td>
            
        
            <td>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group" style="margin-bottom: 20px;">
                  <router-link :to="{name: 'editJournal', params: {id: journal.id}}" class="btn btn-sm btn-outline-secondary">Edit</router-link>
                  <button class="btn btn-sm btn-outline-secondary" v-on:click="deleteJournal(journal.id)">Delete</button>
                </div>
              </div>
            </td>
          </tr>
        </tbody> 
      </table>
          <router-link to="/journals/add" class="btn btn-success">Create journal</router-link>

    </div>
</template>

<script>
import axios from "axios"
export default {
 
 data() {
   return {
     journals: []
   }
 },
  
  name: 'ShopsView',

  created() {
    this.fetchJournals();
  },

  methods: {
    fetchJournals(){
      axios.get('http://127.0.0.1:8000/api/journal/', process.env.JWT_SECRET).then(data => (this.journals = data.data));
    },
    deleteJournal(id){
      
      axios.delete(`http://127.0.0.1:8000/api/journal/delete/${id}`)
      .then(data => {
          console.log(data);
        window.location.reload();
      })
      .catch(function (error) {
                console.log(error.response)
             })
    }
  },
  
  
};
</script>