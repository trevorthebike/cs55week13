import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getAllIds,getData} from '../lib/data';

export async function getStaticProps({ params }) {
  let filename = 'persons.json';
  const itemData = await getData(params.id, filename);
  return {
    props: {
      itemData,
    }
  };
}

export async function getStaticPaths() {
  let filename = 'persons.json';
  const paths = await getAllIds(filename);
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }) {
  return (
    <Layout>
      <article className="card col-6">
        <div className="card-body">
          <h4 className="card-title">{itemData.post_title}</h4>
          <h4 className="card-title">{itemData.post_author}</h4>
          <p className="card-subtitle">{itemData.post_date}</p>
          <div className = "card-text" dangerouslySetInnerHTML = {{__html: itemData.post_content}} />
        </div>
      </article>
  </Layout>
  );
}