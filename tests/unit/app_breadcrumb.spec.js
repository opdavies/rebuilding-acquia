import AppBreadcrumb from '@/components/AppBreadcrumb.vue'
import { RouterLinkStub, shallowMount } from '@vue/test-utils'

const stubs = {
  RouterLink: RouterLinkStub
}

test('it returns default values', () => {
  const wrapper = shallowMount(AppBreadcrumb, { stubs })

  expect(wrapper.vm.selectedOrganisation).toBe(null)
  expect(wrapper.vm.selectedApplication).toBe(null)
  expect(wrapper.vm.selectedEnvironment).toBe(null)
})

test('it returns the organisation and application names', () => {
  const wrapper = shallowMount(AppBreadcrumb, {
    propsData: {
      application: {
        name: 'Oliver Davies'
      }
    },
    stubs
  })

  expect(wrapper.vm.selectedOrganisation).toBe('Rebuilding Acquia')
  expect(wrapper.vm.selectedApplication).toBe('Oliver Davies')
  expect(wrapper.vm.selectedEnvironment).toBe(null)
})

test('it returns the environment name', () => {
  const wrapper = shallowMount(AppBreadcrumb, {
    propsData: {
      application: {
        name: 'Oliver Davies'
      },
      environment: {
        name: 'Dev'
      }
    },
    stubs
  })

  expect(wrapper.vm.selectedOrganisation).toBe('Rebuilding Acquia')
  expect(wrapper.vm.selectedApplication).toBe('Oliver Davies')
  expect(wrapper.vm.selectedEnvironment).toBe('Dev')
})
