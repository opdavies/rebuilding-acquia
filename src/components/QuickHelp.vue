<template>
  <div class="bg-white border-t-10 border-purple flex mb-6">
    <div class="flex-none py-3 pl-3 pr-8 border-r border-grey-lighter">
      <div class="flex items-center">
        <svg class="h-6 w-6 mr-1 text-purple fill-current" role="presentation"><use xlink:href="icons.symbol.svg#actions__info"></use></svg>
        Quick help
      </div>
    </div>

    <div class="p-4">
      <div class="flex mb-6">
        <button type="button" class="text-grey-darkest hover:underline mr-6">Deploying code</button>
        <button type="button" class="text-blue-dark hover:underline mr-6">Copying files</button>
        <button type="button" class="text-blue-dark hover:underline mr-6">Copying database</button>
        <button type="button" class="text-blue-dark hover:underline ">Task Log</button>
      </div>
      <div class="leading-normal">
        <p>Drag a code element from one environment to another environment, which creates a new tag for the HEAD of that branch and then deploys the tag. Learn more</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>
