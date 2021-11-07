import s from './Filter.module.css';

export default function Filter({ value, onChange }) {
  return (
    <div className={s.filter}>
      <label>
        Find contacts by name
        <input type="text" value={value} onChange={onChange}></input>
      </label>
    </div>
  );
}
