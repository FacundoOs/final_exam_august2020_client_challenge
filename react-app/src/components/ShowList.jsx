import {coursesData} from '../data/courses'

const Showlist = () => {
  let dataShow = coursesData.map((show) => {
    return (
      <div>
        <div>{show.title} </div>
        <div>{show.category} </div>
        <div>{show.instructors} </div>
        <div>{show.price} </div>
      </div>
    );
  });

  return <div>{dataShow}</div>;
};
export default Showlist;
