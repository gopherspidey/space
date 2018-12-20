<template>
  <div>
    <h1>Create A Post</h1>
    <form @submit.prevent="addPost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>SKU Name:</label>
            <input type="text" class="form-control" v-model="SKU.SKUName">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Post Body:</label>
              <textarea class="form-control" v-model="SKU.description" rows="5"></textarea>
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Create</button>
        </div>
    </form>
  </div>
</template>

<script>
    export default {
        data(){
        return {
          SKU:{}
        }
    },
    methods: {
      addPost(){
        let uri = 'http://localhost:4000/sku/add';
        this.axios.post(uri, this.SKU).then(() => {
            this.$router.push({name: 'posts'});
        });
      }
    }
  }
</script>