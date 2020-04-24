<template>
  <div class="wrapper">
    <User />
    <Comments />
  </div>
</template>

<script>
import Comments from '~/components/comments'
import User from '~/components/user'

export default {
  components: {
    Comments,
    User
  }
}
</script>

<style scoped>

</style>
