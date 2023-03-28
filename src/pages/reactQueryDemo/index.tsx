import axios from 'axios';
import { useQuery } from 'react-query';

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const fetchPosts = async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  return res?.data;
};

function ReactQueryDemo() {
  const { isLoading, isError, data, error, isFetching } = useQuery<
    IPost[],
    Error
  >('FETCH_POST_KEYS', fetchPosts);
  console.log(isFetching);
  return (
    <div>
      {data != null && data.length > 0
        ? data.map((post: IPost) => <p key={post.id}>{post.title}</p>)
        : null}
      {isFetching ? <p>Updating... {isFetching}</p> : null}
    </div>
  );
}

export default ReactQueryDemo;
