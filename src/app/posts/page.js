import SubHeading from '@/components/SubHeading/SubHeading';
import Link from 'next/link';
import { PiThumbsUpBold } from 'react-icons/pi';
import design from './Posts.module.css';

const FetchingPosts = async () => {
  const response = await fetch('http://localhost:5000/posts', {
    cache: 'no-store',
  });
  const posts = await response.json();

  return (
    <div>
      <SubHeading>Total Posts: {posts.length}</SubHeading>

      <div>
        <h2 className={design.kaka}>HF Hf</h2>
        {posts.map((post) => (
          <div
            key={post.id}
            className="card w-1/2 bg-blue-950 shadow-xl p-3 my-5 mx-auto"
          >
            <div className="card-body">
              <h2 className="card-title"> {post.title} </h2>
              <p> {post.short_description} </p>
              <div>
                <div
                  className="flex w-fit items-center cursor-pointer gap-2 text-lg border rounded-2xl px-2
                "
                >
                  <span>
                    <PiThumbsUpBold />
                  </span>
                  <span>{post.like_count}</span>
                </div>
              </div>
              <Link href={`/posts/${post.id}`}>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">See More</button>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchingPosts;
