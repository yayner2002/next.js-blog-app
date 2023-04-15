import React from "react";
import headerStyles from "../styles/Header.module.css";

const Header = () => {
  const x = 10;
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> News
      </h1>
      <p className={headerStyles.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus quaerat eligendi et vel molestias nesciunt placeat pariatur, tempora reprehenderit itaque aliquam iusto maxime excepturi maiores ea, quia culpa eos cupiditate?</p>
      {/* <style jsx>
        {`
          .title: {
            color: ${x > 3 ? "red" : "blue"};
          }
        `}
      </style> */}
    </div>
  );
};

export default Header;
