import { useUIStore } from 'src/stores/ui-store'
import { computed } from 'vue'

const useUI = () => {

    const uiStore = useUIStore()

    return {
        leftDrawerOpen: computed({
            get() {
                return uiStore.isSideMenuOpen
            },
            set() {
                uiStore.toggleSideMenu()
            }
        }),
        toggleLeftDrawer: () => {
            uiStore.toggleSideMenu()
        }
    }

}

export default useUI