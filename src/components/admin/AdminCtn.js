import React, { memo, useEffect } from 'react';
import AdminSidebar from './AdminSidebar';
import UserProfile from './UserProfile';
import Courses from './Courses';
import CourseCreate from './CourseCreate';
import CourseUpdate from './CourseUpdate';
import FeatureCourses from './FeatureCourses';
import SecondHeader from '../partials/SecondHeader';
import { useSelector } from 'react-redux';
import AllUsers from './AllUsers';
import Sales from './Sales';
import Coupons from './Coupons';
import NewCoupon from './NewCoupon';
import EditCoupon from './EditCoupon';
import ActiveMemberships from './ActiveMemberships';

const AdminCtn = ({ match, history }) => {
  // console.log(match);

  const auth = useSelector((state) => state.auth);
  const { active, loading, isAuthenticated } = auth;

  useEffect(() => {
    if (active === 'notActive' && !auth.loading) {
      console.log('inside redirect');
      history.push('/activate');
    } else if (!loading && !isAuthenticated && isAuthenticated !== null) {
      history.push('/login');
    }
  }, [active, loading, isAuthenticated]);

  return (
    <>
      <SecondHeader />
      <div className="profileCtn">
        <div className="container-fluid">
          <div className="row">
            <AdminSidebar />
            {match.params.page === 'courses' && !match.params.subPage ? (
              <Courses />
            ) : null}
            {match.params.page === 'courses' ? (
              match.params.subPage === 'create' ? (
                <CourseCreate />
              ) : null
            ) : null}
            {match.params.page === 'courses' ? (
              match.params.subPage === 'update' ? (
                <CourseUpdate />
              ) : null
            ) : null}
            {match.params.page === 'user' ? <UserProfile /> : null}
            {match.params.page === 'featureCourses' ? <FeatureCourses /> : null}
            {match.params.page === 'users' ? <AllUsers /> : null}
            {match.params.page === 'sales' ? <Sales /> : null}
            {match.params.page === 'coupons' && !match.params.subPage ? (
              <Coupons />
            ) : null}
            {match.params.page === 'coupons' ? (
              match.params.subPage === 'new' ? (
                <NewCoupon />
              ) : null
            ) : null}
            {match.params.page === 'coupons' ? (
              match.params.subPage === 'edit' ? (
                <EditCoupon />
              ) : null
            ) : null}
            {match.params.page === 'memberships' ? <ActiveMemberships /> : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(AdminCtn);
