import React from 'react'
import Layout from '@components/Layout/Layout'
import { Divider, Image } from 'semantic-ui-react'
import ImageFloated from '@components/Intro/Intro';

const src="/images/subaru.jpg";

const HomePage = () => {
  return (
    <Layout>
      <ImageFloated/>
    <Divider hidden />
    </Layout>
  )
}

export default HomePage
