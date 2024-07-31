import useSWR from "swr"
import { fetcher } from '@/utils'

type User = {
    name: string
}

const Profile = () => {
    const { data, error } = useSWR<User>('/api/user', fetcher)

    if (error) return <div>failed to load</div>
    if (!data) return <div>loading...</div>
    return <div>Hello {data.name}</div>
}

export default Profile