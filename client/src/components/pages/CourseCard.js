import React from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { RiMedal2Line } from 'react-icons/ri';
import {
  RiVipCrownFill,
  RiVipCrownLine,
  RiVipCrown2Fill,
} from 'react-icons/ri';
import { useDispatch, useSelector } from 'react-redux';
import { FaCrown } from 'react-icons/fa';
import axios from 'axios';

import './CourseCard.css';

const CourseCard = (props) => {
  console.log('inside Course Card');
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const courses = useSelector((state) => state.courses);

  const { coursesImages } = courses;

  const { coursesProgress } = auth;

  console.log('COURSES PROGRESS is ');
  console.log(coursesProgress);
  console.log('KEY IS ', +props.index);

  const theCourseImage = coursesImages.filter((image) => {
    return image.tag === props.tag;
  });

  // const images = require.context('../../../../uploads/courses/', true);

  // let img = images(`./${props.tag}.jpg`);

  // const mydata = await axios.get('/api/s3images');
  // let img = mydata.image;

  // return <h1>Hello</h1>;

  return (
    <Col
      md={6}
      lg={3}
      className={
        props.courseOwned
          ? 'offset-md-0 my-4 col-12'
          : 'offset-1 offset-md-0 my-4 col-10'
      }
    >
      <div className="cardBorder">
        <div className="courseThumbnail courseFeatured1">
          <Link
            className="courseTitle"
            to={
              props.courseOwned
                ? `/courses/${props.tag}/lessons/1`
                : `/courses/${props.tag}`
            }
          >
            {/* <img src={img.default} alt="javascript" /> */}
            {theCourseImage[0] && (
              <img src={theCourseImage[0].imageBase64} alt="my course" />
            )}
          </Link>
        </div>
        <div className="courseTitleCtn">
          <Link className="courseTitle" to={`/courses/${props.tag}`}>
            {props.name}
          </Link>
        </div>
        {props.price ? (
          <>
            <div className="separator"></div>
            <div className="priceCtn">
              <span className="studentNumbers">
                {props.courseLevel === 'beginner' ? (
                  <>
                    <RiVipCrownLine /> Beginner
                  </>
                ) : props.courseLevel === 'intermediate' ? (
                  <>
                    <RiVipCrownFill /> Intermediate
                  </>
                ) : (
                  <>
                    <FaCrown /> Advanced
                  </>
                )}
              </span>
              <span className="price">${props.price}</span>
            </div>
          </>
        ) : (
          <div className="courseProgressBorder">
            <div className="courseProgressCtn">
              <div
                style={{
                  backgroundColor: '#537ddc',
                  width: `${
                    coursesProgress && coursesProgress.length > 0
                      ? coursesProgress[props.index]
                      : '0'
                  }%`,
                  height: '100%',
                }}
              ></div>
            </div>
            <p>
              {coursesProgress && coursesProgress.length > 0
                ? coursesProgress[props.index]
                : '0'}
              % Complete
            </p>
          </div>
        )}
      </div>
    </Col>
  );
};

export default CourseCard;
