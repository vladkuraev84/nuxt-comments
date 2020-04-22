<template>
  <div class="comments-wrapper">
    <div class="comments__header">
      <div class="comments__info">
        <p><b>Последние отзывы</b></p>
        <a href="#" @click.prevent="showAll()">Все отзывы</a>
      </div>
      <div class="comments__icons">
        <ul>
          <li><img src="~/assets/img/like.svg" alt="like"> {{ countLike }}</li>
          <li><img src="~/assets/img/sms.svg" alt="sms"> {{ countSms }}</li>
        </ul>
      </div>
    </div>
    <div class="comments">
      <ul class="comments__list">
        <Item />
      </ul>
    </div>
  </div>
</template>
<script>
  import Item from './item'

  export default {
    components: {
      Item
    },
    data: () => ({
      countLike: 131,
      countSms: 14
    })
  }
</script>
