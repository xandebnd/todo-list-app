"use client";

import { Footer } from "@/components/Footer";
import { Main } from "@/components/Main";
import { ToastContainer } from 'react-toastify';
import { Layout } from "@/components/Layout";

export default function Home() {
  return (
    <Layout>
      <Main />
      <Footer />
      <ToastContainer
        autoClose={2000}
        closeOnClick={true}
      />
    </Layout>
  );
}
