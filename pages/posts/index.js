import BaseLayout from '../../layouts/base-layout'
import { Row, Column } from '../../components/grid'
import Card from '../../components/card'
import { Pagination } from '../../components/pagination'
import moment from 'moment'
import axios from 'axios'
import Link from 'next/link'

export default function PostIndex({ posts }) {
  return (
    <BaseLayout
      title="Home"
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
          <button className="btn btn-primary">View More</button>
        </Card>
      </Column>
    </Row>
    </BaseLayout>
  )
}

export async function getStaticProps(context) {
  const res = await axios(`https://jsonplaceholder.typicode.com/posts/`)
    .catch(err=>{ return err })

  return {
    props: { posts: res.data }
  }
}
