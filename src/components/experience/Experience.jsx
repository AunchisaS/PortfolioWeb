import React, { useState } from "react";
import Data from "./data";
import Card from "./card";
import TabButton from "./TabButton";
import TagButton from "./TagButton";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import "./experience.css";

const Experience = () => {
  const [item, setItem] = useState(Data);

  const [categories, setCategories] = useState([
    "All",
    "Academic Work",
    "Extracurricular Activity",
  ]);

  const AllTagItems = ["ALL TAG", ...new Set(Data.map((Val) => Val.tag))];
  // console.log(AllTagItems);

  const [tags, setTags] = useState(AllTagItems);
  const [activeTag, setActiveTag] = useState(AllTagItems[0]);

  const workTagItems = [
    "ALL ACADEMIC WORKS",
    ...new Set(
      Data.filter((item) => item.category === "Academic Work").map(
        (Val) => Val.tag
      )
    ),
  ];
  const extraTagItems = [
    "ALL EXTRACURRICULAR ACTIVITY",
    ...new Set(
      Data.filter((item) => item.category === "Extracurricular Activity").map(
        (Val) => Val.tag
      )
    ),
  ];

  const genTag = (category) => {
    if (category === "All") {
      setTags(AllTagItems);
      setActiveTag("ALL TAG");
      setItem(Data);
    } else if (category === "Academic Work") {
      setTags(workTagItems);
      setActiveTag("ALL ACADEMIC WORKS");
      genItems("ALL ACADEMIC WORKS");
    } else if (category === "Extracurricular Activity") {
      setTags(extraTagItems);
      setActiveTag("ALL EXTRACURRICULAR ACTIVITY");
      genItems("ALL EXTRACURRICULAR ACTIVITY");
    }
    setActiveTab(category); // update active tab
  };

  const genItems = (tag) => {
    if (tag === "ALL TAG") {
      setItem(Data);
    } else {
      const newItem = Data.filter((item) => {
        if (tag === "ALL ACADEMIC WORKS") {
          return item.category === "Academic Work";
        } else if (tag === "ALL EXTRACURRICULAR ACTIVITY") {
          return item.category === "Extracurricular Activity";
        } else {
          return item.tag === tag;
        }
      });
      setItem(newItem);
    }
    setActiveTag(tag);
  };

  const [activeTab, setActiveTab] = useState(categories[0]);

  return (
    <>
      <section id="experience">
        <div className="header">
          <h1 style={{ padding: "2rem 0rem 1rem 0rem" }}>Experience</h1>
        </div>
        <div className="sub-header">
          {categories.map((category) => (
            <TabButton
              key={`${category}`}
              title={category}
              active={category === activeTab} // pass active prop
              onClick={() => {
                genTag(category);
              }}
            />
          ))}
        </div>

        <div className="tag-bar">
          {tags.map((tag) => {
            let _title = tag;
            if (tag.toLowerCase().includes("all")) _title = "ALL";
            return (
              <TagButton
                key={`${tag}`}
                title={_title}
                active={tag === activeTag ? "active" : ""}
                onClick={() => {
                  genItems(tag);
                }}
              />
            );
          })}
        </div>

        <div className="experience__container">
            {/* <Row xs={1} md={2} className="g-4">
            {Array.from({ length: 4 }).map((_, idx) => (
              <Col>
                <Card item={item} />
                      </Col>
             ))}
            </Row> */}
            <Card item={item} />

        </div>
      </section>
    </>
  );
};

export default Experience;
