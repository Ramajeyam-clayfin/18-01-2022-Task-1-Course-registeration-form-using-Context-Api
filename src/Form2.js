import React, { useContext } from 'react';
import {Info} from './Context';
import './style.css';

export default function Form2() {
  
  // const [form2, setform2] = useContext(Info);
  // const [form3, setform3] = useContext(Info);
  const [course, setcourse] = useContext(Info);
  return (
    <div>

      <form >
        <br />
        <label>Course : </label>
        <input
          type="radio"
          name="lang"
          value="C"
          onChange={(e) =>
            setcourse((course) => ({ ...course, lang: e.target.value }))
          }
        />
        <label> C </label>
        <input
          type="radio"
          name="lang"
          value="Java"
          onChange={(e) =>
            setcourse((course) => ({ ...course, lang: e.target.value }))
          }
        />
        <label> Java </label>

        <input
          type="radio"
          name="lang"
          value="Asp"
          onChange={(e) =>
            setcourse((course) => ({ ...course, lang: e.target.value }))
          }
        />
        <label> Asp </label>

        <input
          type="radio"
          name="lang"
          value="Python"
          onChange={(e) =>
            setcourse((course) => ({ ...course, lang: e.target.value }))
          }
        />
        <label> Python </label>
        <br />
        <br />
        <label> Language You Want To Work :  </label>
        <input
          type="text"
          value={course.lang}
        />
        <br />
        <br />
        <input type="submit" value="Next" />
        <br />
      </form>
    </div>
  );
  
}

let Notshow = () => {
  return <div></div>;
};

let Show = () => {
  
}