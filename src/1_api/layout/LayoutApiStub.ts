import axios from "axios";


const findMenuList = () => {

}

interface queryTestQuery {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// const queryTest = (userId: number, id: number, title: string, body: string) => {
const queryTest = () => {
  // const query: queryTestQuery[] = {
  //   userId,
  //   id,
  //   title,
  //   body
  // }
  return axios.get(
    'https://jsonplaceholder.typicode.com/posts',
  )
}

export default {
  test: queryTest
}
