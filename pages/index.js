import Feature from 'components/Feature';
import TwitchStream from 'components/TwitchStream';
import Post from 'components/Post';

const BlogButton = ({ name, onClick }) => {
  return (
    <button
      className="py-2 text-sm text-gray-400 border rounded-md px-7 focus:outline-none"
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default function Home({ posts }) {
  return (
    <>
      <section className="text-white">
        <div className="max-w-3xl mx-auto text-center ">
          <h1 className="mb-5 text-3xl font-bold mt-15">
            Please replace this text with a heading.
          </h1>
          <p>
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur
          </p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto mt-16 bg-black h-96">
        <TwitchStream />
      </section>

      <section className="my-16">
        <div className="max-w-screen-xl px-4 py-4 mx-auto sm:px-6 lg:px-8">
          <h1 className="text-2xl text-center">Recent Blogs</h1>
          <p className="text-center">
            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur
          </p>
          <div className="flex flex-col justify-center my-5 space-y-2 md:space-y-0 md:space-x-2 md:flex-row">
            <BlogButton name="BLOG" />
            <BlogButton name="VIDEO" />
            <BlogButton name="PROJECT" />
            <BlogButton name="PODCAST" />
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts?.map((p) => (
              <Post key={p._id} {...p} counters={{ like: 10 }} />
            ))}
          </div>
        </div>
      </section>

      <section className="text-white bg-purple-500">
        <div className="py-12">
          <div className="max-w-xl px-4 mx-auto text-center sm:px-6 lg:max-w-screen-xl lg:px-8">
            <h1 className="text-4xl">Introducing bdougie.live</h1>
            <p className="max-w-5xl py-4 mx-auto">
              Many desktop publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for lorem ipsum will uncover many web
              sites still in their infancy. Various versions have evolved over the years,
              sometimes by accident, sometimes on purpose (injected humour and the like
            </p>
          </div>
          <div className="max-w-xl px-4 py-4 mx-auto sm:px-6 lg:max-w-screen-xl lg:px-8">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <Feature
                title="A titile"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
              />
              <Feature
                title="A titile"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
              />
              <Feature
                title="A titile"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const query = 'https://hytale.com/api/blog/post/published';
  const result = await fetch(query);
  if (!result) {
    return { props: {} };
  }
  return {
    props: { posts: await result.json() },
    revalidate: 30,
  };
}
