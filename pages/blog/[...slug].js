import React from 'react';
import PostAction from 'components/PostAction';
import { LikeIcon, StarIcon, HeartIcon, AddUserIcon } from 'components/Icons';
import Comment from 'components/Comment';

function Post({ post }) {
  if (post) {
    post.comments = [
      {
        id: 1,
        date: new Date(),
        author: { name: 'Matias', profile: 'https://github.com/matids', avatar: '' },
        comment: 'Some random comment',
      },
      {
        id: 2,
        date: new Date(),
        author: { name: 'Matias', profile: 'https://github.com/matids', avatar: '' },
        comment: 'Some random comment',
      },
      {
        id: 3,
        date: new Date(),
        author: { name: 'Matias', profile: 'https://github.com/matids', avatar: '' },
        comment: 'Some random comment',
      },
    ];
  }
  return (
    <>
      <div className="max-w-3xl mx-auto text-center ">
        <h1 className="mb-5 text-3xl font-bold text-white mt-15">{post?.title}</h1>
      </div>

      <div className="relative max-w-3xl px-4 mx-auto bg-white rounded-md shadow-xl sm:px-6 lg:px-8 ">
        <div
          className="py-10 mx-auto prose prose-lg text-gray-500"
          dangerouslySetInnerHTML={{ __html: post?.body }}
        ></div>
        <div className="py-4 border-t border-gray-300">
          <div className="flex space-x-4">
            <PostAction
              count={post?.counters?.like}
              Icon={LikeIcon}
              onClick={() => {
                alert('do something');
              }}
            />
            <PostAction count={post?.counters?.start} Icon={StarIcon} />
            <PostAction count={post?.counters?.heart} Icon={HeartIcon} />
            <PostAction count={post?.counters?.user} Icon={AddUserIcon} />
          </div>
        </div>
        <div className="py-4 border-t border-gray-300 divide-y">
          {(!post?.comments || !post?.comments.length) && 'No comments yet'}
          {post?.comments?.map((c) => (
            <Comment key={c.id} {...c} />
          ))}
        </div>
        <div>
          <form>
            <div className="relative rounded-md shadow-sm">
              <textarea
                rows="4"
                className="block w-full px-4 py-3 placeholder-gray-500 transition duration-150 ease-in-out form-input"
                placeholder="Comment"
              />
            </div>
            <div className="inline-flex justify-end w-full my-4">
              <button
                type="submit"
                className="inline-flex justify-center px-6 py-2 text-base font-medium leading-6 text-white transition duration-150 ease-in-out bg-purple-600 border border-transparent rounded-md hover:bg-purple-500 focus:outline-none focus:border-purple-700 focus:shadow-outline-purple active:bg-purple-700"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Post;

export async function getStaticProps({ params }) {
  const { slug } = params;
  const query = `https://hytale.com/api/blog/post/slug/${slug}`;
  const result = await fetch(query);
  if (!result) {
    return { props: {} };
  }
  const post = await result.json();
  return {
    props: { post: post },
    revalidate: 30,
  };
}
export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true,
  };
}
