<template>
  <div>
    <div class="bg-grey-light pb-4 pt-6 px-4">
      <h2 class="font-normal text-lg">Task Log</h2>
    </div>
    <div>
      <ul class="list-reset bg-white">
        <li v-for="item in items" :key="item.text" class="px-3 py-4 border-b border-grey-light flex">
          <div class="flex-none mr-3">
            <svg v-if="item.loading" class="h-5 w-5 text-grey fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#feedback__loading"></use></svg>
            <svg v-if="!item.loading && item.success" class="h-5 w-5 text-green fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#feedback__success-circle"></use></svg>
            <svg v-if="!item.loading && !item.success" class="h-5 w-5 text-red-dark fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#feedback__warning"></use></svg>
          </div>

          <div class="flex-1">
            <div class="text-sm font-bold mb-2">{{ item.text }}</div>
            <div class="text-grey-darker text-2xs">{{ item.date }}</div>
          </div>

          <div>
            <button type="button">
              <svg class="h-5 w-5 text-grey-darker fill-current" role="presentation"><use xlink:href="/img/icons.symbol.svg#alpha__chevron"></use></svg>
            </button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: 'Commit: 8056d51 Add production URLs as settings refs/heads/master',
          date: 'Dec 21, 2018 1:34:13 PM UTC +0000',
          loading: true,
          success: false,
        },
        {
          text: 'Commit: 96ac151 Fix syntax refs/heads/master',
          date: 'Dec 21, 2018 1:23:43 PM UTC +0000',
          loading: false,
          success: true,
        },
        {
          text: 'Commit: 716e178 Configure stage_file_proxy refs/heads/master',
          date: 'Dec 21, 2018 1:18:25 PM UTC +0000',
          loading: false,
          success: true,
        },
        {
          text: 'Commit: 398945c Ensure stage_file_proxy is enabled refs/heads/master',
          date: 'Dec 21, 2018 1:09:19 PM UTC +0000',
          loading: false,
          success: true,
        },
        {
          text: 'Commit: e75c4a3 Merge branch \'voucher-code-bug-34\' refs/heads/master',
          date: 'Dec 21, 2018 12:55:49 PM UTC +0000',
          success: false,
        },
        {
          text: 'Deploy the code reference tags/2018-12-19 to test',
          date: 'Dec 20, 2018 10:25:07 PM UTC +0000',
          success: true,
        },
        {
          text: 'Deploy the code reference master to dev',
          date: 'Dec 20, 2018 10:13:48 PM UTC +0000',
          success: true,
        },
        {
          text: 'Deploy code from test to prod',
          date: 'Dec 19, 2018 3:55:29 PM UTC +0000',
          success: true,
        },
        {
          text: 'Commit: 9688c41 Update IP address refs/heads/master',
          date: 'Dec 19, 2018 3:50:31 PM UTC +0000',
          success: true,
        },
        {
          text: 'Commit: fdac923 Merge branch \'update-password-policy\' refs/heads/master',
          date: 'Dec 19, 2018 3:48:29 PM UTC +0000',
          success: true,
        },
      ],
    }
  }
}
</script>
