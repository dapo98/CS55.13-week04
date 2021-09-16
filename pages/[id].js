/*import Head from 'next/head';
import Layout from '../components/layout';
import {getAllIds, getData} from '../lib/data';

export async function getStaticProps({params}) {
  const itemData = await getData(params.id);
  return {
props: {
  itemData
}
  };
}


export async function getStaticPaths(){
  const allDynamicPaths = getAllIds();
  return{
   allDynamicPaths,
    fallback: false
  };
} 

export default function Entry ({itemData}){
  return(
    <Layout>
    <Head>
    <title>{itemData.name}</title>
  </Head>
  <article class="card col-6">
  <div class="card-body">
  <h5 class="card-title"></h5>
  <h6 class="card-subtitle mb-2 text-muted">{itemData.phone}</h6>
  <p class="card-text">{itemData.birthdate}</p>
  <a href={'mailto:' + itemData.email} class="card-link">{itemdata.email}</a>
  </div>
  </article>
  </Layout>
  );
}
*/
import Head from 'next/head';
import Layout from '../components/layout';
import { getAllIds, getData } from '../lib/data';

export async function getStaticProps({ params }) {
  const itemData = await getData(params.id);
  // console.log(itemData);
  return {
    props: {
      itemData
    }
  };
}

export async function getStaticPaths() {
  const paths = getAllIds();
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
          <h5 className="card-title">{itemData.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{itemData.phone}</h6>
          <p className="card-text">{itemData.birthdate}</p>
          <a href={'mailto:' + itemData.email} className="card-link">{itemData.email}</a>
        </div>
      </article>
    </Layout>
  );
}