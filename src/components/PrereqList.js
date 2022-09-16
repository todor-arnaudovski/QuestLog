import React from 'react';
import PrereqListItem from './PrereqListItem';

function PrereqList(props) {
  return (
    <ul>
      {props.prerequisites.map((prerequisite, index) => (
        <PrereqListItem key={index} prerequisite={prerequisite} />
      ))}
    </ul>
  );
}

export default PrereqList;
