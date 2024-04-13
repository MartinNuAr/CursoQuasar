import { useUIStore } from 'src/stores/ui-store'
import { computed } from 'vue'

const useUI = () => {

    const uiStore = useUIStore()

    return {
        leftDrawerOpen: computed(() => uiStore.isSideMenuOpen),
        toggleLeftDrawer: () => {
            uiStore.toggleSideMenu()
        }
    }

}

export default useUI