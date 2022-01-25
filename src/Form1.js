import React, { useContext, useState } from 'react';
import { Info } from './Context';
import './style.css';
import Form2 from './Form2';

export default function Form1() {
  // const [page1, setPage1] = useContext(Info);
  // const [show, setshow] = useState(true);

  const [user, setuser] = useContext(Info);
  let click = () => {
    <Form2 />;
  };

  return (
    <div>
      <form>
        <label>Name : </label>
        <input
          placeholder=""
          type="text"
          onChange={(e) =>
            setuser((user) => ({ ...user, name: e.target.value }))
          }
        />
        <br />
        <br />
        <label>Email : </label>
        <input
          type="text"
          onChange={(e) =>
            setuser((user) => ({ ...user, mail: e.target.value }))
          }
        />
        <br />
        <br />
        <label>Mobile : </label>
        <input
          type="Number"
          onChange={(e) =>
            setuser((user) => ({ ...user, mob: e.target.value }))
          }
        />
        <br />
        <br />
        <label>Gender : </label>
        <input
          type="radio"
          name="radio"
          value="Male"
          onChange={(e) =>
            setuser((user) => ({ ...user, gender: e.target.value }))
          }
        />
        <label>Male </label>
        <input
          type="radio"
          name="radio"
          value="Female"
          onChange={(e) =>
            setuser((user) => ({ ...user, gender: e.target.value }))
          }
        />
        <label>Female </label>
        <br />
        <br />
        <label>Address : </label>
        <br />
        <input
          type="text"
          placeholder="Street Address"
          onChange={(e) =>
            setuser((user) => ({ ...user, street: e.target.value }))
          }
        />
        <br />
        <input
          type="text"
          placeholder="Address Line 2"
          onChange={(e) =>
            setuser((user) => ({ ...user, line2: e.target.value }))
          }
        />
        <br />
        <label>City : </label>
        <select
          value={user.city}
          onChange={(e) =>
            setuser((user) => ({ ...user, city: e.target.value }))
          }
        >
          <option value="">--select--</option>
          <option value="Chennai">Chennai</option>
          <option value="Cuddalore">Cuddalore</option>
          <option value="Pondicherry">Pondicherry</option>
        </select>
        <br />
        <input
          type="text"
          placeholder="State/Region"
          onChange={(e) =>
            setuser((user) => ({ ...user, state: e.target.value }))
          }
        />
        <br />
        <input
          type="Number"
          placeholder="Postal / Zip Code"
          onChange={(e) =>
            setuser((user) => ({ ...user, zipcode: e.target.value }))
          }
        />
        <br />
        <label>Country : </label>
        <select
          value={user.country}
          onChange={(e) =>
            setuser((user) => ({ ...user, country: e.target.value }))
          }
        >
          <option value="">--select--</option>
          <option value="India">India</option>
          <option value="Australia">Australia</option>
          <option value="China">China</option>
        </select>
        <br />
        <br />
        <button onClick={click()}> Next</button>
        <br />
      </form>
    </div>
  );
}

let Notshow = () => {
  return <div></div>;
};

let Show = () => {};
