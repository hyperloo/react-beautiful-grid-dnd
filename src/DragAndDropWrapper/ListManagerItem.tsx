import React, { ReactElement } from "react";
import { Draggable, DraggableProvided, DraggableStateSnapshot } from "react-beautiful-dnd";
import hash from "object-hash";

export interface ListManagerItemProps {
  item: any;
  index: number;
  render(item: any): ReactElement<{}>;
  disabledItems: Object;
  orginalIndex: number;
}

export const ListManagerItem: React.StatelessComponent<ListManagerItemProps> = ({
  item,
  index,
  render,
  disabledItems,
  orginalIndex
}: ListManagerItemProps) => (
  <Draggable draggableId={hash(item)} index={index} isDragDisabled={disabledItems[orginalIndex]}>
    {(provided: DraggableProvided, _: DraggableStateSnapshot) => (
      <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
        {render(item)}
      </div>
    )}
  </Draggable>
);
