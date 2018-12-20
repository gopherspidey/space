<template>
  <div>
      <h1>Posts</h1>
        <div class="row">
          <div class="col-md-10"></div>
          <div class="col-md-2">
            <router-link :to="{ name: 'create' }" class="btn btn-primary">Create Post</router-link>
          </div>
        </div><br />

        <table class="table table-hover">
            <thead>
            <tr>
              <th>Title</th>
              <th>Body</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
                <tr v-for="SKU in SKUs" :key="SKU._id">
                  <td>{{ SKU.SKUName }}</td>
                  <td>{{ SKU.description }}</td>
                  <td><router-link :to="{name: 'edit', params: { id: SKU._id }}" class="btn btn-primary">Edit</router-link></td>
                  <td><button class="btn btn-danger">Delete</button></td>
                </tr>
            </tbody>
        </table>
  </div>
</template>

<script>
  export default {
      data() {
        return {
          SKUs: []
        }
      },
      created() {
      let uri = 'http://localhost:4000/sku';
      this.axios.get(uri).then(response => {
        this.SKUs = response.data;
      });
    },
    methods: {
      deletePost(id)
      {
        let uri = `http://localhost:4000/sku/delete/${id}`;
        this.axios.delete(uri).then(response => {
          this.posts.splice(this.SKUs.indexOf(id), 1);
        });
      }
    }
  }
</script>