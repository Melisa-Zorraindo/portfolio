<script lang="ts">
  export let time: Date = new Date();

  const hours: string = String(time.getHours()).padStart(2, '0');
  const minutes: string = String(time.getMinutes()).padStart(2, '0');
  const seconds: string = String(time.getSeconds()).padStart(2, '0');
</script>

<span class="time"> {hours}:{minutes}:{seconds} </span>

<style>
  .time {
    color: #afd7f3;
  }
</style>