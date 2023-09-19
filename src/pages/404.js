import React,{useEffect} from 'react'

export default function Custom404() {
    return <h1>404 - Page Not Found</h1>
  }

export async function getStaticProps(context) {
    return {
      redirect: {
        permanent: false,
        destination: "https://platformable.com",
      },
    };
  }
