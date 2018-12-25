<template>
  <div class="bg-white">
      <div class="mx-1 px-4 flex items-center leading-none justify-between">
        <div class="flex-none md:mr-24">
          <router-link to="/"><img src="/img/logo.png" alt="" class="h-10"></router-link>
        </div>

        <div class="flex flex-col flex-1">
          <nav class="border-t-2 border-transparent flex justify-end md:justify-start">
            <a href="#0" class="inline-block text-sm border-b-4 border-blue-dark mx-2 px-4 py-4 md:py-5 text-blue-dark uppercase no-underline hover:underline focus:underline">Develop</a>
            <a href="#0" class="inline-block text-sm border-b-4 border-transparent mx-2 px-4 py-4 md:py-5 text-blue-dark uppercase no-underline hover:underline focus:underline">Manage</a>
          </nav>
        </div>

        <div class="hidden md:flex md:items-center">
          <div><a class="text-sm text-blue-dark no-underline hover:underline uppercase" href="#0">Help</a></div>
          <div class="ml-6"><button type="button">
            <span class="hidden">Menu</span>
            <svg class="fill-current text-blue-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><path id="select-product" class="cls-1" d="M.77,0h4A.76.76,0,0,1,5.5.77v4a.76.76,0,0,1-.77.77h-4A.76.76,0,0,1,0,4.73v-4A.76.76,0,0,1,.77,0ZM7.25.77v4A.76.76,0,0,0,8,5.5h4a.76.76,0,0,0,.77-.77v-4A.76.76,0,0,0,12,0H8A.76.76,0,0,0,7.25.77Zm7.25,0v4a.76.76,0,0,0,.77.77h4A.76.76,0,0,0,20,4.73v-4A.76.76,0,0,0,19.23,0h-4A.76.76,0,0,0,14.5.77ZM0,8v4a.76.76,0,0,0,.77.77h4A.76.76,0,0,0,5.5,12V8a.76.76,0,0,0-.77-.77h-4A.76.76,0,0,0,0,8ZM7.25,8v4a.76.76,0,0,0,.77.77h4a.76.76,0,0,0,.77-.77V8A.76.76,0,0,0,12,7.25H8A.76.76,0,0,0,7.25,8ZM14.5,8v4a.76.76,0,0,0,.77.77h4A.76.76,0,0,0,20,12V8a.76.76,0,0,0-.77-.77h-4A.76.76,0,0,0,14.5,8ZM0,15.27v4A.76.76,0,0,0,.77,20h4a.76.76,0,0,0,.77-.77v-4a.76.76,0,0,0-.77-.77h-4A.76.76,0,0,0,0,15.27Zm7.25,0v4A.76.76,0,0,0,8,20h4a.76.76,0,0,0,.77-.77v-4A.76.76,0,0,0,12,14.5H8A.76.76,0,0,0,7.25,15.27Zm7.25,0v4a.76.76,0,0,0,.77.77h4a.76.76,0,0,0,.77-.77v-4a.76.76,0,0,0-.77-.77h-4A.76.76,0,0,0,14.5,15.27Z"></path></svg>
          </button></div>
          <div class="ml-6"><button type="button">
            <span class="hidden">Activity</span>
            <svg class="h-6 w-6 text-blue-dark fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#objects__notification"></use></svg>
          </button></div>
          <div class="ml-6">
            <img class="w-5 h-5 rounded-full" src="https://avatars1.githubusercontent.com/u/339813?s=460&v=4" alt="">
          </div>
        </div>
      </div>
    </div>
</template>
