import BaseLayout from '../layouts/base-layout'
import { Row, Column } from '../components/grid'
import Card from '../components/card'
import moment from 'moment'
import axios from 'axios'
import Link from 'next/link'

export default function Index({ posts }) {
  return (
    <BaseLayout
      title="Posts"
    >
    <Row>
      <Column size="8">
        { posts && posts.length>0?
          posts.map((e, i)=>(
            <Card key={ i }>
              <h2>{ e.title }</h2>
              <p>{ e.body }...<Link href={`/posts/${ e.id }`}>read more</Link></p>
              <p><span className="text-info">Publish At:- </span> { moment().format('DD-MMM-YYYY, hh:mm A') }</p>
            </Card>
          ))
        :null }
        <Card>
          <Link href={`/posts`}>
            <button className="btn btn-primary">View More</button>
          </Link>
        </Card>
      </Column>
    </Row>
    </BaseLayout>
  )
}

export async function getStaticProps(context) {
  const res = await axios(`https://jsonplaceholder.typicode.com/posts/`)
    .catch(err=>{ return err })

  let data = []

  for (var i = 0; i < 10; i++) {
    data.push(res.data[i])
  }

  return {
    props: { posts: data }
  }
}
