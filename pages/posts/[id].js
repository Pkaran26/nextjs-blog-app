import BaseLayout from '../../layouts/base-layout'
import { Row, Column } from '../../components/grid'
import Card from '../../components/card'
import { PrevNext } from '../../components/pagination'
import axios from 'axios'
import moment from 'moment'

export default function PostIndex({ post }) {
  return (
    <BaseLayout
      title={ post.title }
    >
    <Row>
      <Column size="8">
        <Card>
          <h2>{ post.title }</h2>
          <p><span>Publish At:- </span> { moment().format('DD-MMM-YYYY, hh:mm A') }</p>
          <div dangerouslySetInnerHTML={{ __html: post.body }}></div>
        </Card>
        <PrevNext id={ post.id } />
      </Column>
    </Row>
    </BaseLayout>
  )
}

export async function getStaticPaths() {
  const res = await axios(`https://jsonplaceholder.typicode.com/posts/`)
    .catch(err=>{ return err })

  const paths = res.data.map((post) => ({
    params: { id: post.id.toString() },
  }))
  return { paths, fallback: false }
}

export async function getStaticProps(context) {
  const res = await axios(`https://jsonplaceholder.typicode.com/posts/${ context.params.id }`)
    .catch(err=>{ return err })

    let body = ''

    for (var i = 0; i < 10; i++) {
      body += `<p>${ res.data.body }</p>`
    }

  return {
    props: {
      post: {
        ...res.data,
        body: body
      }
    }
  }
}
