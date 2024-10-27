import { useAppSelector } from '@/store'

function useRole() {
    const auth = useAppSelector((state) => state.auth)
    return auth
}

export default useRole
