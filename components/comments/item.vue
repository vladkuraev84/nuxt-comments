<template>
  <li class="comments__item">
    <div class="comment__header">
      <h4 class="comment__name"><b>{{ item.name ? item.name : 'Лилия Семеновна' }}</b></h4>
      <span class="comment__date">{{ item.dateItem ? item.dateItem : item.dateItem || formatDate }}</span>
    </div>
    <div class="comment__txt">
      <p>{{ item.comment }}</p>
    </div>
  </li>
</template>

<script>
  import moment from 'moment'

  export default {
    props: ['item'],
    data: () => ({
      myDate1: new Date(),
    }),
    filters: {
      formatDate: value => {
        if (value) {
          return moment(String(value)).format('DD MMMM YYYY')
        }
      },
    }
  }
</script>

<!--
formatDate: d => [
        [
          `0${d.getDate()}`.slice(-2),
          `${d.toLocaleString('default', { month: 'long' })}`,
          d.getFullYear(),
        ].join(' '),
      ].join(' '),
-->
