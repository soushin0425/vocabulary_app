<template>
    <div class="col-auto px-0">
        <div id="menuSidebar" class="collapse collapse-horizontal">
            <div id="sidebar-nav" class="list-group rounded-0 rounded-end vh-100 bg-dark">
                <router-link to="/" class="btn btn-outline-light m-2">
                + New Project
                </router-link>
            </div>
        </div>
    </div>


</template>
  
<script>
export default {
    name: 'Sidebar',
}
</script>

<style>
#sidebar-nav{
  width: 260px;
}

</style>
  