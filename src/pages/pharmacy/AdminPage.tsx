import React from 'react'
import { CustomDrawer } from '../../components'
import { Layout } from '../../components/Layout'

export const AdminPage = () => {
  return (
    <Layout>
      <CustomDrawer />
      <div className='text-white'>AdminPage</div>
    </Layout>
  )
}
