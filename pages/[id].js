import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  
  return {
    props: {
      itemData
    },
    revalidate: 60
  };
}

export async function getStaticPaths() {
  const paths = await getAllIds();
  return {
    paths,
    fallback: false
  };
}

export default function Entry({ itemData }) {
  return (
    <Layout>
      {}
      <article className="card col-6">
        <h2>Person Detail</h2>
        <div className="card-body">
          <h5 className="card-title">{itemData.post_title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{itemData.user_login}</h6>
          <div className="card-text" dangerouslySetInnerHTML={{__html: itemData.post_content}} />
        </div>
      </article>
      {}
      <div className="list-group col-6">
        {}
        {itemData.related ? 
          <h2>Related Persons</h2> : null
        }
        {itemData.related ? 
          itemData.related.map(
            ({ id, name }) => (
              <Link key={id} href={`/${id}`}>
                <a className="list-group-item list-group-item-action">{name}</a>
              </Link>
            )
          )
          : null
        }
        {}
      </div>
    </Layout>
  );
}