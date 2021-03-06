import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

function CustomLink({ to, children }) {
  const match = useRouteMatch(to.pathname);

  return (
    <li style={{ fontWeight: match ? 900 : 'normal' }}>
      <Link to={to}>{children}</Link>
    </li>
  );
}

export default function Sidebar({ title, list }) {
  const { url } = useRouteMatch();

  return (
    <div className="sidebar">
      <h3>{title}</h3>
      <ul className="sidebar__list">
        {list.map((character) => (
          <CustomLink
            key={character.char_id}
            to={`${url}/${character.char_id}`}
          >
            {character.name}
          </CustomLink>
        ))}
      </ul>
    </div>
  );
}
