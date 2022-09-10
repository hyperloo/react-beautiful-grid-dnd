import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import { ListManagerItem } from "./ListManagerItem";
import { Draggable } from "react-beautiful-dnd";

describe("<ListManagerItem />", () => {
  const item = "item";
  const index: number = 0;
  const originalIndex: number = 0;
  const render = () => <div />;
  const disabledItems = [];

  it("should render without crashing", () => {
    shallow(
      <ListManagerItem
        item={item}
        index={index}
        render={render}
        disabledItems={disabledItems}
        orginalIndex={originalIndex}
      />
    );
  });

  it("should render a <Draggable /> element", () => {
    const wrapper: ShallowWrapper = shallow(
      <ListManagerItem
        item={item}
        index={index}
        render={render}
        disabledItems={disabledItems}
        orginalIndex={originalIndex}
      />
    );
    expect(wrapper.findWhere(n => n.type() === Draggable).length).toEqual(1);
  });
});
