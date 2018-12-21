<template>
  <div>
    <div class="bg-white">
      <div class="mx-1 px-4 flex items-center leading-none">
        <div class="mr-24">
          <a href="#0"><img src="img/logo.png" alt="" class="h-10"></a>
        </div>

        <div class="flex flex-col flex-1">
          <nav class="border-t-2 border-transparent">
            <a href="#0" class="inline-block text-sm border-b-4 border-blue-dark mx-2 px-4 py-5 text-blue-dark uppercase no-underline hover:underline focus:underline">Develop</a>
            <a href="#0" class="inline-block text-sm border-b-4 border-transparent mx-2 px-4 py-5 text-blue-dark uppercase no-underline hover:underline focus:underline">Manage</a>
          </nav>
        </div>

        <div class="flex items-center">
          <div><a class="text-sm text-blue-dark no-underline hover:underline uppercase" href="#0">Help</a></div>
          <div class="ml-6"><button type="button">
            <span class="hidden">Menu</span>
            <svg class="fill-current text-blue-dark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"><path id="select-product" class="cls-1" d="M.77,0h4A.76.76,0,0,1,5.5.77v4a.76.76,0,0,1-.77.77h-4A.76.76,0,0,1,0,4.73v-4A.76.76,0,0,1,.77,0ZM7.25.77v4A.76.76,0,0,0,8,5.5h4a.76.76,0,0,0,.77-.77v-4A.76.76,0,0,0,12,0H8A.76.76,0,0,0,7.25.77Zm7.25,0v4a.76.76,0,0,0,.77.77h4A.76.76,0,0,0,20,4.73v-4A.76.76,0,0,0,19.23,0h-4A.76.76,0,0,0,14.5.77ZM0,8v4a.76.76,0,0,0,.77.77h4A.76.76,0,0,0,5.5,12V8a.76.76,0,0,0-.77-.77h-4A.76.76,0,0,0,0,8ZM7.25,8v4a.76.76,0,0,0,.77.77h4a.76.76,0,0,0,.77-.77V8A.76.76,0,0,0,12,7.25H8A.76.76,0,0,0,7.25,8ZM14.5,8v4a.76.76,0,0,0,.77.77h4A.76.76,0,0,0,20,12V8a.76.76,0,0,0-.77-.77h-4A.76.76,0,0,0,14.5,8ZM0,15.27v4A.76.76,0,0,0,.77,20h4a.76.76,0,0,0,.77-.77v-4a.76.76,0,0,0-.77-.77h-4A.76.76,0,0,0,0,15.27Zm7.25,0v4A.76.76,0,0,0,8,20h4a.76.76,0,0,0,.77-.77v-4A.76.76,0,0,0,12,14.5H8A.76.76,0,0,0,7.25,15.27Zm7.25,0v4a.76.76,0,0,0,.77.77h4a.76.76,0,0,0,.77-.77v-4a.76.76,0,0,0-.77-.77h-4A.76.76,0,0,0,14.5,15.27Z"></path></svg>
          </button></div>
          <div class="ml-6"><button type="button">
            <span class="hidden">Activity</span>
            <svg class="h-6 w-6 text-blue-dark fill-current" role="presentation"><use xlink:href="icons.symbol.svg#objects__notification"></use></svg>
          </button></div>
          <div class="ml-6">
            <img class="w-5 h-5 rounded-full" src="https://accounts.acquia.com/images/users/04950d70-7265-4ca7-9a52-2108961edb65/style/avatar" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="px-4 py-5 border-b-2 border-grey flex justify-between">
      <div>
        <div class="text-xs mb-3">
          <ol class="list-reset flex">
            <li class="mr-6"><a href="#0" class="text-blue-dark no-underline hover:underline">Applications</a></li>
            <li>{{ name }}</li>
          </ol>
        </div>

        <div class="flex items-center">
          <div class="text-2xl font-hairline mr-2">{{ name }}</div>
          <svg class="h-6 w-6 text-blue-dark fill-current" role="presentation"><use xlink:href="icons.symbol.svg#actions__down-arrow"></use></svg>
        </div>
      </div>

      <div>
        <ul class="list-reset flex">
          <li>
            <button type="button" class="text-xs text-blue-dark no-underline hover:underline flex flex-col items-center justify-center">
              <svg class="h-6 w-6 text-blue-dark fill-current mb-2" role="presentation"><use xlink:href="icons.symbol.svg#actions__new-database"></use></svg>
              Add database
            </button>
          </li>

          <li class="ml-6">
            <button type="button" class="text-xs text-blue-dark no-underline hover:underline flex flex-col items-center justify-center">
              <svg class="h-6 w-6 text-blue-dark fill-current mb-2" role="presentation"><use xlink:href="icons.symbol.svg#actions__info"></use></svg>
              Git Info
            </button>
          </li>

          <li class="ml-6">
            <button type="button" class="text-xs text-grey no-underline flex flex-col items-center justify-center cursor-not-allowed" disabled>
              <svg class="h-6 w-6 fill-current mb-2" role="presentation"><use xlink:href="icons.symbol.svg#actions__edit"></use></svg>
              Rename
            </button>
          </li>
        </ul>
      </div>
    </div>

    <div class="flex flex-row-reverse h-full">
      <div class="flex-1 p-12">
        <div class="mb-6">
          <div class="flex items-start justify-between">
            <div class="flex items-baseline">
              <div class="mr-6">
                <h1 class="text-4xl font-thin mb-2">Environments</h1>
              </div>

              <div class="flex-1">
                <toggle-help @toggle="help.hidden = !help.hidden" :hidden="help.hidden"></toggle-help>
              </div>
            </div>

            <div class="w-1/5">
              <form action="#">
                <input type="text" placeholder="Filter environments" class="w-full py-2 px-3 border border-grey-darker rounded">
              </form>
            </div>
          </div>

          <div>
            <ul class="list-reset flex -mr-2">
              <li class="text-2xs uppercase py-1 px-2 rounded border border-transparent bg-blue-light text-white mr-2">Drupal</li>
              <li class="text-2xs uppercase py-1 px-2 rounded border border-grey bg-white mr-2">Enterprise</li>
            </ul>
          </div>
        </div>

        <quick-help :hidden="help.hidden"></quick-help>
        <environment-cards></environment-cards>
        <task-log></task-log>
      </div>

      <div class="w-64 bg-grey-darkest text-white antialiased">
        <div>
          <ul class="list-reset">
            <li>
              <a href="#0" class="flex items-center text-white no-underline hover:underline focus:underline border-l-6 border-blue px-4 py-5 hover:bg-grey-darker">
                <svg class="h-6 w-6 text-white fill-current mr-4" role="presentation"><use xlink:href="icons.symbol.svg#alpha__grid"></use></svg>
                Environments
              </a>
            </li>
            <li>
              <div class="flex items-center text-grey no-underline hover:underline focus:underline border-l-6 border-transparent px-4 py-5 cursor-not-allowed hover:bg-grey-darker">
                <svg class="h-6 w-6 text-grey fill-current mr-4" role="presentation"><use xlink:href="icons.symbol.svg#locations__keys"></use></svg>
                Product Keys
              </div>
            </li>
              <div class="flex items-center text-grey no-underline hover:underline focus:underline border-l-6 border-transparent px-4 py-5 cursor-not-allowed hover:bg-grey-darker">
                <svg class="h-6 w-6 text-grey fill-current mr-4" role="presentation"><use xlink:href="icons.symbol.svg#alpha__security"></use></svg>
                Security
              </div>
            </li>
            <li>
              <a href="#0" class="flex items-center text-white no-underline hover:underline focus:underline border-l-6 border-transparent px-4 py-5 hover:bg-grey-darker">
                <svg class="h-6 w-6 text-white fill-current mr-4" role="presentation"><use xlink:href="icons.symbol.svg#actions__search"></use></svg>
                Acquia Search
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EnvironmentCards from './EnvironmentCards'
import QuickHelp from './QuickHelp'
import TaskLog from './TaskLog'
import ToggleHelp from './ToggleHelp'

export default {
  components: {
    EnvironmentCards,
    QuickHelp,
    TaskLog,
    ToggleHelp,
  },

  data() {
    return {
      name: 'Rebuilding Acquia',
      help: {
        hidden: false,
      }
    }
  }
}
</script>
