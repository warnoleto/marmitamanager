<template>
  <dropdown text="Dropdown">
    <li><a href="link">Option</a></li>
  </dropdown>
</template>

<script>
import VueStrap from 'vue-strap'
export default {
  data () {
    return {
    }
  },
  components: {
    dropdown: VueStrap.dropdown
  }
}
</script>

