import CardBody from './card-body';
import CardHead from './card-head';
import { Draggable } from 'react-beautiful-dnd';
import { ColumnProps } from './types';

const Column = (props: ColumnProps) => {
  return (
    <Draggable draggableId={props.column._id} index={props.index}>
      {(provided: any) => (
        <div
          className="column"
          {...provided.draggableProps}
          ref={provided.innerRef}
        >
          <div className={`card-box bg-grey-${props.index % 2}`}>
            <CardHead {...props} dragHandleProps={provided.dragHandleProps} />
            <CardBody {...props} />
          </div>
        </div>
      )}
    </Draggable>
  );
}
export default Column;
