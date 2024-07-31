import React, { useContext } from 'react'
import useSWR from 'swr'
import signin from '@/services/auth/signin'
import signout from '@/services/auth/signout'
import type { ApiContext, User } from '@/types/data'

type AuthContextType = {
  authUser?: User
  isLoading: boolean
  signin: (username: string, password: string) => Promise<void>
  signout: () => Promise<void>
  mutate: (
    data?: User | Promise<User>,
    shouldRevalidate?: boolean,
  ) => Promise<User | undefined>
}

type AuthContextProviderProps = {
  context: ApiContext
  authUser?: User
}

const AuthContext = React.createContext<AuthContextType>({
  authUser: undefined,
  isLoading: false,
  signin: async () => Promise.resolve(),
  signout: async () => Promise.resolve(),
  mutate: async () => Promise.resolve(undefined),
})

export const useAuthContext = (): AuthContextType =>
  useContext<AuthContextType>(AuthContext)

/**
 * 인증 컨텍스트 제공자
 * @param params 파라미터
 */
export const AuthContextProvider = ({
  context,
  authUser,
  children,
}: React.PropsWithChildren<AuthContextProviderProps>) => {
  const { data, error, mutate } = useSWR<User>(
    `${context.apiRootUrl.replace(/\/$/g, '')}/users/me`,
  )
  const isLoading = !data && !error

  // 로그인
  const signinInternal = async (username: string, password: string) => {
    await signin(context, { username, password })
    await mutate()
  }

  // 로그아웃
  const signoutInternal = async () => {
    await signout(context)
    await mutate()
  }

  // ?? : 왼쪽값이 null이나 undefined일 경우 오른쪽값 리턴 https://velog.io/@jay2u8809/TSJS-%EB%AC%BC%EC%9D%8C%ED%91%9C-2%EA%B0%9C-%EC%97%B0%EC%82%B0%EC%9E%90-Nullish-coalescing
  return (
    <AuthContext.Provider
      value={{
        authUser: data ?? authUser,
        isLoading,
        signin: signinInternal,
        signout: signoutInternal,
        mutate,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
