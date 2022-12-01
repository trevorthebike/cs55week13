import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout';
import { getSortedList} from '../lib/data';

export async function getStaticProps() {
  const allData = await getSortedList();
  return {
    props: {
      allData
    }
  }
}

export default function Home({ allData }) { 
  return (
      <Layout home>
        <h3> Wordpress Posts </h3>
        <div className="list-group">
          {allData ? 
          allData.map(({ id, name }) => (
            <Link key={id} href={`/${id}`}>
              <a className="list-group-item list-group-item-action">{name}</a>
            </Link>
          ))
          : null
        }
        </div>
      </Layout>
  );
}