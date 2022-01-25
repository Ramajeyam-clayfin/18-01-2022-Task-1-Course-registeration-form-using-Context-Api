import React, { createContext, useState } from 'react';

export const Info = createContext();

const { Provider } = Info;
export const InfoProvider = (props) => {
  const [user, setuser] = useState({
    name: '',
    mail: '',
    mob: 0,
    gender: '',
    street: '',
    line2: '',
    city: '',
    state: '',
    zipcode: 0,
    country: '',
  });
  const [course, setcourse] = useState({ lang: '', payment: '' });

  const [page1, setPage1] = useState(false);
  const [page2, setpage2] = useState(false);
  const [page3, setpage3] = useState(false);
  const [page4, setpage4] = useState(false);
  // console.log(form1);
  return (
    <div>
      <Provider
        value={
          ([user, setuser],
          [course, setcourse],
          [page1, setPage1],
          [page2, setpage2],
          [page3, setpage3],
          [page4, setpage4])
        }
      >
        {props.children}
      </Provider>
    </div>
  );
};
export const InfoConsumer = Info.Consumer;
