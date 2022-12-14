<template>
    <header>
        <div>
            <img src="../assets/logo.png" alt="">
            <div>{{user}}</div>
        </div>
    </header>
</template>

<script>
    export default {
        props : ["user"]
    };
</script>