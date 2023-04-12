<script>
</script>

<template>
    <button class="play-btn"><i class="fa-solid fa-play"></i></button>
</template>

<style lang="scss" scoped>
    @use "../varibiliScss.scss" as *;
    .play-btn{
                    background-color: $paletteWhite;
                    color: $paletteBlue;
                    border: none;
                    border-radius: 50%;
                    font-size: 1.5em;
                    padding: 0.8em 1em;

                    &:hover{
                        background-color: $paletteBlue;
                        color: $paletteWhite;
                        border: 1px solid $paletteGrey;
                    }
                }
</style>