import React, { FC } from "react";
//Styles
import "./styles.css";

interface Props {
  set_isVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

type item = {
  title: string;
};

const Content_1: FC<Props> = (Props) => {
  const [menuList, set_menuList] = React.useState<Array<item>>([
    {
      title: "Expand your business",
    },
    {
      title: "Responsive Website",
    },
    { title: "Human Computer Interaction" },
  ]);

  const [activeItem, set_activeItem] = React.useState<item>();

  const updateActive = (element: item) => {
    if (element !== activeItem) {
      set_activeItem(element);
    }
  };

  const onClick = () => {
    Props.set_isVisible(false);
  };

  React.useEffect(() => {
    console.log(menuList);
    set_activeItem(menuList[0]);
  }, []);

  return (
    <div className="content1-main-container">
      <div className="laptop-menu">
        <div className="previous" onClick={onClick}>
          &#8249;
        </div>
        {menuList.map((element) => {
          return (
            <li
              className={`${element == activeItem ? "isActive" : ""}`}
              key={element.title}
              onClick={() => updateActive(element)}
            >
              {element.title}
            </li>
          );
        })}
      </div>
      <div className="laptop-content"></div>
    </div>
  );
};

export default Content_1;
