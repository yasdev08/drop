'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { pb } from '@/utils/pocketbase'
import { useSWRConfig } from 'swr'
import { logout } from '@/utils/auth'
import Loading from '@/app/loading'
import { Suspense } from 'react'



function LogoutPage() {
  const router = useRouter()
  const { mutate } = useSWRConfig()
  const handleLogout = async () => {
    await logout()
    pb.authStore.clear()
    //Clear all SWR data
    mutate(/* match all keys */() => true, undefined, false)
    router.push('/sign-in')
    router.refresh()
  }
  useEffect(() => {
    const logout = async () => {
      await handleLogout()
    }
    logout()
  }, [])

  return (

    <div className='flex flex-col gap-4 items-center justify-center text-sm text-zinc-600'>
      <Suspense fallback={<Loading />} />
      Logging out..
    </div>
  )
}

export default LogoutPage