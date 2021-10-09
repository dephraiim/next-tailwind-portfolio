import FeaturedWorkCard from "../components/FeaturedWorkCard";
import Layout from "../components/Layout";

export default function Work() {
  return (
    <Layout>
      <div className="max-w-screen-sm px-4 py-12 mx-auto">
        <div className="font-sans text-center text-4xl font-extrabold leading-none tracking-tight m-3">
          Featured Projects
        </div>

        <FeaturedWorkCard />
        <FeaturedWorkCard />
        <FeaturedWorkCard />
        <FeaturedWorkCard />
        <FeaturedWorkCard />
      </div>
    </Layout>
  );
}
