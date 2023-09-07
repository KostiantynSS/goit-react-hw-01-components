import css from './friendListItem.module.css';

function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className={css.item} key={id}>
      <span
        className={css.status}
        style={{ backgroundColor: { isOnline } ? 'green' : 'red' }}
      ></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;
