'use client'
import Button from '@/components/Button'
import { Drawer } from '@/components/Drawer'
import { ReactQuery } from '@/components/ReactQuery'
import { useRouter } from 'next/navigation'
import React from 'react'

const Home = () => {
  const router = useRouter()
  return (
    <div className='mx-auto flex justify-center items-center h-screen'>
      <Button colorSchema='blue' title='Book' width='lg' onClick={() => router.push('/book')}/>
    </div>
  )
}

export default Home
