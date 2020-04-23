<template>
  <li class="comments__item">
    <div class="comment__header">
      <h4 class="comment__name">{{item.name}}{{item.id}}</h4>
      <span class="comment__date">14 october 2011 г.</span>
    </div>
    <div class="comment__txt">
      <p>{{ item.comment }}</p>
    </div>
  </li>
</template>

<script>
  export default {
    props: ['item']
  }
</script>
