import CardBody from './card-body';
import CardHead from './card-head';
import { ColumnProps } from './types';

function Archive(props: ColumnProps) {
  return (
    <>
      <div className="column">
        <div className="card-box bg-grey-3">
          <CardHead {...props} dragHandleProps={undefined} />
          <CardBody {...props} />
        </div>
      </div>
    </>
  );
}
export default Archive;
