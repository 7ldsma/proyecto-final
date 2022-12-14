<template>
    <header>
        <div class="flex flex-row justify-between">
            <img src="../assets/logo.png" alt="" width="70">
            <div>{{user}}</div>
            <img src="../assets/Menuicon.png" alt="" width="50">
        </div>
    </header>
</template>

<script>
    export default {
        props : ["user"]
    };
</script>