<template>
  <li class="comments__item">
    <div class="comment__header">
      <h4 class="comment__name"><b>{{ name }}</b></h4>
      <span class="comment__date">{{ dateMoment }}</span>
    </div>
    <div class="comment__txt">
      <p>{{ comment }}</p>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'Лилия'
    },
    comment: {
      type: String,
      default: ''
    },
    dateItem: {
      type: Date,
      default: () => new Date()
    }
  },
  computed: {
    dateMoment() {
      return this.$moment(this.dateItem).format('DD MMMM YYYY')
    }
  }
}
</script>

