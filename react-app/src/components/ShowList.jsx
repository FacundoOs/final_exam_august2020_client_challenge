import { coursesData } from "../data/courses";

const Showlist = () => {
  let dataShow = coursesData.map((show) => {
    return (
      <div>
        <h2>{show.title} </h2>
        <ul>
          <li>Category: {show.category} </li>
          <li>Instructors: {show.instructors} </li>
          <li>Price: {show.price} </li>
        </ul>
      </div>
    );
  });

  return <div>{dataShow}</div>;
};
export default Showlist;
