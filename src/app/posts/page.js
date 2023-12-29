import SubHeading from '@/components/SubHeading/SubHeading';
import { PiThumbsUpBold } from 'react-icons/pi';

const FetchingPosts = async () => {
  const response = await fetch('http://localhost:5000/posts');
  const posts = await response.json();

  return (
    <div>
      <SubHeading>Total Posts: {posts.length}</SubHeading>

      <div>
        {posts.map((post) => (
          <div
            key={post.id}
            className="card w-1/2 bg-blue-950 shadow-xl p-3 my-5 mx-auto"
          >
            <div className="card-body">
              <h2 className="card-title"> {post.title} </h2>
              <p> {post.description} </p>
              <div>
                <div
                  className="flex w-fit items-center gap-2 text-lg border rounded-2xl px-2
                "
                >
                  <span>
                    <PiThumbsUpBold />
                  </span>
                  <span>{post.like_count}</span>
                </div>
              </div>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">See More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FetchingPosts;
