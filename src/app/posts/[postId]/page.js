import Link from 'next/link';
import { PiThumbsUpBold } from 'react-icons/pi';

export async function generateStaticParams() {
  const res = await fetch('http://localhost:5000/posts');
  const posts = await res.json();
  const informations = posts.slice(0, 4).map((post) => {
    return {
      postId: post.id + '',
    };
  });
  console.log(informations);
  return informations;
  // return [{ postId: '1' }, { postId: '2' }];
}

const PostDetails = async ({ params }) => {
  const res = await fetch(`http://localhost:5000/posts/${params.postId}`);
  const dynamicPost = await res.json();
  console.log(dynamicPost);
  return (
    <div>
      <div
        key={dynamicPost.id}
        className="card w-1/2 bg-blue-950 shadow-xl p-3 my-5 mx-auto"
      >
        <div className="card-body">
          <h2 className="card-title"> {dynamicPost.title} </h2>
          <p> {dynamicPost.description} </p>
          <div>
            <div
              className="flex w-fit items-center cursor-pointer gap-2 text-lg border rounded-2xl px-2
      "
            >
              <span>
                <PiThumbsUpBold />
              </span>
              <span>{dynamicPost.like_count}</span>
            </div>
          </div>
          <Link href="/posts">
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Back</button>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
