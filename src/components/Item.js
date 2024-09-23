import React from 'react';

const Item = React.memo(({ item }) => {
  return (
    <div className="item">
      {item}
    </div>
  );
});

export default Item;
