import React from "react";

// const MyCoolButton = () => <input type="button" value="Click me!"/>; // 1 мөр учир ингэж бичиж болно

export const MyCoolButton = props => {

    const clickHandler = () =>alert(`Өнөөдөр: ${new Date()}`);
  
    return (
      <div>
          <span>{props.tovchNer ? props.tovchNer: 'Үнэхээр лаг товч'}</span><br/>
          <span>{`Өнөөдөр: ${new Date()}`}</span><br/>
          <input 
              className="MyCoolButton" 
              type="button"
              onClick={clickHandler} 
              value={props.text ? props.text: 'Дар!'}
  
          />
      </div>
    );
  };