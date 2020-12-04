import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout
      title="Next.js | Typescript | TailwindCSS"
      className="flex h-screen justify-center items-center bg-gray-50"
    >
      <div className="text-4xl text-gray-700">
        Next.JS + <span className="text-blue-500">Typescript</span> +
        <span className="text-purple-500"> tailwindcss</span>
      </div>
    </Layout>
  );
}
